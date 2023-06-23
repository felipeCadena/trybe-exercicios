import './style.css';
import Swal from 'sweetalert2';

const inputRates = document.querySelector('#inputRates');
const buttonRates = document.querySelector('#buttonRates');
const listRates = document.querySelector('#listRates');
const titleMain = document.querySelector('#title_main');
const number = 3;

const getRates = (data) => {
  if (!inputRates.value) {
    throw new Error('Você precisa inserir uma moeda');
  }
  if (inputRates) {
    Object.keys(data.rates).forEach((coin, i) => {
      const currency = Object.values(data.rates);
      const li = document.createElement('li');
      listRates.appendChild(li);
      titleMain.innerHTML = `Valores referentes a 1 ${inputRates.value}`;
      li.classList.add('list');
      li.innerHTML = `💰 ${coin} ${currency[i].toFixed(number)}`;
    });
  }
};

buttonRates.addEventListener('click', () => {
  fetch(`https://api.exchangerate.host/latest?base=${inputRates.value}`)
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
