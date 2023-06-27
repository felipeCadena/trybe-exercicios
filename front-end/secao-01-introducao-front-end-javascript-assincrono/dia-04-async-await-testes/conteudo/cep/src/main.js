import '/src/style.css';
import Swal from 'sweetalert2';
import getCEP from './getCEP';

const inputCEP = document.querySelector('input');
const buttonCEP = document.querySelector('button');
const dataCEP = document.querySelector('.data')

const generateCEP = async () => {
  const cep = inputCEP.value

  try {
    const data = await getCEP(cep)
    return dataCEP.textContent = 
[`CEP: ${data.cep}
RUA: ${data.logradouro}, ${data.complemento}
BAIRRO: ${data.bairro}
CIDADE: ${data.localidade}, ${data.uf}`]
  }
  catch(error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    })
  }
}

buttonCEP.addEventListener('click', generateCEP);