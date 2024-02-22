import React, { createContext, useState, useContext } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Holdings from './pages/Holdings';

export const AuthContext = createContext();

function ProtectedRoutes(props) {
  const { token } = useContext(AuthContext);

  return (
    <Route
      render={() => (token ? props.children : <Redirect to="/" />)} />
  );
}

function Rotas() {
  const [token, setToken] = useState('');

  function logar(token) {
    setToken(token);
  }

  function deslogar() {
    setToken('')
  }

  return (
    <AuthContext.Provider value={{ token, logar, deslogar }}>
      <BrowserRouter>
        <Switch>
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/" exact component={Login} />
          <ProtectedRoutes>
            <Route path="/holdings" exact component={Holdings} />
          </ProtectedRoutes>
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default Rotas;