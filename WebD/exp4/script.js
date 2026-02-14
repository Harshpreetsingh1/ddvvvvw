// Get DOM elements
const messageInput = document.getElementById('messageInput');
const charCount = document.getElementById('charCount');

// Character limit
const MAX_CHARS = 500;

// Update character count
function updateCharCount() {
    const currentLength = messageInput.value.length;
    charCount.textContent = currentLength;

    // Remove all color classes first
    charCount.classList.remove('warning', 'danger');

    // Add color classes based on character count
    if (currentLength >= MAX_CHARS) {
        charCount.classList.add('danger');
    } else if (currentLength >= MAX_CHARS * 0.8) {
        charCount.classList.add('warning');
    }

    // Add subtle animation
    charCount.style.transform = 'scale(1.1)';
    setTimeout(() => {
        charCount.style.transform = 'scale(1)';
    }, 150);
}

// Event listener for real-time updates
messageInput.addEventListener('input', updateCharCount);

// Add smooth transition to char count
charCount.style.transition = 'all 0.15s ease';

// Initialize on page load
updateCharCount();
