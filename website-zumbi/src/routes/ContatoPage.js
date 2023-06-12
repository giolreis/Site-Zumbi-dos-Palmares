import Navbar from "../components/Navbar";
import Secao from "../components/Secao";
import Footer from "../components/Footer";
import FormContato from "../components/FormContato";

function ContatosPage() {
    return(
        <>
            <Navbar/>
            <Secao
            cName="secao"
            imagem="https://images.unsplash.com/photo-1550051414-003c9007794c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
            titulo='Título que vai na página do Contato'
            texto='texto sobre seu contato'
            />
            <FormContato/>
            <Footer/>
        </>
    )
}

export default ContatosPage;