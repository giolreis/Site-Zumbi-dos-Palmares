import "./FormLogin.css";
import React, {useState} from "react";
import {auth} from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

function FormCadastro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [CadastroSuccesso, setCadastroSuccesso] = useState(false);

    const LoginCadastro = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            setCadastroSuccesso(true);
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
                    <button class="buttom" type="submit" >Cadastrar</button>
                    
                    
                </form>     
                {CadastroSuccesso && <p>Cadastro realizado com sucesso!</p>}       
        </div>       
    )
}

export default FormCadastro;