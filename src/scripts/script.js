const burgerMenu = document.querySelector('.main-header__burger-wrapper');
const mobileMenu = document.querySelector('.mobile-header__menu');
const mobileBackground = document.querySelector('.mobile-header__background');


burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    mobileBackground.classList.add('active');
});

mobileBackground.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileBackground.classList.remove('active');
});
