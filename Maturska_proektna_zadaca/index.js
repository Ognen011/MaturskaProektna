const header = document.querySelector("header");
const aboutus =document.querySelector(".about-wrapper")
const aboutImage=document.querySelector(".aboutImage")

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { 
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});    
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset; 
    var targetPosition = 1800; 
  
    if (scrollPosition >= targetPosition) {
        aboutus.style.transition="1s"
        aboutus.style.opacity="100%"
        aboutus.style.translate="0%"
        aboutImage.style.transition="2s"
        aboutImage.style.translate="0%"

    }
    if(scrollPosition<targetPosition){
        aboutus.style.opacity="0%"
        aboutus.style.translate="-100%"
    }
  });
