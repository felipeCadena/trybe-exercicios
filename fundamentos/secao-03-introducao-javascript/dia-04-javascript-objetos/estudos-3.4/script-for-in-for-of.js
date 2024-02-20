let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let saudacao in names) {
  console.log('Olá, ' + names[saudacao])
}


let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let keyValues in car) {
  console.log(keyValues, car[keyValues])
}