import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import style from './app.module.css';
import Home from './pages/Home';
/* import FirstCadastro from './pages/firstCadastro'; */
import CadastroParticipante from './componentes/CadastroParticipante/CadastroTransfer';
import CadastroConvidados from './componentes/CadastroConvidados/CadastroTransfer';
import CadastroTransfer from './componentes/TelaCadastroTransfer/CadastroTransfer';
import Pagamento from './componentes/Pagamentos';


export function App() {
  return (
    <div>
     <HashRouter> 
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path='CadastroTransfer' exact element={<CadastroTransfer /> } />
            <Route path='CadastroParticipante' exact element={<CadastroParticipante /> } />
            <Route path='CadastroConvidados' exact element={<CadastroConvidados /> } />
            <Route path='Pagamento' exact element={<Pagamento /> } />
        </Routes>
      </HashRouter>
    </div>
  );
}
