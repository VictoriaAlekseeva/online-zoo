let dotScale = document.querySelector('.donation__amount__list_dots');
let amountScale = document.querySelector('.donation__amount__list_amount');

let dot = document.querySelectorAll('.scale__dots');
let amount = document.querySelectorAll('.scale__amount');

let paymentAmount = document.querySelector('.payment-amount');

function removeHighlight() {
  let activeDot = dotScale.querySelector('.chosen');
  if (activeDot) activeDot.classList.remove('chosen');

  let activeAmount = amountScale.querySelector('.chosen');
  if (activeAmount) activeAmount.classList.remove('chosen');
}

function amountHightlight(target) {

  target.classList.add('chosen');

  dot.forEach((el) => {
    if (el.id == target.innerHTML) {
      el.classList.add('chosen');
      paymentAmount.value = el.id.slice(1); //to remove $
    }
  })
}

function dotHightlight(target) {

  target.classList.add('chosen');

  amount.forEach((el) => {
    if (el.innerHTML == target.id) {
      el.classList.add('chosen');
      paymentAmount.value = el.innerHTML.slice(1); //to remove $
    }
  })
}

dotScale.onclick = function(event) {
  removeHighlight();

  let target = event.target;

  if (!target.classList.contains('scale__dots')) return;

  dotHightlight(target);
}

amountScale.onclick = function(event) {
  removeHighlight();

  let target = event.target;

  if (!target.classList.contains('scale__amount')) return;

  amountHightlight(target);
}

paymentAmount.oninput = function () {
  removeHighlight();

  amount.forEach((el) => {
    if (paymentAmount.value == el.innerHTML.slice(1)) amountHightlight(el);
  })
}


