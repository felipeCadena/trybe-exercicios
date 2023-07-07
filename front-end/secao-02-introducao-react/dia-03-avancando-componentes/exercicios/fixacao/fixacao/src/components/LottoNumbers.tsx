type PropLottoNumbers = {
  numbers: number[]
}

export default function LottoNumbers({ numbers }: PropLottoNumbers) {
  return (
    <div>
      <h3>Os números sorteados são:</h3>
      <ul>
        {numbers.length !== 6 ? 'Erro: a lista não contém 6 números' :
        numbers.map((number) => (<li>{number}</li>))
      }
      </ul>
      </div>
  )
}