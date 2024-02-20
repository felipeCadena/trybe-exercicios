let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Requisito 1

function turnoNoite (objeto, chave, valor) {
  objeto[chave] = valor
}

turnoNoite(lesson2, 'turno', 'noite')

console.log(lesson2)

//Requisito 2

function keys (objects) {
  return Object.keys(objects)
}

console.log(keys(lesson1));

//Requisito 3 

function objectSize (size) {
  return Object.keys(size).length;
}

console.log(objectSize(lesson1));

//Requisito 4

function valuesObj (values) {
  return Object.values(values)
}

console.log(valuesObj(lesson1))

//Requisito 5

let allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons)


//Object.assign(target, objeto1, objeto2 - copiando os objetos para um novo)


function sum (numberStudents) {

  let total = 0;

  let keys = Object.keys(numberStudents)

  for (let index in keys) { // for in para iterar sobre o array de chaves
    total += numberStudents[keys[index]].numeroEstudantes; // incremente a variável total a cada iteração
  }
  return total;  // a função retorna o total de alunos após as iterações do "for/in"
}

console.log(sum(allLessons));

function getValueByNumber(value, number) {
 return Object.values(value)[number];
}

// usa-se o "Object.values()" para criar um array com os valores do objeto e, então, pode-se acessar sua posição passando o índice.

//Metodos Objects sempre criam uma array?


console.log(getValueByNumber(lesson1, 2));
// Output: 'Matemática'


function verifyPair(object, key, value) {
  let entries = Object.entries(object);
  let equal = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) equal = true;
  }
  return equal;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false


