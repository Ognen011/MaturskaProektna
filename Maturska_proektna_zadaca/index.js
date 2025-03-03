const header = document.querySelector("header");
const aboutus =document.querySelector(".about-wrapper")
const aboutImage=document.querySelector(".aboutImage")
const contact=document.querySelector(".container")
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { 
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});    
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset; 
    var targetPosition1 = 1800; 
    var targetPosition2 = 2400;
  
    if (scrollPosition >= targetPosition1) {
        aboutus.style.transition="1s"
        aboutus.style.opacity="100%"
        aboutus.style.translate="0%"
        aboutImage.style.transition="2s"
        aboutImage.style.translate="0%"

    }
    if(scrollPosition<targetPosition1||scrollPosition>targetPosition1+800){
        aboutus.style.opacity="0%"
        aboutus.style.translate="-100%"
    }
    if (scrollPosition >= targetPosition2) {
        contact.style.transition="1s"
        contact.style.opacity="100%"
        contact.style.translate="0%"

    }
    if(scrollPosition<targetPosition2||scrollPosition>targetPosition2+800){
        contact.style.opacity="0%"
        contact.style.translate="-100%"
    }
  });
