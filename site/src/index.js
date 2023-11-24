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
import PageProduto from './pages/USUARIO/pageProduto';
import PageCarrinho from './pages/USUARIO/carrinho';
import PagePubli from './pages/USUARIO/pagepubli';
import Progresso from './pages/USUARIO/progressoDEProd';
import Prog from './pages/ADM/ProgAdm';



import Categoria from './pages/USUARIO/categoria';


import { BrowserRouter, Routes, Route } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/perfilusuario' element={<UsarioPerfil />} />
        <Route path='/cadastroUser' element={<CadastroUser />} />
        <Route path='/loginUser' element={<LoginUser />} />
        <Route path='/PageProduto/:id' element={<PageProduto />} />
        <Route path='/carrinho' element={<PageCarrinho />} />
        <Route path='/categorias/:id' element={<Categoria />} />
        <Route path='/PagePubli' element={<PagePubli />} />
        <Route path='/progresso/:id/pedido/:id2' element= {<Progresso/>}/>
  

        <Route path='/loginAdm' element={<CadastroAdm />} />
        <Route path='/pageAdm' element={<Page_adm />} />
        <Route path='/progressoAdm/status/:id1/pedido/:id2/usuario/:id3' element={<Prog/>}/>
        <Route path='/pageAdm/alterar/:id' element={<Page_adm />} />










      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);


