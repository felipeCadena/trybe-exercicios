const readline = require('readline-sync');


const weight = readline.questionInt('Whats your weight? (kg)');
const height = readline.questionFloat('Whats your height? ')


const calculateImc = (weigth, height) => weigth / (height / 100) ** 2;


const main = () => {
  const bmi  = calculateImc(weight, height);
  if (bmi < 18.5) {
    console.log('Status: Underweight (thin)');
    return;
  }

  if (bmi >= 18.5 && bmi < 25) {
    console.log('Status: Normal weight');
    return;
  }

  if (bmi >= 25 && bmi < 30) {
    console.log('Status: Overweight');
    return;
  }

  if (bmi >= 30 && bmi < 35) {
    console.log('Status: Grade I obesity');
    return;
  }

  if (bmi >= 35 && bmi < 40) {
    console.log('Status: Grade II obesity');
    return;
  }

  console.log('Status: Obesity grades III and IV');
};

main();
