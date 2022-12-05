// open/close burger menu
const burgerMenuButton = document.querySelector('.burger-menu__button');
const burgerMenu = document.querySelector('.burger-menu');
const burgerOverlay = document.querySelector('.burger-menu__overlay');
const navLinks = document.querySelectorAll('.burger-menu__item');

function toggleMenu() {
    burgerMenu.classList.toggle('burger-menu_active');
}

function closeMenu() {
    burgerMenu.classList.remove('burger-menu_active');
}


burgerMenuButton.addEventListener('click', toggleMenu);
burgerOverlay.addEventListener('click', closeMenu);
navLinks.forEach((el) => el.addEventListener('click', closeMenu));