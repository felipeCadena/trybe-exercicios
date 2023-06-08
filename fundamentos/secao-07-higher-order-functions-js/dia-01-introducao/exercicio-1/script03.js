const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (right, student) => {
    if (right == student) {
      return 1;
    }
    if (student === 'N.A') {
      return 0
    }
    return -0.5;
};

const count = (right, student, compare) => {
  let counter = 0;
  for (let i = 0; i < right.length; i += 1) {
    const salve = compare(right[i], student[i]);
    counter += salve;
  }
  return `Resultado final: ${counter} pontos`;
}

console.log(count(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers))