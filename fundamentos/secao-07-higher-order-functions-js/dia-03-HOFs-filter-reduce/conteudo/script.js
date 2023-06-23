// const numbers = [50, 85, -30, 3, 15];

// //Tente criar a função que busca o maior valor do array numbers utilizando apenas o reduce.

// numbers.reduce((big, number) => big > number);

// console.log(numbers.reduce((big, number) => big > number ? big : number));


const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];


// const par = numbers.filter((number) => number % 2 === 0);

// const sum = par.reduce((acc, curr) => {return acc + curr}, 0);

// console.log(sum);

// const sumNumbers = () => {
//   const par = numbers.filter((number) => (number % 2 === 0))
//   const sum = par.reduce((acc, curr) => {return acc + curr}, 0)
//   return sum;
// }

//reduce gabarito
const sumPar = (acc, num) => ((num % 2 === 0) ? acc + num : acc);

const arraySum = (array) => array.reduce(sumPar, 0)

console.log(arraySum(numbers));


//filter e reduce gabarito
const isEven = (number) => number % 2 === 0;
const sum = (accumulator, number) => accumulator + number;

const sumNumbers = (array) => array.filter(isEven).reduce(sum); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152