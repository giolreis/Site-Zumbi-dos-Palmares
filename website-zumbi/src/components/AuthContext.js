import React, { createContext, useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

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

  return (
    <AuthContext.Provider value={{ isLoggedIn:isLoggedIn, setIsLoggedIn:setIsLoggedIn, Login:Login, user:user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
