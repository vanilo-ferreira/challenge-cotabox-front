import React from 'react';
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography
} from '@material-ui/core';

import useStyles from './styles';

import { useForm } from 'react-hook-form';
import { Link, useHistory} from 'react-router-dom';

import InputSenha from '../../components/InputSenha';

function Cadastro() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  async function onSubmit(data) {

    await fetch("http://localhost:8000/companies", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    });

    history.push('/');
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Typography variant="h4">Criar uma conta</Typography>
            <TextField className={classes.input} label="Nome da empresa" {...register('name', { required: true })} />
            <TextField className={classes.input} label="E-mail" {...register('email', { required: true })} />
            <InputSenha className={classes.senha} label="Senha" register={() => register('password', { required: true })} />

            <Button className={classes.botao} type="submit">
              CRIAR CONTA
            </Button>
            <Typography variant="body2">Já possui uma conta? <Link to='/'>ACESSE</Link></Typography>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cadastro;