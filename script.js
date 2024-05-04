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
    const navbarHeight = document.querySelector('nav').offsetHeight;
    const navLinks = document.querySelectorAll('.nav-link');
    const homeLink = document.querySelector('.nav-link[href="index.html"]');
    homeLink.classList.add('text-btnColor');
  
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800,
      offset: navbarHeight 
    });



    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (link !== homeLink) {
                navLinks.forEach(function (navLink) {
                    navLink.classList.remove('text-btnColor');
                });
            }

            link.classList.add('text-btnColor');
        });
    });
  });
  



