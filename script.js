// ==========================================
// MOBILE MENU FUNCTIONALITY
// ==========================================

const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-close');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Open mobile menu
burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close mobile menu
mobileClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ==========================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ==========================================

const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// HEADER SCROLL EFFECT
// ==========================================

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow on scroll
    if (scrollTop > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// ==========================================
// ACTIVE SECTION HIGHLIGHTING
// ==========================================

const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.style.color = 'var(--text-secondary)';
                });
                navLink.style.color = 'var(--accent-primary)';
            }
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe skill items
document.querySelectorAll('.skill-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
    observer.observe(item);
});

// ==========================================
// TYPING EFFECT FOR HERO TITLE (OPTIONAL)
// ==========================================

// Uncomment this section if you want a typing effect on the hero title
/*
const heroTitle = document.querySelector('.hero-title');
const titleText = heroTitle.textContent;
heroTitle.textContent = '';
let charIndex = 0;

function typeWriter() {
    if (charIndex < titleText.length) {
        heroTitle.textContent += titleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});
*/

// ==========================================
// PREVENT FOUC (Flash of Unstyled Content)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.visibility = 'visible';
});

// ==========================================
// KEYBOARD ACCESSIBILITY
// ==========================================

// Close mobile menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================

// Debounce scroll events for better performance
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
const debouncedHighlight = debounce(highlightNavigation, 10);
window.removeEventListener('scroll', highlightNavigation);
window.addEventListener('scroll', debouncedHighlight);

console.log('Portfolio website loaded successfully! 🚀');
