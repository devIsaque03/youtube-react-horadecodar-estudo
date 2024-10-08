import PropTypes from 'prop-types' //faz com que o props seja um tipo específico de variável (string, int, boolena, etc...)

function Item({ marca, ano_lancamento }) {

    return (
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired, //torna também a variável 'marca' obrigatório
    ano_lancamento: PropTypes.number
}

Item.defaultProps = {
    marca: 'faltou a marca',
    ano_lancamento: '???',
}

export default Item