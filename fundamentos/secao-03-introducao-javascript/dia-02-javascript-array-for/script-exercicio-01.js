// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Percorra o array imprimindo todos os valores contidos nele com a função console.log().

// for (let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }


// Some todos os valores contidos no array e imprima o resultado.

// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index];
// }

// console.log(soma)


// Calcule e imprima a média aritmética dos valores contidos no array.

// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index];
// }

// let media = soma / numbers.length;

// console.log(media);



// Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index];
// }

// let media = (soma / numbers.length);

// if (media > 20) {
//   console.log('O valor da média aritmética é maior que 20');
// } else {
//   console.log('O valor da média aritmética é menor ou igual a 20')
// }



// Utilizando for, descubra o maior valor contido no array e imprima-o.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
}

console.log(maiorNumero)


// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.


// resultado = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     resultado += 1;
//   }
// }

// if (resultado === 0) {
//   console.log('Nenhum valor ímpar encontrado')
// } else {
//   console.log(resultado);
// }



// Utilizando for, descubra o menor valor contido no array e imprima-o.

// let menorNumero = numbers[0];

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] < menorNumero) {
//     menorNumero = numbers[index];
//   }
// }

// console.log(menorNumero)



// Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

// let numeros = [];

// for (let index = 0; index < 25; index += 1) {
//   numeros.push(index);    
// }

// console.log(numeros)


// for (let index = 0; index < numeros.length; index += 1) {
//   console.log(numeros[index] / 2);
// };





