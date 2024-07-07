// main.js

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust based on the height of your fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });
});

