// 3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let valor1 = 99;
let valor2 = 56;
let valor3 = 98;

if (valor1 > valor2 && valor1 > valor3) {
  console.log(valor1)
} else if (valor2 > valor1 && valor2 > valor3) {
  console.log(valor2)
} else {
  console.log(valor3)
}