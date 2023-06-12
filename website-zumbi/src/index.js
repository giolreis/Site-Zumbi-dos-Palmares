import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //ESSE TRECHO CAUSA PROBLEMA EM ROUTE!!!! SUBSTITUIDO PELO CÓDIGO ABAIXO
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
