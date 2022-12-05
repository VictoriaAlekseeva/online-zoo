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


//input in testimonials

let input = document.querySelector('.testimonials__input');

let rangeValue = function(){
  let newInputValue = input.value;
  let target = document.querySelector('.testimonials__cards__wrapper'); //блок, который будет двигаться
  let wrapperWidth = document.querySelector('.testimonials__wrapper_hidden').offsetWidth; //ширина враппера по которой определяем размер карточек
  let blockWidth = document.querySelector('.testimonials__item_border').offsetWidth; //ширина карточки в блоке
  let gap;

  if (wrapperWidth <= 940) {
    gap = (wrapperWidth - blockWidth * 3)/3 + 3;
  } else  gap = (wrapperWidth - blockWidth * 4)/3 - 2;
  let x = newInputValue * (blockWidth + gap); //вычисляем на сколько картичек сдвигать, 9.167 - отношение ширины карточки к гапу
  target.style.marginLeft = `-${x}px`;
}

input.addEventListener("input", rangeValue);