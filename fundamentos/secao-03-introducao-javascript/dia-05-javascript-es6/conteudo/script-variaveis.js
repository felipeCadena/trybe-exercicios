if (true) {
  // inicio do escopo do if
  var userAge = '20';
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20

//a variavel VAR funciona mesmo que o console.log esteja fora do escopo do if ou for (não se aplica pra function). LET e CONST não funcionam. O VAR vaza o escopo. O var torna-se global, se tiver fora de uma função.



const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro - não é possivel alterar const

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition - muda-se let

const userInfo = {
  name: 'Cláudio',
  id: '5489-2',
  email: 'claudio@email.com',
};

userInfo.name = 'João';

console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' } - Quando é um objeto e array, é possivel 'mudar'


//pode ser incluido novas informações em array com const
const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro


// Hoisting - move todas as declarações para o topo do escopo global.

age = 20;

var age;

console.log(age); // 20

//

var age;

age = 20;

console.log(age); // 20