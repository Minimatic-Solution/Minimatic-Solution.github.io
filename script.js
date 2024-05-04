window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.style.opacity = '0.9';
    } else {
        navbar.style.opacity = '0.7';
    }
});

// smooth-scroll

document.addEventListener('DOMContentLoaded', function () {
    var navbarHeight = document.querySelector('nav').offsetHeight;
  
    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800,
      offset: navbarHeight 
    });
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Remove 'text-btnColor' class from all navigation items
            navLinks.forEach(function (navLink) {
                navLink.classList.remove('text-btnColor');
            });

            // Add 'text-btnColor' class to the clicked navigation item
            link.classList.add('text-btnColor');
        });
    });
});