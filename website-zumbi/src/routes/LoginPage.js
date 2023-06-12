import Navbar from "../components/Navbar";
import Secao from "../components/Secao";
import Footer from "../components/Footer";
import FormLogin from "../components/FormLogin";

function LoginPage() {
    return(
        <>
            <Navbar/>
            <Secao
            cName="secao"
            imagem="https://images.unsplash.com/photo-1567122227018-ad02003c25fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGFmcmljYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
            titulo='Título que vai na página dos Login'
            texto='texto sobre seus login'
            />
            <FormLogin/>
            <Footer/>
        </>
    )
}

export default LoginPage;