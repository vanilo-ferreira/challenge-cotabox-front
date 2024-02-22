import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Holdings from './pages/Holdings';

function Rotas() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/" exact component={Login} />
        <Route path="/holdings" exact component={Holdings} />
      </Switch>
    </BrowserRouter>
  )
}

export default Rotas;