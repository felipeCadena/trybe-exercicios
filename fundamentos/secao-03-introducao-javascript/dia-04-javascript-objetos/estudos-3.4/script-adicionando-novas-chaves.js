// let customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName';
// let lastName = 'Ferreira';

// function addProperty(object, key, value) {
//   object[key] = value;
// };

// addProperty(customer, newKey, lastName);
// console.log(customer);

// newKey = 'fullName';
// let fullName = customer.firstName + ' ' + customer.lastName;

// addProperty(customer, newKey, fullName);
// console.log(customer);


let student = {
  firstName: 'Felipe',
  age: 36,
  job: 'Dev',
};

let novaChave = 'email';
let novoValor = 'felipecaden@gmail.com';


function adiciona(objeto, chave, valor) {
  objeto[chave] = valor;
}

adiciona(student, novaChave, novoValor)
adiciona(student, 'linkedin', 'felipecadena')

console.log(student);

// student[redeSocial] = pagina;
// console.log(student)