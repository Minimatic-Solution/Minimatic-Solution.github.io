window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.style.opacity = '0.9';
    } else {
        navbar.style.opacity = '0.7';
    }
});
