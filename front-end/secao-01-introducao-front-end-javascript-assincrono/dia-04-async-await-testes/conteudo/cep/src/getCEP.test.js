import getCEP from './getCEP';

describe('Quando a requisição é bem sucedida, ela retorna os dados esperados', () => {
  it('deve retornar os dados quando passamos o cep válido', async () => {
    const address = await getCEP('20521070');

    expect(address.cep).toBe('20521-070');
    expect(address.logradouro).toBe('Rua General Roca');
    expect(address.bairro).toBe('Tijuca');
    expect(address.uf).toBe('RJ');
  })
  it('deve aceitar ceps com ou sem hifens', async () => {
    const address = await getCEP('20521070');
    expect(address.cep).toBe('20521-070');

    const secondAddress = await getCEP('20521-070');
    expect(secondAddress.cep).toBe('20521-070');
  })
})

  describe('Quando a requisição é bem sucedida, ela retorna os dados esperados', () => {
  it('Deve lançar erro "Você precisa passar um CEP" quando passar cep vazio', async () => {

    const error = new Error('Você precisa passar um CEP válido!');
    await expect(getCEP('')).rejects.toThrow(error);
  })
  it('Quando o cep tá em formato inválido, deve retornar um erro', async () => {
    const invalidCEP = 'XXXXX-XXX';
    const lessDigits = '00000-00'
    const moreDigits = '00000-0000'

    await expect(getCEP(invalidCEP)).rejects.toThrow();
    await expect(getCEP(lessDigits)).rejects.toThrow();
    await expect(getCEP(moreDigits)).rejects.toThrow();
  })
})