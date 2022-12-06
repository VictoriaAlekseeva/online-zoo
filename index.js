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

//testimonials popup

let popupWrapper = document.querySelector('.testimonials-popup__wrapper');

let closePopupButton = document.querySelector('.testimonials-popup__close');

let testimonials = document.querySelector('.testimonials__cards__wrapper');

let popupAvatar = document.querySelector('.testimonials-popup__avatar');
let pupupName = document.querySelector('.testimonials-popup__name');
let popupLacal = document.querySelector('.testimonials-popup__location-and-date');
let popupText = document.querySelector('.testimonials-popup__text');


function closePopup() {
  popupWrapper.classList.remove('testimonials-popup_active')
}

function openPopup() {
  popupWrapper.classList.add('testimonials-popup_active')
}



closePopupButton.addEventListener('click', closePopup);
popupWrapper.addEventListener('click', (event) => {
  if (event.target.closest('.testimonials-popup__border')) return;
  closePopup();
});

testimonials.onclick = function(event) {
  let testimonial = event.target.closest('.testimonials__item_border');

  let userAvatar = testimonial.querySelector('.user__avatar');
  let userName = testimonial.querySelector('.user__name');
  let userLocation = testimonial.querySelector('.user__location-and-date');
  let testimonialText = testimonial.querySelector('.testimonials__text');

  if (!testimonial) return;

  popupAvatar.src = userAvatar.src;
  pupupName.innerHTML = userName.innerHTML;
  popupLacal.innerHTML = userLocation.innerHTML;
  popupText.innerHTML = testimonialText.innerHTML;

  openPopup();
}


