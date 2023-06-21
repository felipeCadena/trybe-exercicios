// Implemente uma lógica que verifique a média da pessoa estudante. Para isso, considere as seguintes informações:
// Escreva uma função que receba, como parâmetro, 4 valores do tipo number. Caso o valor recebido como parâmetro não seja do tipo number, lance uma exceção.
// Lembre-se de quebrar problemas grandes em partes menores, a fim de facilitar sua manutenção e seu entendimento.





const checkNumber = (n1, n2, n3, n4) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number' || typeof n4 !== 'number') {
    throw new Error('É necessário digitar um número');
  }
}

const average = (n1, n2, n3, n4) => {
  const p = document.querySelector('p');
  try {
    checkNumber(n1, n2, n3, n4)
    let sum = n1 + n2 + n3 + n4;
    let media = sum / 4;
    return p.innerHTML = `A média do estudante é ${media}`;
  } catch (err) {
    p.innerHTML = err.message;
  }
};

console.log(average(2, 2, 2, 10));