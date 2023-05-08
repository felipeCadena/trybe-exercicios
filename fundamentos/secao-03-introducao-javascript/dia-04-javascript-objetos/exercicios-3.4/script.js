let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//Requisito 1
console.log('Bem-vinda, ' + info.personagem)

//Requisito 2

info['recorrente'] = 'Sim';
console.log(info)

//Requisito 3

for (let keys in info) {
  console.log(keys);
}

// Requisito 4
console.log('----------')

for (let keys in info) {
  console.log(info[keys]);
}

//Requisito 5
console.log('----------')

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let key in info) {
  if (
    key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[key] + ' e ' + info2[key]);
  }
}

//Requisito bônus

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

//Requisito 1

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');

//Requisito 2

let newBook = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}

leitor.livrosFavoritos.push(newBook)
console.log(leitor)


//Requisito 3
  console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')



