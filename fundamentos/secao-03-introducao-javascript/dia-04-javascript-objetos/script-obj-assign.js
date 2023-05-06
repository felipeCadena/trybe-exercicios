// Object.assign -> copia outro objeto. Object.assign(destino, objeto1, objeto2)

let person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

let info = {
  age: 23,
  job: 'engenheiro',
};

let family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23, (sobreescreveu pq havia propriedades repetidas, o último é que vale)
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */

  // o Object.assign, se for usado em um objeto existente, modifica este objeto, como no exemplo abaixo:

  let person = {
    name: 'Roberto',
  };
  
  let lastName = {
    lastName: 'Silva',
    // job: 'dev' - se adicionar esta propriedade, vai mudar no objeto person tb
  };
  
  let clone = Object.assign(person, lastName);
  
  console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
  console.log(person); // { name: 'Roberto', lastName: 'Silva' }

  clone.name = 'Maria';

  console.log('Mudando a propriedade name através do objeto clone')
  console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
  console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
  console.log('--------------');

  person.lastName = 'Ferreira';

  console.log('Mudando a propriedade lastName através do objeto person');
  console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
  console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }


//mudar os dados do novo objeto criado sem modificar o objeto inicial?

let person = {
  name:'Roberto',
};

let lastName = {
  lastName: 'Silva',
};

let newPerson = Object.assign({},person,lastName); //Object.assign(target, objeto1, objeto2 - copiando os objetos para um novo)
newPerson.name = 'Gilberto';
newPerson.lastName = 'Almeida';
console.log(newPerson);
console.log(person);