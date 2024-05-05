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

    // Smooth Scroll initialization
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 400,
        offset: navbarHeight 
    });

    // Function to smoothly scroll to #missionVision section
    function scrollToMissionVision() {
        const missionVisionSection = document.getElementById('missionVision');
        scroll.animateScroll(missionVisionSection);
    }

     // Function to smoothly scroll to #contact section
    function scrollToContact() {
        const missionVisionSection = document.getElementById('contact');
        scroll.animateScroll(missionVisionSection);
    }

    // Add event listener to the readMoreBtn
    const readMoreBtn = document.getElementById('readMoreBtn');
    const readMoreBtn2 = document.getElementById('readMoreBtn2');
    const readMoreBtn3 = document.getElementById('readMoreBtn3');
    const getInTouchBtn = document.getElementById('getInTouch');

    readMoreBtn.addEventListener('click', function() {
        scrollToMissionVision();
    });

    readMoreBtn2.addEventListener('click', function() {
        scrollToMissionVision();
    });

    readMoreBtn3.addEventListener('click', function() {
        scrollToMissionVision();
    });

    getInTouchBtn.addEventListener('click', function() {
        scrollToContact();
    })

    // Add event listeners to navLinks to handle active states
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
