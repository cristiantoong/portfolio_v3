
// get current year
const currentDate = new Date;
const year = document.getElementById('year');
year.innerHTML = currentDate.getFullYear();



const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('.navbar__logo')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}


menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const projectsMenu = document.querySelector('#projects-page');
    const aboutMenu = document.querySelector('#about-page');
    let scrollPos = window.scrollY;
    //console.log(scrollPos);

    // adds 'highlight' class to my menu items
    // if width is for desktop
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        projectsMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 4600) {
        projectsMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 5000) {
        aboutMenu.classList.add('highlight');
        projectsMenu.classList.remove('highlight');
        return
    }
    // if width is for mobile
    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }

}


window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);




// Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 960 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)



// Scroll To Top
const btnScrollTop = document.querySelector(".scrollToTop");

btnScrollTop.addEventListener('click', function(){
    // window.scrollTo(0, 0);

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
});


window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    btnScrollTop.classList.remove("btnFadeOut");
    btnScrollTop.classList.add("btnFadeIn");
    btnScrollTop.style.transition = 'all 0.3s ease'
    btnScrollTop.style.display = "block";

} else { // Hide backToTopButton
    setTimeout(function() {
        btnScrollTop.classList.remove("btnFadeIn");
        btnScrollTop.classList.add("btnFadeOut");
        btnScrollTop.style.transition = 'all 0.3s ease'
        btnScrollTop.style.display = "none";
    }, 250);

    }
}