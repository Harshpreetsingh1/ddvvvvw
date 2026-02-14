// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const themeText = document.querySelector('.theme-text');
const themeIcon = document.querySelector('.icon');

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.textContent = '🌙';
    themeText.textContent = 'Dark Mode';
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    // Update button text and icon
    if (document.body.classList.contains('light-mode')) {
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    }
});

// Add click animation to cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', function () {
        // Add pulse animation
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'translateY(-2px)';
        }, 100);

        // Log card interaction (can be replaced with actual navigation)
        console.log(`Clicked on: ${this.querySelector('.card-title').textContent}`);
    });
});

// Optional: Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 10);
});
