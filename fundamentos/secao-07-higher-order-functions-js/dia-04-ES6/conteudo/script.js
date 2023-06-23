// // array original
// const items = ['Camiseta', 'Carregador', 'Chinelo'];

// // nova variável
// const newItems = [...items, 'Meia'];


// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR', 'MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const months = [...summer, ...fall, ...winter, ...spring];

// // const product = {
// //   id: 1,
// //   name: 'Camiseta',
// // };

// // const newProduct = { ...product, price: 23 };


// const product = {
//   id: 1,
//   name: 'Camiseta',
// };

// const productPrice = {
// price: 23
// }

// const newP = { ...product, ...productPrice };

// // console.log(newP);

// const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
// console.log(Math.max(...randomNumbers)); // 800

// Faça uma função chamada fruitSalad, passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.

// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Banana', 'Manga', 'Abacaxi'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['Aveia', 'Mel', 'Passas'];

// const fruitSalad = (fruit, additional) => {
//   const fruitsalad = [...fruit, ...additional]
//   return fruitsalad;
// };

// console.log(fruitSalad(specialFruit, additionalItens));

//REST

// const countParams = (...args) => {
//   console.log('parâmetros:', args);
//   return `Você passou ${args.length} parâmetros para a função.`;
// }

// console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
// console.log(countParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum(4, 7, 8, 9, 60)); // 88

//Object Destructuring

// const product = {
//   nameTV: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const { nameTV, seller } = product;
// console.log(nameTV); // Smart TV Crystal UHD
// console.log(seller); //Casas de Minas

// definindo o objeto
// const character = {
//   name: 'Luke SkyWalker',
//   age: '53',
//   description: {
//     specieName: 'Human',
//     jedi: true,
//   },
//   homeWorld: {
//     name: 'Tatooine',
//     population: '200000',
//   },
// };

// // desestruturando o objeto:
// const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// // imprimindo os valores:
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);


// const daysOfWeek = {
//   workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//   weekend: ['Saturday', 'Sunday'],
// };


// const { workDays, weekend } = daysOfWeek;
// console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// console.log(weekend); // ['Saturday', 'Sunday']

// const weekdays = [...workDays, ...weekend];
// console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };

// const { a: name, b: classAssigned, c: subject } = student;

// console.log(name); // Maria
// console.log(classAssigned); // Turma B
// console.log(subject); // Matemática

// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const printProductDetails = ({ name, price, seller }) => {
//   console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
// };

// printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

// Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const trappistEnterprise = { ...user, ...jobInfos }

// Imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.

const {
  name,
  age,
  nationality,
  profession,
  squad,
  squadInitials,
} = trappistEnterprise;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);
