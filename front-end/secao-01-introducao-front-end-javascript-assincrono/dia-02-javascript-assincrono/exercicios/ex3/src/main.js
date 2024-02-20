import './style.css'

const dog = document.querySelector('#random-dog');
const cat = document.querySelector('#random-cat');
const images = document.querySelector('#random-pet-imageq');
const surprise = document.querySelector('#surprise-me')

dog.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((url) => {
    images.src = url.message;
  })
});

cat.addEventListener('click', () => {
  fetch('https://api.thecatapi.com/v1/images/search')
  .then((response) => response.json())
  .then((arrayCat) => {
    arrayCat.filter((image) => images.src = image.url)
  })
});

surprise.addEventListener('click', () => {
  Promise.any([
    fetch('https://api.thecatapi.com/v1/images/search'),
    fetch('https://dog.ceo/api/breeds/image/random'),
  ])
  .then((result) => result.json())
  .then((data) => {
    const newUrl = data.message || data[0].url;

    images.src = newUrl;
  })
});