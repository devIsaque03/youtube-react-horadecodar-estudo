import './App.css'
import OutraLista from './components/OutraLista'

function App4() {

    const meusItens = ['React', 'Vue', 'Angular']

    return (
        <div>
            <h1>Renderização de Listas</h1>
            <OutraLista itens={meusItens} />
            <OutraLista itens={[]} /> {/*Lista vazia*/}
        </div>
    )
}

export default App4