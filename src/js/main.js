@@include('partials/tiny-slider.js');


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
});

