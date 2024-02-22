import React from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

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