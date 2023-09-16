import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/USUÁRIO/home/index.js';
import CadastroAdm from './pages/ADM/cadastro/index.js';
import UsarioPerfil from './pages/USUÁRIO/perfilusuario';
import Page_adm from './pages/ADM/page_adm';
import AddCartao from './pages/USUÁRIO/addcartao';
import LandingPage from './pages/USUÁRIO/landingPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadastroAdm' element={<CadastroAdm />} />
        <Route path='/usarioPerfil' element={<UsarioPerfil />} />
        <Route path='/pageAdm' element={<Page_adm />} />
        <Route path='/addcartao' element={<AddCartao />} />
        <Route path='/landingPage' element={<LandingPage />} />

        
      </Routes> 
    </BrowserRouter>
  </React.StrictMode>

);


