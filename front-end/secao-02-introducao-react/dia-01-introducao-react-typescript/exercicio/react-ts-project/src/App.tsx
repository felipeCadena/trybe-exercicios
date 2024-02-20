import './App.css';
import HelloWorld from './components/HelloWorld';
import Age from './assets/age';

function App() {
  const name = 'Felipe Cadena';
  const birth = '26/05/1986';
  const age = Age(birth);

  return (
    <div>
      <h1>{ name }</h1>
      <p>
        {' '}
        { `Idade ${age} anos` }
      </p>
      <HelloWorld />
    </div>
  );
}

export default App;
