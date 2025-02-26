window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.style.opacity = "0.9";
  } else {
    navbar.style.opacity = "0.7";
  }
});

// smooth-scroll

document.addEventListener("DOMContentLoaded", function () {
  const navbarHeight = document.querySelector("nav").offsetHeight;
  const navLinks = document.querySelectorAll(".nav-link");
  const homeLink = document.querySelector('.nav-link[href="#home"]');

  // Initialize smooth scroll
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 400,
    offset: navbarHeight,
  });

  // Add smooth scroll to "Home" and "Contact" buttons
  document
    .querySelectorAll(".scrollToHomeBtn, .scrollToContactBtn")
    .forEach((button) => {
      button.addEventListener("click", function () {
        const targetId = this.classList.contains("scrollToHomeBtn")
          ? "home"
          : "contact";
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          scroll.animateScroll(targetSection);
        }
      });
    });

  // Add smooth scroll to "Mission & Vision" button
  document.querySelectorAll(".scrollToMissionVisionBtn").forEach((button) => {
    button.addEventListener("click", function () {
      const targetSection = document.getElementById("missionVision");
      if (targetSection) {
        scroll.animateScroll(targetSection);
      }
    });
  });

  // Set home as active by default
  homeLink.classList.add("text-btnColor");

  // Handle link clicks
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Remove active class from all links
      navLinks.forEach((navLink) => {
        navLink.classList.remove("text-btnColor");
      });
      // Add active class to clicked link
      this.classList.add("text-btnColor");
    });
  });

  // Handle scroll events to update active class
  window.addEventListener("scroll", function () {
    const fromTop = window.scrollY + navbarHeight + 100;

    navLinks.forEach((link) => {
      const section = document.querySelector(link.hash);
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("text-btnColor");
      } else {
        link.classList.remove("text-btnColor");
      }
    });
  });
});

// Preloader
window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  // Add smooth fade-out
  preloader.classList.add("preloader-hidden");

  // Add percentage loader (optional)
  let percentage = 0;
  const loadingText = document.querySelector(".loading-text");
  const interval = setInterval(() => {
    percentage = Math.min(percentage + Math.random() * 15, 100);
    loadingText.textContent = `Loading ${Math.floor(percentage)}%`;
    if (percentage >= 100) clearInterval(interval);
  }, 200);

  setTimeout(() => {
    preloader.style.display = "none";
  }, 1000);
});

// Fallback timeout
setTimeout(() => {
  const preloader = document.querySelector(".preloader");
  if (preloader) preloader.style.display = "none";
}, 4000);
