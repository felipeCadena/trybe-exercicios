//Requisito 1

function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
}
imprimeIdade()

//Requisito 2

  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  
  pessoa.nome = 'Luna'
  pessoa.idade = 19;

  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);

  // Requisito 3

  let favoriteFood = 'Lasanha';
  favoriteFood = 'Hambúrguer';
  console.log(favoriteFood);

  //Requisito 4

  const name = 'Adriana';
  const lastName = 'Soares';
  console.log(`Olá, ${name} ${lastName}!`);
  function soma(a,b) {
    let resultado = a + b;
    return resultado;
  }
  let a = 3;
  let b = 5;
  console.log(`O resultado da soma de ${a} + ${b}: ${soma(a,b)}`);

  //Requisito 4

  const numeroAleatorio = () => Math.random()

  console.log(numeroAleatorio());

  //Requisito 5

  const hello = nome => `Olá, ${nome}!`
  let nome1 = 'Ivan';
  console.log(hello(nome1));

//Requisito 6

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`

let nome = 'Ivan';
let sobrenome = 'Pires';

console.log(nomeCompleto(nome, sobrenome));

//Requisito 7

let speed = 140;
const speedCar = (speed) => (speed >= 120) ? `Você ultrapassou o limite de velocidade`: `Você está na velocidade permitida`;

console.log(speedCar(speed));
