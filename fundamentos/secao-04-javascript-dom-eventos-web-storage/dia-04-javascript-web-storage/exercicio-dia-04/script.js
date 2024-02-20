window.onload = () => {

const content = document.querySelector('.content');

const changeBack = (elements) => {
  for (let i = 0; i < elements.length; i += 1) { 
    elements[i].addEventListener('click', (event) => {
      content.style.backgroundColor = event.target.innerText;

      let background = localStorage.setItem('backgroundColor', (event.target.innerText))
      localStorage.getItem(background);      
    });
  }
};


const background = document.querySelectorAll('#background-color>button');

changeBack(background);


const colorText = (text) => {
  for (let i = 0; i < text.length; i += 1) {
    text[i].addEventListener('click', (event) => {
      content.style.color = event.target.innerText;

      let fontColor = localStorage.setItem('color', (event.target.innerText))
      localStorage.getItem(fontColor);
    })
  }
}

const color = document.querySelectorAll('#font-color>button');

colorText(color);

const fontSize = (font) => {
  for (let i = 0; i < font.length; i += 1) {
    font[i].addEventListener('click', (event) => {
      content.style.fontSize = event.target.innerText;

      let fontSize = localStorage.setItem('fontSize', (event.target.innerText))
      localStorage.getItem(fontSize);
    })
  }
};

const fontSizeContent = document.querySelectorAll('#font-size>button');

fontSize(fontSizeContent);


const spaceLine = (space) => {
  for (let i = 0; i < space.length; i += 1) {
    space[i].addEventListener('click', (event) => {
      content.style.lineHeight = event.target.innerText;

      let space = localStorage.setItem('lineHeight', (event.target.innerText))
      localStorage.getItem(space);
    })
  }
};

const line = document.querySelectorAll('#line-height>button');

spaceLine(line);

const fontFamily = (family) => {
  for (let i = 0; i < family.length; i += 1) {
    family[i].addEventListener('click', (event) => {
      content.style.fontFamily = event.target.innerText;

      let font = localStorage.setItem('fontFamily', (event.target.innerText))
      localStorage.getItem(font);
    })
  }
};

const fontFamilyContent = document.querySelectorAll('#font-family>button');

fontFamily(fontFamilyContent);

    
  };

  // localStorage.clear()

