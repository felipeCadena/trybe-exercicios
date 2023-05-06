//entrada / entries => par (chave + valor)

let coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

console.log(Object.entries(coolestTvShow));

// [
//   [ 'name', 'BoJack Horseman' ],
//   [ 'genre', 'adult animation' ],
//   [ 'createdBy', 'Raphael Bob-Waksberg' ],
//   [ 'favoriteCharacter', 'Princess Carolyn' ],
//   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
//   [ 'seasons', 6 ]
// ]

// Como você pode perceber, ao aplicar o Object.entries nesse objeto, o retorno foi um array de arrays.

// A primeira entrada de cada array é a chave do objeto em formato de string, e o segundo elemento é o respectivo valor, que pode ser uma string ou outro tipo de dado. Por exemplo, o valor de seasons é um number.

let countries = {
  franca: 'Paris',
  brasil: 'Brasília',
  espanha: 'Madrid',
  portugal: 'Lisboa',
};
let pairKeyValue = Object.entries(countries);
// console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};