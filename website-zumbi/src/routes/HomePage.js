import Navbar from "../components/Navbar";
import Secao from "../components/Secao";
import Homenageados from "../components/Homenageados";
import Footer from "../components/Footer";
//import Cards from "../components/Cards";

function HomePage() {
    return(
        <>
            <Navbar/>
            <Secao
            cName="secao"
            imagem='https://images.unsplash.com/photo-1519011985187-444d62641929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
            //imagem="https://cdn.pixabay.com/photo/2022/11/22/01/03/textile-7608526_960_720.png"
            titulo='Título que vai na página Inicial'
            texto='texto de introdução ao projeto, etc'
            />
            <Homenageados/>
            <Footer/>
        </>
    )
}

export default HomePage;