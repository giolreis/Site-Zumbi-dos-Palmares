import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import FavoritosPage from './routes/FavoritosPage';
import ContatoPage from './routes/ContatoPage';
import LoginPage from './routes/LoginPage';
import SairPage from './routes/SairPage';
import CadastroPage from './routes/CadastroPage';
import DetalheHomenageadoPage from './routes/DetalheHomenageadoPage';
import  AuthProvider from './components/AuthContext';
import Navbar from './components/Navbar';
import "./components/Navbar.css"
import Footer from './components/Footer';
import './components/Footer.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
            <Navbar/>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/favoritos" element={<FavoritosPage />} />
              <Route path="/contato" element={<ContatoPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/sair" element={<SairPage />} />
              <Route path="/cadastro" element={<CadastroPage />} />
              <Route path="/usuarioHomenageado/:id" element={<DetalheHomenageadoPage />} />
              
            </Routes>
          </AuthProvider>
      </BrowserRouter>
      <Footer/>
      
      
    </div>
  );
}

export default App;
