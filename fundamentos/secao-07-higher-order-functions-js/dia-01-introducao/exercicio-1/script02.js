const randomNumbers = () => {
  const numbers = Math.floor(Math.random() * (7 - 1) + 1);
  return numbers;
};


const lotery = (bet) => {
  if (randomNumbers() === bet) {
    return `Parabéns, você ganhou!`
  } else {
    return `Tente novamente`
  }
}

console.log(lotery(3))