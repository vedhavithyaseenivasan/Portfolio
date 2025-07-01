// Get elements
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const hamIcon = hamburger.querySelector('.hamburger-icon');
const crossIcon = hamburger.querySelector('.cross-icon');

// Toggle hamburger menu
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        hamIcon.classList.remove('show');
        crossIcon.classList.add('show');
    } else {
        hamIcon.classList.add('show');
        crossIcon.classList.remove('show');
    }
});

// Close menu when any nav link is clicked (on mobile)
document.querySelectorAll('.menu-list .links').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 860) {
            menu.classList.remove('active');
            hamIcon.classList.add('show');
            crossIcon.classList.remove('show');
        }
    });
});

// Zoom effect on Skills section from navbar
document.querySelector('a[href="#portfolio"]').addEventListener('click', function () {
    const portfolio = document.getElementById('portfolio');

    // Add zoom effect
    portfolio.classList.add('zoomed');

    // Remove after delay
    setTimeout(() => {
        portfolio.classList.remove('zoomed');
    }, 2500);

    // Also close menu if on mobile
    if (window.innerWidth <= 860) {
        menu.classList.remove('active');
        hamIcon.classList.add('show');
        crossIcon.classList.remove('show');
    }
});
