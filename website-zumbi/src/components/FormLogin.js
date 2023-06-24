import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./FormLogin.css";
import { AuthContext } from "./AuthContext";

function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();
  const {Login, isLoggedIn, user} = useContext(AuthContext);

  console.log("FormLogin", user);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="form-container">
      <h1>Faça seu Login</h1>
      <form onSubmit={Login}>
        <input id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input id="password" type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="button" type="submit">Entrar</button>
        <Link to="/cadastro">Primeiro Acesso? Crie uma conta</Link>
      </form>
    </div>
  );
}

export default FormLogin;
