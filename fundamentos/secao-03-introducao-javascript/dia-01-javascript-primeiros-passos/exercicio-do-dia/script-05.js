// 5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.


let angulo1 = 35;
let angulo2 = 45;
let angulo3 = 50;

let soma = angulo1 + angulo2 + angulo3;

if (soma === 180) {
  console.log(true)
} else if (soma > 0 && soma < 180) {
  console.log(false)
} else {
  console.log('Erro')
}