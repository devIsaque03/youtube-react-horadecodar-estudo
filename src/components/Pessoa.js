function Pessoa({ name, idade, profissão, foto }) {

    return (
        <div>
            <img src={foto} alt={name}/>
            <h2>Nome: {name}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissão}</p>
        </div>
    )
}

export default Pessoa