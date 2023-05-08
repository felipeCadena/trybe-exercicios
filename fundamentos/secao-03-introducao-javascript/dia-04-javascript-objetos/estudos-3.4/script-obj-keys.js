// let coolestTvShow = {
//   name: 'BoJack Horseman',
//   genre: 'adult animation',
//   createdBy: 'Raphael Bob-Waksberg',
//   favoriteCharacter: 'Princess Carolyn',
//   quote: 'Princess Carolyn always lands on her feet.',
//   seasons: 6,
// };

// // for (let key in coolestTvShow) {
// //   console.log(key);
// // }

// // // name
// // // genre
// // // author
// // // favoriteCharacter
// // // quote
// // // seasons

// console.log(Object.keys(coolestTvShow)); 
//Object.keys retorna uma array que contenha as chaves de um objeto.

// // [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]


let student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

let student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};


function listSkills(student) {

  let arrayOfSkills = Object.keys(student);

  for (let index in arrayOfSkills) {
    console.log(arrayOfSkills[index] + ', Nível: ' + student[arrayOfSkills[index]]);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);



