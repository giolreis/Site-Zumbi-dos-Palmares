import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import "./FormLogin.css";

function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const Login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setLoginSuccess(true);
      })
      .then(() => {
        alert("Login realizado com sucesso!");
      })
      .catch((error) => {
        console.log(error);
      });

    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (loginSuccess) {
      navigate('/', { replace: true });
    }
  }, [loginSuccess, navigate]);

  return (
    <div className="form-container">
      <h1>Faça seu Login</h1>
      <form onSubmit={Login}>
        <input id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input id="password" type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Entrar</button>
        <Link to="/cadastro">Primeiro Acesso? Crie uma conta</Link>
        <a href="#">Esqueci minha senha</a>
      </form>
    </div>
  );
}

export default FormLogin;
