import Favoritos from "../components/Favoritos";
import Secao from "../components/Secao";

function FavoritosPage() {
    return(
        <>
            <Secao
            cName="secao"
            imagem="https://images.unsplash.com/photo-1568675392503-1cf97bb81c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            titulo='Meus Favoritos: Pessoas Inspiradoras'
            texto=''
            />
            <Favoritos/>
        </>
    )
}

export default FavoritosPage;