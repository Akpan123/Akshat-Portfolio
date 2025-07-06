// Preloader functionality
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  // Show content immediately but keep it hidden visually
  content.style.display = "block";

  // Wait 1.5 seconds to simulate loading
  setTimeout(function () {
    // Fade out preloader
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";

    // Fade in content
    content.style.opacity = "1";
    content.style.visibility = "visible";

    // Remove preload-active class for transitions
    document.body.classList.remove("preload-active");

    // Remove preloader from DOM after animation completes
    setTimeout(function () {
      preloader.style.display = "none";
    }, 800);
  }, 1500);
});



$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Learner;", "Developer;", "Student;", "Coder;"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Learner;", "Developer;", "Student;", "Coder;"],
    typeSpeed: 110,
    backSpeed: 80,
    loop: true,
  });
});







// Ensure smooth animation without jank
function optimizeAnimation() {
  const scrollingTrack = document.querySelector('.scrolling-track');
  scrollingTrack.style.willChange = 'transform';
  scrollingTrack.style.backfaceVisibility = 'hidden';
}

// Initialize when page loads
window.addEventListener('load', optimizeAnimation);





