import { useState } from 'react'
import './App.css'

function App() {
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    schooling: 'Selecionar',
    resume: '',
  });

  const [terms, setTerms] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target
    setFormInfo ({
      ...formInfo,
      [name]: value,
    })
  }

  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (terms) {
      setTerms(false);
      setError(false);
      alert(
        `Nome: ${formInfo.name}\nE-mail: ${formInfo.email}\nEscolaridade: ${formInfo.schooling}\nExperiências: ${formInfo.resume}`
        )
        resetForm();
      } else {
        setError(true)
      }
    }
    
    function resetForm() {
      setFormInfo({
      name: '',
      email: '',
      schooling: 'Selecionar',
      resume: '',
      })
    }

  return (
    <>
    {/* <label>
      Nome:
      <input value={name} onChange={({ target }) => setName(target.value)} />
    </label>
    <button onClick={() => setName('')}>Apagar!</button>
    <h1>Olá, {name}!</h1> */}
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>
        Nome 
        <input 
        required
        value={formInfo.name}
        name='name'
        onChange={handleChange}
        />
      </label>
      <label>
        E-mail 
        <input
        required
        value={formInfo.email}
        name='email'
        onChange={handleChange}
        />
      </label>
      <label>
        Escolaridade
        <select
        value={formInfo.schooling}
        name='schooling'
        onChange={handleChange}
        > 
          <option value="Selecionar">Selecionar</option>
          <option value="Médio">Médio</option>
          <option value="Superior">Superior</option>
          <option value="Pós-graduação">Pós-graduação</option>
        </select>
      </label>
      <label>
        Resumo das experiências 
        <textarea
        value={formInfo.resume}
        name='resume'
        onChange={handleChange}
        />
      </label>
      <label>
        Aceito os termos e condições 
        <input 
        type="checkbox"
        checked={terms}
        onChange={() => setTerms((prevTerms) => !prevTerms)}
        />
      </label>
      <button>Enviar</button>
    </form>
    {error && (
      <h4>Você precisa aceitar os termos e condições para poder enviar o currículo</h4>
    )}
    </>
  )
}

export default App
