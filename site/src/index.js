import React from 'react';
import ReactDOM from 'react-dom/client';



import './index.scss';
import Home from './pages/USUARIO/home/index.js';
import CadastroAdm from './pages/ADM/cadastro/index.js';
import UsarioPerfil from './pages/USUARIO/perfilusuario';
import Page_adm from './pages/ADM/page_adm';
import LandingPage from './pages/USUARIO/landingPage';
import LoginUser from './pages/USUARIO/loginUser';
import CadastroUser from './pages/USUARIO/cadastroUser';
import AddProduto from './pages/ADM/addProduto';
import PageProduto from './pages/USUARIO/pageProduto';
import PageCarrinho from './pages/USUARIO/carrinho';



import Categoria from './pages/USUARIO/categoria';


import { BrowserRouter, Routes, Route } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/loginAdm' element={<CadastroAdm />} />
        <Route path='/perfilusuario' element={<UsarioPerfil />} />
        <Route path='/pageAdm' element={<Page_adm />} />
        <Route path='/cadastroUser' element={<CadastroUser />} />
        <Route path='/loginUser' element={<LoginUser />} />
        <Route path='/addProduto' element={<AddProduto />} />
        <Route path='/PageProduto/:id' element={<PageProduto />} />
        <Route path='/carrinho'   element={<PageCarrinho />} />
        <Route path='/categorias'   element={<Categoria />} />
        

        
        
        



      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);


