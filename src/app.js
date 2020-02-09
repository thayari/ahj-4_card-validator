import luhnAlgorithm from './luhn';
import paySystem from './paysystem';

const form = document.querySelector('form');
const input = form.querySelector('.cardnumber').value;
const button = form.querySelector('.button');
const images = document.querySelectorAll('.card');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // button.classList.remove('green', 'red');

  const luhn = luhnAlgorithm(input);
  const system = paySystem(input);

  if (luhn && system) {
    button.classList.add('green');
    images.forEach((item) => {
      if (item.dataset.id === system) {
        item.classList.add('active');
      }
    });
  } else {
    button.classList.add('red');
  }
});


// test valid number 4276844012951422
