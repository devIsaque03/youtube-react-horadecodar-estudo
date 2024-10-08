import './App.css';
import HelloWorld from './components/HelloWorld.js'; //Componente
import SayMyName from './components/SayMyName.js'; // Componente com props (são valores passados para componentes)
import Pessoa from './components/Pessoa.js'; // Componente com mais de uma props
import List from './components/List.js' // React frangments (sem um elemento pai - Olhar dentro do componente)

function App() {
  const name = 'Isaque'
  const newName = name.toUpperCase()

    function sun(a, b) {
      return a + b
    }

    const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Alterando JSX</h1>
      <p>Olá, {newName}</p>
      <p>Soma: {sun(1, 2)}</p>
      <img src={url} alt="Minha Imagem" />
      <HelloWorld /> 
      <SayMyName name = 'Dev'/>
      <Pessoa 
      name='Isaque'
      idade='20'
      profissão='Programador'
      foto='https://via.placeholder.com/150'
      />
      <List />
    </div>
  );
}

export default App;
