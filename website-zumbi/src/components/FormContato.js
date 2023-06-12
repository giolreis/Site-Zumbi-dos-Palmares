import "./FormContato.css"

function FormContato() {
    return(
        <div className="form-container">
            <h1>Envie uma mensagem!</h1>
            <form>
                <input placeholder="Nome"/>
                <input placeholder="Email"/>
                <input placeholder="Assunto"/>
                <textarea placeholder="Mensagem" rows="4"></textarea>
                <button>Enviar Mensagem</button>
            </form>
        </div>
    )
}

export default FormContato;