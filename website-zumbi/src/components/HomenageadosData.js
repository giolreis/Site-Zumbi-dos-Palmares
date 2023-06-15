import "./Homenageados.css"

function HomenageadosData(props) {
    return(
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt={props.nome}/>
            </div>
            <h4>{props.titulo}</h4>
            <p>{props.descricao}</p>
        </div>
    )
}

export default HomenageadosData;