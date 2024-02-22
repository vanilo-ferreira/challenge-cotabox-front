import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Holdings from './pages/Holdings';

function Rotas() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" exact element={<Login />} />
        <Route path="/holdings" exact element={<Holdings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas;