import "./Homenageados.css"

function HomenaeadosData(props) {
    return(
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="imagem"/>
            </div>
            <h4>{props.titulo}</h4>
            <p>{props.texto}</p>
        </div>
    )
}

export default HomenaeadosData;