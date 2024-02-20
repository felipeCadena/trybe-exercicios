const {encode, decode} = require('./encodeDecode');

describe('Teste as funções encode e decode', () => {
  test ('Teste se encode são funções', () => {
    expect(typeof encode).toBe('function');
  })
  test ('Teste se decode são funções', () => {
    expect(typeof decode).toBe('function');
  })
  test ('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente', () => {
    expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5');
  })
  test ('Para a função decode, teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
  })
  test ('Para a função encode, teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('string').length).toEqual(6);
  })
  test ('Para a função decode, teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('string').length).toEqual(6);
  })
})
