import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import "./FormLogin.css";

export const UsersContext = React.createContext();

const FormLogin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const Login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //adicionado linha abaixo
        const user = userCredential.user;
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
      
      <UsersContext.Provider value={{ loginSuccess: loginSuccess, Login: Login }}>
            {props.children}
      </UsersContext.Provider>

      <h1>Faça seu Login</h1>
      <form onSubmit={Login}>
        <input id="emaillogin" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input id="passwordlogin" type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Entrar</button>
        <Link to="/cadastro">Primeiro Acesso? Crie uma conta</Link>
        <a href="#">Esqueci minha senha</a>
        loginSuccess();
      </form>
    </div>
    
  );
}

export default FormLogin;
