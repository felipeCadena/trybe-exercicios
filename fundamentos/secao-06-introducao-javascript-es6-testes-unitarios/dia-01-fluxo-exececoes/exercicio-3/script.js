const studentRegister = (name, age) => {
  if (name === undefined || age === undefined) {
    throw new Error('Todas as informações são necessárias');
  }

  if (age < 18) {
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
  }

  if (age >= 18) {
    return `${name}, seja bem-vindo(a) à AuTrybe!`
  }
}

console.log(studentRegister());