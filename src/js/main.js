@@include('partials/tiny-slider.js');


const _removeClassesForMenuBtn = () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('header__nav-mobile');
    const mobileMenuOverlay = document.getElementById('header__overlay');
    const bodyDOM = document.getElementsByTagName('BODY')[0];

    mobileMenuOverlay.classList.remove('header__overlay--active');
    mobileMenuBtn.classList.remove('header__trigger--open');
    mobileMenu.classList.remove('mobile-nav--active');
    bodyDOM.classList.remove('menu-open');
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
    if (window.pageYOffset >= 1) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
};


document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');

    if (window.pageYOffset >= 1) {
        header.classList.add('header--scrolled');
    }

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    mobileMenuBtn.addEventListener('click', function () {
        _toggleClassesForMenuBtn();
    });




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

mobileMenuBtn.addEventListener('click', function (event) {
    event.stopPropagation();
});

mobileMenu.addEventListener('click', function (event) {
    event.stopPropagation();
});
