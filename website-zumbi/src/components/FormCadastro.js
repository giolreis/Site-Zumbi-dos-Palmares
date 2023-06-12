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
        .catch((error) => {
            console.log(error);
        });
    };

    return(
        <div  className="form-container">
                <h1>Cadastrar</h1>
                <form onSubmit={LoginCadastro}>
                    <input type="email" id="emailc" placeholder="E-mail" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" id="passwordc1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <input type="password" id="passwordc2" placeholder="Confirmar Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <button class="buttom" onclick="">Cadastrar</button>
                </form>            
        </div>       
    )
}

export default FormCadastro;