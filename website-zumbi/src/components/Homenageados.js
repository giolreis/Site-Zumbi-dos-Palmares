import "./Homenageados.css";
import HomenaeadosData from "./HomenageadosData";


function Homenageados() {
    return(
        
        <div className="homenageado">
            <h1>Todos os homenageados</h1>
            <p>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto </p>
            <div className="homenageadoscard">
                <HomenaeadosData
                id={0}
                image="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
                titulo="Pessoa 1"
                texto="descrição do que a pessoa fez"
                />
                <HomenaeadosData
                id={1}
                image="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
                titulo="Pessoa 2"
                texto="descrição do que a pessoa fez"
                />
                <HomenaeadosData
                id={2}
                image="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
                titulo="Pessoa 3"
                texto="descrição do que a pessoa fez"
                />
            </div>
            <div className="homenageadoscard">
                <HomenaeadosData
                id={3}
                image="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
                titulo="Pessoa 4"
                texto="descrição do que a pessoa fez"
                />
                <HomenaeadosData
                id={4}
                image="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
                titulo="Pessoa 5"
                texto="descrição do que a pessoa fez"
                />
                <HomenaeadosData
                id={5}
                image="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
                titulo="Pessoa 6"
                texto="descrição do que a pessoa fez"
                />
            </div>

        </div>
    )
}

export default Homenageados;
