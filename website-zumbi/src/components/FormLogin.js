import React, {useState} from "react";
import {auth} from '../firebase';
import { Link } from "react-router-dom";
import "./FormLogin.css";
import { signInWithEmailAndPassword } from "firebase/auth";

function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccesso, setLoginSuccess] = useState(false);
    const Login = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            setLoginSuccess(true);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    return (
        <div className="form-container">
        <h1>Faça seu Login</h1>
        <form onSubmit={Login}>
            <input id="emaillogin" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input id="passwordlogin" type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Entrar</button>
            <Link to="/cadastro">Primeiro Acesso? Crie uma conta</Link>
            <a href="#">Esqueci minha senha</a>
        </form>
        {loginSuccesso && <p>Login feito com sucesso!</p>}
        </div>
    );
}

export default FormLogin;
