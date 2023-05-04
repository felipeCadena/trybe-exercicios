let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];

//  imprimir a maior palavra do array
// imprimir a menor palavra do array

for (let index = 1; index < array.length; index += 1) {
   if (array[index].length > maior.length) {
    maior = array[index];
   }
}

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length < menor.length) {
   menor = array[index];
  }
}

console.log(maior)
console.log(menor)