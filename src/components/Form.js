import { useState } from 'react'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`)
    }

    const [name, setName] = useState('Isaque') //variável que quer trabalhar e outra para alteração desse valor

    const [password, setPassword] = useState('1') //Coloca uma pré resposta

    return (
        <>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholedr="Digite o seu nome" 
                        value={name} //Coloca uma pré resposta
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Digite a sua senha" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} //Cada alteração chama arrow function analisando e pegando o valor alterado
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </>
    )
}

export default Form