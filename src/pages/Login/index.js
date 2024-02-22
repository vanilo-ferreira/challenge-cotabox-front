import React, { useContext } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";

import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom"

import { AuthContext } from "../../routes";

function Login() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const { logar } = useContext(AuthContext);
  const history = useHistory();

  async function onSubmit(data) {
    const resposta = await fetch("http://localhost:8000/login", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    });

    const { token } = await resposta.json();
    logar(token);

    history.push("/holdings");
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h4">Login</Typography>
            <TextField className={classes.email} label="E-mail" {...register('email', { required: true })} />
            <TextField className={classes.senha} label="senha" type="password" {...register('password', { required: true })} />
            <Button className={classes.botao} type="submit">
              Entrar
            </Button>
            <Typography variant="body2">
              Primeira vez aqui? <Link to='cadastro'>CRIE UMA CONTA</Link>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login; 