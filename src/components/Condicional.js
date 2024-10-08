import { useState } from 'react'

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail) //Por algum motivo essa variável é atrasada
    }

    function limparEmail(e) {
        // e.preventDefault()
        setUserEmail('')
    }

    return (
        <>
            <h2>Cadastre o seu e-mail: </h2>
            <form>
                <input 
                    type="email" 
                    placeholder="Digite o seu e-mail..."
                    onChange={(e) => setEmail(e.target.value)}
                />
            </form>
            <button onClick={enviarEmail}>Enviar e-mail</button>
            {userEmail && ( //Condicional para aparecer o 'Div' abaixo
                <div>
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar E-mail</button>
                </div>
            )}
        </>
    )
}

export default Condicional