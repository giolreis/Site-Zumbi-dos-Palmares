import './Secao.css'
//imagens do site https://unsplash.com

function Secao(props) {
    return(
        <>
            <div className={props.cName}>
                <img alt='imagemNome' src={props.imagem}/>
            </div>

            <div className='secao-texto'>
                <h1 className='secao-meio'>{props.titulo}</h1>
                <p>{props.texto}</p>
            </div>
           
        </>
    )
}

export default Secao;