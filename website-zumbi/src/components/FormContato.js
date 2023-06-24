import "./FormContato.css"
import { db} from "../firebase";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

function FormContato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [assunto, setAssunto] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(collection(db, "contato"), {
            nome:nome,
            email:email,
            assunto:assunto,
            mensagem:mensagem
        })
        .then(() =>{
            alert("Mensagem foi enviada!")
        })
        .catch((error) => {
            alert(error.message);
        });

        setNome("");
        setEmail("");
        setAssunto("");
        setMensagem("");
    };


    return(
        <div className="form-container">
            <h1>Envie uma mensagem!</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input placeholder="Assunto" value={assunto} onChange={(e) => setAssunto(e.target.value)}/>
                <textarea placeholder="Mensagem" rows="4" value={mensagem} onChange={(e) => setMensagem(e.target.value)}/>
                <button className="button" type="submit">Enviar Mensagem</button>
            </form>
        </div>
    )
}

export default FormContato;