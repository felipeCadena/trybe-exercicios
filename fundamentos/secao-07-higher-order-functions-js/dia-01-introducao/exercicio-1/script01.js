//Nova pessoa contratada

const newEmployee = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_');
  return { fullName, email:`${email}@trybe.com` };
};

const newEmployees = (names) => {
  const employees = {
    id1: names('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: names('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: names('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(newEmployee));