let balance = 1000;

const balanceDisplay = document.getElementById('balanceDisplay');
const amountInput = document.getElementById('amount');
const errorMessage = document.getElementById('errorMessage');

function updateBalance() {
    balanceDisplay.textContent = `Balance: $${balance}`;
}

function showError() {
    errorMessage.classList.add('visible');
}

function hideError() {
    errorMessage.classList.remove('visible');
}

document.getElementById('depositBtn').addEventListener('click', function() {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        showError();
        return;
    }

    balance += amount;
    updateBalance();
    hideError();
    amountInput.value = '';
});

document.getElementById('withdrawBtn').addEventListener('click', function() {
    const amount = parseFloat(amountInput.value);

    // Simple validation as per screenshot "Invalid amount!"
    // We can also add a check if balance is sufficient, but "Invalid amount" fits bad inputs generally
    if (isNaN(amount) || amount <= 0) {
        showError();
        return;
    }
    
    // Optional: Check insufficient funds
    if (amount > balance) {
        alert("Insufficient funds!"); // Or reuse error message if preferred, but alert is clearer for this specific case
        return;
    }

    balance -= amount;
    updateBalance();
    hideError();
    amountInput.value = '';
});
