@@include('partials/tiny-slider.js');


const _removeClassesForMenuBtn = () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('header__nav-mobile');
    const mobileMenuOverlay = document.getElementById('header__overlay');
    const bodyDOM = document.getElementsByTagName('BODY')[0];

    if (mobileMenuOverlay) {mobileMenuOverlay.classList.remove('header__overlay--active')}
    if (mobileMenuBtn) {mobileMenuBtn.classList.remove('header__trigger--open')}
    if (mobileMenu) {mobileMenu.classList.remove('mobile-nav--active')}
    if (bodyDOM) {bodyDOM.classList.remove('menu-open')}
};

const _toggleClassesForMenuBtn = () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('header__nav-mobile');
    const mobileMenuOverlay = document.getElementById('header__overlay');
    const bodyDOM = document.getElementsByTagName('BODY')[0];

    mobileMenuOverlay.classList.toggle('header__overlay--active');
    mobileMenuBtn.classList.toggle('header__trigger--open');
    mobileMenu.classList.toggle('mobile-nav--active');
    bodyDOM.classList.toggle('menu-open');
};


window.onscroll = function() {
    const header = document.getElementById('header');
    if (header) {
        if (window.pageYOffset >= 1) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    }
};


document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');

    if (window.pageYOffset >= 1) {
        header.classList.add('header--scrolled');
    }

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

   if (mobileMenuBtn) {
       mobileMenuBtn.addEventListener('click', function () {
           _toggleClassesForMenuBtn();
       });
   }




});

window.onresize = function(){

    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 1200) {
        _removeClassesForMenuBtn();
    }
};


window.addEventListener('click', function () {
    _removeClassesForMenuBtn();
});

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('header__nav-mobile');

if (mobileMenu && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    mobileMenu.addEventListener('click', function (event) {
        event.stopPropagation();
    });
}


// -- TABS -----
const defaultTab = document.getElementById("defaultTab");
if (defaultTab) {defaultTab.click()}


function openTab(evt, tabName) {
    // Declare all variables

    // Get all elements with class="tabcontent" and hide them
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        // tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove('active')
    }

    // Get all elements with class="tablinks" and remove the class "active"
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        // tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].classList.remove('active')
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    // document.getElementById(tabName).style.display = "block";
    // evt.currentTarget.className += " active";

    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.className += " active";
}

