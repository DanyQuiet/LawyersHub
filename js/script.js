const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },




});





let navToggle = document.querySelector('#navToggle');
let nav = document.querySelector('#nav');
let body = document.querySelector('body');


navToggle.addEventListener('click', function (event) {
    event.preventDefault();
    nav.classList.toggle('menu__list-show')
    body.classList.toggle('show')

})


new Vivus(
    'image',
    {
        type: 'sync',
        duration: 500,
        // start: 'manual'
    },

);


