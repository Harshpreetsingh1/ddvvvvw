
const messageInput = document.getElementById('messageInput');
const charCount = document.getElementById('charCount');


const MAX_CHARS = 500;

function updateCharCount() {
    const currentLength = messageInput.value.length;
    charCount.textContent = currentLength;
    charCount.classList.remove('warning', 'danger');

    if (currentLength >= MAX_CHARS) {
        charCount.classList.add('danger');
    } else if (currentLength >= MAX_CHARS * 0.8) {
        charCount.classList.add('warning');
    }


    charCount.style.transform = 'scale(1.1)';
    setTimeout(() => {
        charCount.style.transform = 'scale(1)';
    }, 150);
}

messageInput.addEventListener('input', updateCharCount);

charCount.style.transition = 'all 0.15s ease';
updateCharCount();
