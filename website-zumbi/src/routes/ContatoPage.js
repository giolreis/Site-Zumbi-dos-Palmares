import Secao from "../components/Secao";
import FormContato from "../components/FormContato";

function ContatosPage() {
    return(
        <>
            <Secao
            cName="secao"
            imagem="https://images.unsplash.com/photo-1550051414-003c9007794c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
            titulo='Entre em Contato a gente : Juntos Pela Igualdade e Justiça'
            />
            <FormContato/>
        </>
    )
}

export default ContatosPage;