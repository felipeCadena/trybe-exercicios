const myFizzBuzz = require('./myFizzBuzz');

describe('Caso num seja um número divisível por', () => {
  test('Verifica se retorna o valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(1)).toBe(1);
    expect(myFizzBuzz('2')).toBeFalsy();
  });
})