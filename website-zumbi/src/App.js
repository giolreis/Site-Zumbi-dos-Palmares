import './App.css';
import HomePage from './routes/HomePage';
import FavoritosPage from './routes/FavoritosPage';
import ContatoPage from './routes/ContatoPage';
import LoginPage from './routes/LoginPage';
import SairPage from './routes/SairPage';
//import { Routes, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Routes, Route } from 'react-router-dom';


export default function App(){
  return(
    <div className='App'>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/favoritos' element={<FavoritosPage />} />
          <Route path='/contato' element={<ContatoPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/sair' element={<SairPage />} />
      </Routes>
    </div>
  );
}
