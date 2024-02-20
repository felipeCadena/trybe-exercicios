// função 1

const substituaX = (nome) => {

  const frase = 'Tryber x aqui!'

  const fraseNova = frase.split(' '); //o espaço é o separador. pode ser qualquer coisa (-)

  for (let index = 0; index < fraseNova.length; index += 1) {

    if (fraseNova[index] === 'x') {
      fraseNova[index] = nome;
    }
  }
  return fraseNova.join(' ')
};

// console.log(substituaX('Felipe'));

//função 2

const minhasSkills = (substituaX) => {
  const skill = ['Javascript', 'HTML', 'CSS'];
  let text = `${substituaX}

  Minhas três principais habilidades são: `;
  for (let index = 0; index < skill.length; index += 1) {
    text = `${text} 
    - ${skill[index]}`;
  }
  return text;
}

console.log(minhasSkills(substituaX('Felipe')))


