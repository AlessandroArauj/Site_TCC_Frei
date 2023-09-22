import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/USUÁRIO/home/index.js';
import CadastroAdm from './pages/ADM/cadastro/index.js';
import UsarioPerfil from './pages/USUÁRIO/perfilusuario';
import Page_adm from './pages/ADM/page_adm';
import AddCartao from './pages/USUÁRIO/addcartao';
import LandingPage from './pages/USUÁRIO/landingPage';
import LoginUser from './pages/USUÁRIO/loginUser';
import CadastroUser from './pages/USUÁRIO/cadastroUser';
import AddProduto from './pages/ADM/addProduto';
import PageProduto from './pages/USUÁRIO/pageProduto';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cadastroAdm' element={<CadastroAdm />} />
        <Route path='/usarioPerfil' element={<UsarioPerfil />} />
        <Route path='/pageAdm' element={<Page_adm />} />
        <Route path='/addcartao' element={<AddCartao />} />
        <Route path='/cadastroUser' element={<CadastroUser />} />
        <Route path='/loginUser' element={<LoginUser />} />
        <Route path='/addProduto' element={<AddProduto />} />
        <Route path='/PageProduto' element={<PageProduto />} />




      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);


