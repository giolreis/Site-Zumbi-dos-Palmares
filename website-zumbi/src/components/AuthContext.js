import React, { createContext, useState } from 'react';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const Login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
      .then((userCredential) => {
        console.log(userCredential.user);
        setIsLoggedIn(true);
        setUser(userCredential.user);
      })
      .then(() => {
        alert("Login realizado com sucesso!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        setUser(null);
        alert("Logout realizado com sucesso!");
        navigate('/', { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn:isLoggedIn, setIsLoggedIn:setIsLoggedIn, Login:Login, user:user, logout:logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
