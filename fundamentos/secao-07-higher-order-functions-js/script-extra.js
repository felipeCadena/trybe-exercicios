// Escreva uma função chamada encontrarPalavrasComLetras que recebe um array de palavras e uma letra como parâmetros, e retorna um novo array contendo apenas as palavras que contêm a letra especificada.


const encontrarPalavrasComLetras = (array, letter) => {
  return array.filter((a) => a.includes(letter))
}

console.log(encontrarPalavrasComLetras(['vamos', 'embora', 'fluiu', 'zebra', 'brasil'], 'e'));