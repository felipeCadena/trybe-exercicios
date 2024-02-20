// 10 - Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.

// Atente para o fato de que um imposto de 20% incide sobre o custo do produto.

// Seu código deve emitir uma mensagem de erro e encerrar caso algum dos valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo e deve considerar que o imposto de 20% faz parte do valor de custo.

// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);


let custo = 30;

let valorVenda = 100;

let custoImposto = custo * 20 / 100;

let custoTotal = custo + custoImposto;

let lucro = (valorVenda - custoTotal) * 1000;

if (custo < 0 || valorVenda < 0) {
  console.log('Inválido')
} else {
  console.log('Seu lucro foi de R$ ' + lucro)
}
