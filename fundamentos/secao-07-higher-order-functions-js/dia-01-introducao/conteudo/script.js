//ForEach

// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

// arrayOfValues.forEach((element, index) => {
//   console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
// });


// const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

// pessoasAprovadas.forEach((nome, index) => {
//   pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase();
// });

// console.log(pessoasAprovadas);

// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// emailListInData.forEach((email) => {
//   console.log(`O email ${email} está cadastrado em nosso banco de dados!`)
// });

//FIND

// const employees = [
//   { id: 1, nome: 'Douglas Adams', idade: 20},
//   { id: 2, nome: 'H. G. Wells', idade: 18},
//   { id: 3, nome: 'Júlio Verne', idade: 57},
//   { id: 4, nome: 'Margaret Atwood', idade: 83},
//   { id: 5, nome: 'Edgar Allan Poe', idade: 19},
// ];


// console.log(employees.find((employee) => employee.id === 2).nome); // H. G. Wells

// console.log(employees.find((employee) => employee.nome === 'Margaret Atwood').id); // 4


// const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

// console.log(idades.find((idade) => idade === 33)); // undefined

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// console.log(numbers.find((number) => number % 3 === 0 && number % 5 === 0));

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// console.log(names.find((name) => name.length === 5));

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ];

// console.log(musicas.find((music) => music.id === '31031685').title)


//SOME

// const pessoas = [
//   { nome: 'Ana', cargo: 'Analista' },
//   { nome: 'João', cargo: 'Gerência' },
//   { nome: 'Aline', cargo: 'Analista' },
//   { nome: 'Joana', cargo: 'Gerência' },
// ];

// const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Product Owner');

// console.log(verificaCargo); // true


// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('X', listNames)); // false

//EVERY

// const grades = {
//   portugues: 'Aprovado',
//   matematica: 'Reprovado',
//   ingles: 'Aprovado',
// };

// const verifyGrades = Object.values(grades).every((grade) => grade.toLowerCase() === 'aprovado'); // false

// console.log(verifyGrades);

// FIXAR

//01

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((arrNames) => arrNames === name);

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

//02

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, age) => arr.every((ages) => ages.age >= age); 

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));


//RELEMBRANDO

const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`));

console.log(pessoas.find((pessoa) => pessoa.nome === 'Aline'));

console.log(pessoas.some((pessoa) => pessoa.idade > 30))

console.log(pessoas.every((pessoa) => pessoa.idade > 30))