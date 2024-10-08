import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App2() {

    return (
        <div>
            <h1>Olá, mundo!</h1>
            <Evento numero='1' />
            <Evento numero='2' />
            <Form />
        </div>
    )
}

export default App2