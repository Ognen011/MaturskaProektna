const header = document.querySelector("header");
const aboutus = document.querySelector(".about-wrapper");
const aboutImage = document.querySelector(".aboutImage");
const contact = document.querySelector(".container");

// Scroll Event for Header
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll Event for About and Contact Sections
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var targetPosition1 = 2000  ;


    // About Section
    if (scrollPosition >= targetPosition1 && scrollPosition < targetPosition1 + 500) {
        contact.style.transition = "1s";
        contact.style.opacity = "1";
        aboutus.style.transform = "translateX(0)";
        aboutImage.style.transform = "translateX(0)";
        aboutus.style.transition="1s";
        aboutImage.style.transition="1s";

    } else {
        aboutus.style.translateX = "0";
        aboutImage.style.transform = "translateX(-300%)";
        aboutus.style.transform = "translateX(-100%)";

    }

});