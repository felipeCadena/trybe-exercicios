// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

// Ex 1
hrefLink.addEventListener('click', (event) => {
  event.preventDefault();
});

// Ex 2
inputCheckbox.addEventListener('click', (event) => {
  event.preventDefault();
});

// Ex 3
inputText.addEventListener('keypress', (event) => {
  const letter = event.key;
  if (letter !== 'a') {
    event.preventDefault();
  }
});
