import {useState} from 'react'
import SeuNome from './components/SeuNome'
import Saudacao from './components/Saudacao'

function App5() {

    const [nome, setNome] = useState()

    return (
        <div>
            <h1>State Lift</h1>
            <SeuNome setNome={setNome}/>
            {nome}
            <Saudacao nome={nome}/>
        </div>
    )
}

export default App5