import Navbar from "../components/Navbar";
import Secao from "../components/Secao";
import Footer from "../components/Footer";

function FavoritosPage() {
    return(
        <>
            <Navbar/>
            <Secao
            cName="secao"
            imagem="https://images.unsplash.com/photo-1568675392503-1cf97bb81c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            titulo='Título que vai na página dos Favoritos'
            texto='texto sobre seus favoritos'
            />
            <Footer/>
        </>
    )
}

export default FavoritosPage;