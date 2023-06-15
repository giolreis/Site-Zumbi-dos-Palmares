import "./Homenageados.css";
import React, { useContext } from "react";
import HomenageadosData from "./HomenageadosData";
import { CardContext } from "./DetalheUser";


const Homenageados = props => {
    const { cards } = useContext(CardContext);

    return(
        
        <div className="homenageado">
            <h1>Todos os homenageados</h1>
            <p>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto </p>
            <div className="homenageadoscard">

                {cards.map((HomenaeadosData) => {
                    return (
                        <HomenageadosData nome={HomenageadosData.nome} image={HomenageadosData.image} descricao={HomenageadosData.descricao}/>
                    );
                })}
            </div>
        </div>
    )
}

export default Homenageados;
