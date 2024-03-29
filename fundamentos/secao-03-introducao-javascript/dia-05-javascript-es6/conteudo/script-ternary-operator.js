//operador ternário

// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, pode-se ter expressões com a seguinte estrutura:

const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira

// x (condição) ? y (valor se verdadeiro) : z (valor se for falso)

// x -> expressão que será avaliada como verdadeira ou falsa

// y -> retorno se for true
// z -> retorno se for false


// Situação em que é mais simples usar o operador ternário:
const checkIfElse = (age) => {
  if (age >= 18) {
    return `Você tem idade para dirigir!`;
  } else {
    return `Você ainda não tem idade para dirigir...`;
  }
};

const checkTernary = (age) => (
  age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`;
);

// ------------------------

// Situação em que usar o operador ternário não faz muito sentido:
const checkIfElse2 = (fruit) => {
  if (fruit === `maçã`) {
    return `Essa fruta é vermelha`;
  } else if (fruit === `banana`) {
    return `Esta fruta é amarela`;
  } else {
    return `Não sei a cor`;
  }
};

const checkTernary2 = (fruit === `maçã`) ? `Essa fruta é vermelha` 
  : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);

// Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
// pois torna seu código truncado e difícil de ler, tirando todo o sentido de um
// operador cujo objetivo é facilitar sua vida e a da pessoa que lerá seu código
// no futuro!

//caso só tenhamos o if - retornar apenas um valor
const idade = 22;

console.log(idade >= 18 && 'Você já pode ter a carteira de motorista!')
