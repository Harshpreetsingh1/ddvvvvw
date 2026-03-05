const express = require('express');
const { createClient } = require('redis');

const app = express();
const PORT = 3000;

const client = createClient();
client.on('error', err => console.error('Redis Client Error', err));

app.use(express.json());

const TOTAL_TICKETS = 100;
const TICKET_KEY = 'tickets:remaining';
const LOCK_KEY = 'tickets:lock';

// Sleep utility for spin lock
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function acquireLock(lockName, timeoutMs, retryDelay = 10) {
    const end = Date.now() + timeoutMs;
    while (Date.now() < end) {
        // Try to acquire the lock:
        // NX flag means "Not eXists" - it will only set the key if it doesn't already exist.
        // PX flag sets the expiration time for the key, preventing deadlocks if the server crashes.
        const result = await client.set(lockName, 'LOCKED', {
            NX: true,
            PX: 2000
        });

        if (result === 'OK') {
            return true;
        }

        // Wait before checking the lock again (Spin lock)
        await sleep(retryDelay);
    }
    return false;
}

async function releaseLock(lockName) {
    await client.del(lockName);
}

app.post('/api/book', async (req, res) => {
    // Attempt to acquire lock for 5 seconds
    const locked = await acquireLock(LOCK_KEY, 5000);

    if (!locked) {
        return res.status(503).json({
            success: false,
            message: 'Server is busy, could not acquire lock for booking.'
        });
    }

    try {
        let remaining = parseInt(await client.get(TICKET_KEY) || '0', 10);

        if (remaining > 0) {
            remaining -= 1;
            await client.set(TICKET_KEY, remaining);

            res.status(200).json({
                success: true,
                bookingId: Date.now(), // Mock booking ID based on time
                remaining: remaining
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'No tickets left'
            });
        }
    } catch (err) {
        console.error('Error during booking:', err);
        res.status(500).json({
            success: false,
            message: 'Internal server error while booking.'
        });
    } finally {
        await releaseLock(LOCK_KEY);
    }
});

// Setting up Initial Conditions and Starting the server
async function main() {
    await client.connect();

    // Check if ticketing state is already set up, otherwise initialize it to TOTAL_TICKETS
    const exists = await client.exists(TICKET_KEY);
    if (!exists) {
        await client.set(TICKET_KEY, TOTAL_TICKETS);
        console.log(`Initialized total tickets: ${TOTAL_TICKETS}`);
    } else {
        const remaining = await client.get(TICKET_KEY);
        console.log(`Current tickets remaining in DB: ${remaining}`);
    }

    app.listen(PORT, () => {
        // Kept the typo from standard image response "running o port"
        console.log(`Booking system running o port ${PORT}`);
    });
}

main().catch(console.error);
