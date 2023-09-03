import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/USUÁRIO/home/index.js';
import CadastroAdm from './pages/ADM/cadastro/index.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadastroAdm' element={<CadastroAdm />} />
      </Routes> 
    </BrowserRouter>
  </React.StrictMode>

);


