// Requisito 1

// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function novosClientes(nomes) {
//   if (typeof nomes === 'string') {
//     clientesTrybeBank.push(nomes)
//     return 'Cliente adicionado(a) com sucesso'
//   } else {
//     return 'O parâmetro passado deve ser um tipo string'
//   }
// }

// console.log(novosClientes(10));
// console.log(novosClientes('José'));
// console.log(clientesTrybeBank);

// Requisito 2

let clientesTrybeBank = ['Ada', 'John', 'Gus'];


function validaCliente(nomes) {
  if (typeof nomes !== 'string') {
    return 'O parâmetro passado deve ser um tipo string'
  } else {
    return true;
  }
}

  function clienteIndex(nomes) {
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
      if (nomes === clientesTrybeBank[index]) {
        return index;
      }
    } return false
  }

  function removeCliente(nomes) {
    let validacao = validaCliente(nomes);
    if (validacao !== true) {
      return validacao
    }

    let index = clienteIndex(nomes);
    if (index === false) {
      return 'Cliente não encontrado(a)'
    }

    clientesTrybeBank.splice(index, 1);
    return 'Cliente excluído(a) com sucesso';
  }



console.log(removeCliente(false));
console.log(removeCliente('José'));
console.log(removeCliente('John'));
console.log(clientesTrybeBank);