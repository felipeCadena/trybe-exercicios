export default async function getCEP(cep) {
  if (!cep) throw new Error ('Você precisa passar um CEP válido!');
  // if (cep !== data.cep) throw new Error ('Você precisa passar um CEP válido!')

  const result = await fetch(`https://viacep.com.br/ws/${cep}/json`);
  const data = await result.json();
  return data;

}