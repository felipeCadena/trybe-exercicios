//declarar funções

function printName() {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());

// declarar funções e atribuir a variavel

const printName = function () {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());

//funções anônimas (sem nome). Caso não seja reutilizada ou serão passadas como argumento para outro função

//função anônima com arrow functions. forma simplificada de declarar funções

const printName = () => {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());

// Quando não há nada no corpo da função além do que será retornado. Sem {} e return

const printName = () => 'Lucas';
console.log(printName());

//Quando a função recebe somente um argumento, pode-se omitir o () também

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

//com mais de um parâmetro/argumento

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));

//função normal
function contaPalavra (frase) {
  return frase.split(' ').length;
}

console.log(contaPalavra('Fala tribo, beleza?'))

//arrow
const contaPalavra = frase => frase.split(' ').length;

console.log(contaPalavra('Fala tribo, beleza?'))

//função normal
// function objetoPessoa (nome, idade) {
//   return {
//     nome: nome,
//     idade: idade
//   }
// }
// console.log(objetoPessoa('Felipe', 36))

//arrow - em caso de objeto, colocar {} entre (). Se não é entendido como o corpo da função

const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade})

console.log(objetoPessoa('Felipe', 36))