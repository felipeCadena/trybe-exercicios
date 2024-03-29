// 6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)


let peca = 'rainha';

switch (peca.toLowerCase()) {

  case 'bispo':
    console.log('O ' + peca + ' pode fazer movimentos na diagonal')
      break;

  case 'torre':
    console.log('A torre anda em linha reta horizontalmente e verticalmente')
      break;

  case 'rainha':
    console.log('A rainha pode se mover livremente pelo tabuleiro!') 
      break;
  
  default:    
  console.log('Inválido')
}