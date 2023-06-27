import './style.css';
import Swal from 'sweetalert2';
import coinImg from './assets/coin.svg';

const inputRates = document.querySelector('#inputRates');
const buttonRates = document.querySelector('#buttonRates');
const titleMain = document.querySelector('#title_main');
const container = document.querySelector('#container');
const number = 3;

const getRates = (data) => {
  if (!inputRates.value) {
    throw new Error('Você precisa inserir uma moeda');
  }
  if (data.base !== inputRates.value.toUpperCase()) {
    throw new Error('Moeda não existente!');
  }
  container.innerHTML = '';
  Object.entries(data.rates).forEach(([coinName, coinValue]) => {
    const div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('coins');
    div.innerHTML = `<span>${coinName}</span> <span class='yellow'>
    ${coinValue.toFixed(number)}</span>`;
    const img = document.createElement('img');
    div.appendChild(img);
    img.src = coinImg;
    titleMain.innerHTML = `Valores referentes a 1 ${inputRates.value.toUpperCase()}`;
  });
};

buttonRates.addEventListener('click', () => {
  const url = `https://api.exchangerate.host/latest?base=${inputRates.value}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => getRates(data))
    .catch((error) => Swal.fire({
      icon: 'error',
      title: 'Oops...',
      background: '#383845',
      color: 'white',
      text: error.message,
    }));
});
