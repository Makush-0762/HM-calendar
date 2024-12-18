const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
});

const swiper = new Swiper('.swiper_slide', {
    loop: true,
    pagination: {
        el: '.swiper-pagin',
    },
});
