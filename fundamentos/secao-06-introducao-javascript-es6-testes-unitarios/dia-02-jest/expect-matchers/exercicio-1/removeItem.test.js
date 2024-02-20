const removeItem = require('./removeItem');

describe('Implemente a função removeItem', () => {
  test('Verifique se retorna o array esperado', () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Verifique se não retorna o array esperado', () => {
    expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Verifique se retorna o array esperado', () => {
    expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})

// Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado.
// Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].
// Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.