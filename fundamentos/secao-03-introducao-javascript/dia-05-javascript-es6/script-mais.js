// //Requisito 1

// let ligado = false;
// const motor = () => (ligado === true) ? 'Carro ligado' : 'Carro desligado';

// console.log(motor(ligado))

// //Requisito 2

// // area = 3.14 * (raio * raio)

// const area = (pi, raio) => `A area de um círculo é ${pi * raio}`

//   const pi = 3.14;

//   let raio = 20 ** 2;

//   console.log(area(pi, raio))

// // ou -> melhor organizada embaixo

// const circleArea = (raio) => {

// const pi = 3.14;

// let area = pi * (raio **2);

// return `Esta é a área do círculo: ${area}`
// }

// console.log(circleArea(20))

//Requisito 3

// const longestWord = (text) => {

// const bigWord = text.split(' ')
// let maxLength = 0;
// let result = '';

// for (const word of bigWord) {
//   if (word.length > maxLength) {
//     maxLength = word.length;
//     result = word;
//   }
// }

// return result;
// }

// console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'))


const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));


// let array = ['eu', 'voce', 'naras', 'almeida']
// let posicao = 0;
// let palavra = '';

// for (const index of array) {
//   if (index.length > posicao) {
//     posicao = index.length;
//     palavra = index;
//   }
// }

// console.log(palavra)

