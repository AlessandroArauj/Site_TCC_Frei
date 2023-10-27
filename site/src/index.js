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
import FilterProduto from './pages/USUARIO/FilterProduto';
import PageCarrinho from './pages/USUARIO/carrinho';
import Cardcordas from './pages/USUARIO/cardcordas';
import Cardsopro from './pages/USUARIO/cardsopro';
import Cardaudio from './pages/USUARIO/cardaudio';
import Cardbateria_percusao from './pages/USUARIO/cardbateria_percusao';
import Cardteclas from './pages/USUARIO/cardteclas';

import { BrowserRouter, Routes, Route } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cadastroAdm' element={<CadastroAdm />} />
        <Route path='/perfilusuario' element={<UsarioPerfil />} />
        <Route path='/pageAdm' element={<Page_adm />} />
        <Route path='/cadastroUser' element={<CadastroUser />} />
        <Route path='/loginUser' element={<LoginUser />} />
        <Route path='/addProduto' element={<AddProduto />} />
        <Route path='/PageProduto' element={<PageProduto />} />
        <Route path='/filter'   element={<FilterProduto />} />
        <Route path='/carrinho'   element={<PageCarrinho />} />

        <Route path='/sopro'   element={<Cardsopro />} />
        <Route path='/audio'   element={<Cardaudio />} />
        <Route path='/bateria_percusao'   element={<Cardbateria_percusao />} />
        <Route path='/teclas'   element={<Cardteclas />} />
        <Route path='/cordas'   element={<Cardcordas />} />
        
        



      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);


