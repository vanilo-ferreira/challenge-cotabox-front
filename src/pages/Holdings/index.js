import React, { useContext, useEffect, useState } from 'react';
import {
  Typography,
  Button,
  TextField,
} from '@material-ui/core'
import useStyles from './styles';
import { AuthContext } from '../../routes';
import { useForm } from "react-hook-form";

import { Chart } from "react-google-charts";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const options = {
  pieHole: 0.5,
  is3D: false,
  chartArea: {
    left: 10,
    top: 0,
    height: '50%',
  },
  pieSliceText: 'none',
  legend: {
    position: "right",
    alignment: "center",
    textStyle: { fontSize: 10 }
  },
};

function Holdings() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const { token } = useContext(AuthContext);
  const [carregar, setCarregar] = useState(false);
  const [chartData, setChartData] = useState([]);
  const [company, setCompany] = useState({ name: '', email: '' });
  const [listing, setListing] = useState([{ first_name: '', last_name: '', participation: '' }]);


  function dados(data) {
    let createDataTable = [];
    for (var i = 0; i < data.length; i++) {
      createDataTable.push({ 'number': i + 1, 'first_name': data[i].first_name, 'last_name': data[i].last_name, 'participation': data[i].participation });
    }

    setListing(createDataTable);

    let createDataGraphic = [];
    for (var i = 0; i < data.length; i++) {
      createDataGraphic.push([`${data[i].first_name} ${data[i].last_name}`, parseFloat(data[i].participation)]);
    }

    createDataGraphic.unshift(["Name", "Participation"]);
    setChartData(createDataGraphic)
  }

  useEffect(() => {
    async function obterParticipation() {
      const resposta = await fetch("http://localhost:8000/holdings", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const empresaRetornada = await resposta.json();

      console.log(empresaRetornada);

      dados(empresaRetornada);
    }
    obterParticipation();
  }, [carregar]);

  useEffect(() => {
    async function checkProfile() {
      const resposta = await fetch("http://localhost:8000/perfil", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const companyRetornada = await resposta.json();

      setCompany(companyRetornada);

      console.log(companyRetornada);
    }
    checkProfile();
  }, []);

  async function onSubmit(data) {

    setCarregar(true);


    await fetch("http://localhost:8000/holdings", {
      method: 'POST',
      body: JSON.stringify({
        first_name: data.first_name,
        last_name: data.last_name,
        participation: parseFloat(data.participation)
      }),
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    setCarregar(false);
  }

  return (
    <>
      <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <TextField className={classes.input} label="First Name" variant='outlined' {...register('first_name', { required: true })} />
        <TextField className={classes.input} label="Last Name" variant='outlined' {...register('last_name', { required: true })} />
        <TextField className={classes.input} label="Participation" variant='outlined' {...register('participation', { required: true })} />
        <Button className={classes.botao} type="submit">
          SEND
        </Button>
      </form>

      <div className={classes.container} recarregar={() => setCarregar(true)}>
        <Typography className={classes.titulo} variant="h4">{company.name}</Typography>
        <Typography className={classes.parafrafo} variant="h6">Dados de 'participation:'</Typography>

        <div className={classes.containerInformacoes}>
          <div className={classes.containerTabela}>

            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">First_name</TableCell>
                    <TableCell align="left">Last_name</TableCell>
                    <TableCell align="left">Participation</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listing.map((row) => (
                    <TableRow
                      key={row.number}
                    >
                      <TableCell align="center">{row.number}</TableCell>
                      <TableCell align="left">{row.first_name}</TableCell>
                      <TableCell align="left">{row.last_name}</TableCell>
                      <TableCell align="left">{row.participation}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <div>
            <div className={classes.containerGrafico}>
              <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={chartData}
                options={options}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Holdings;