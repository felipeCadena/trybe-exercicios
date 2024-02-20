import "./style.css";

const button = document.querySelector('button');
const container = document.querySelector('#container');
const names = document.querySelector('.names')
const clear = document.querySelector('#clear')


button.addEventListener('click', () => {
  fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
  .then((response) => response.json())
  .then((info) => {
    container.innerHTML = '';
    clear.remove()
    const number = Math.round(Math.random() * 563)
    const img = document.createElement('img');
    container.appendChild(img);
    names.innerHTML = info[number].name;
    img.src = info[number].images.lg;
    img.style.width = '200px'
    img.style.height = '300px'
    })
    .catch ((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Alguma coisa deu errada! Tente novamente!',
      })
    })
})