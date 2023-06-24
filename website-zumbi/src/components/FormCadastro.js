import "./FormLogin.css";
import React, {useState} from "react";
import {auth} from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

function FormCadastro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const LoginCadastro = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .then(() =>{
            alert("Usuário Cadastrado com sucesso!")
        })
        .catch((error) => {
            console.log(error);
        });

        setEmail("");
        setPassword("");
    };

    return(
        <div  className="form-container">
                <h1>Cadastrar</h1>
                <form onSubmit={LoginCadastro}>
                    <input type="email" id="emailc" placeholder="E-mail" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" id="passwordc1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <button class="button" type="submit" >Cadastrar</button>   
                </form>         
        </div>       
    )
}

export default FormCadastro;