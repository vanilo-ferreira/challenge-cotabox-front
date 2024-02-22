import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  containerTopo: {
    backgroundColor: '#00b8e2',
  },
  botaoSair: {
    height: 20,
    width: 50,
    border: 'solid 2px white',

    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  form: {
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
  },

  input: {
    height: 50,
    width: 250,
    margin: '0px 10px',
    backgroundColor: 'white',
    placeContent: 'center',
    outline: 0
  },

  botao: {
    height: 50,
    width: 150,
    border: 'solid 2px white',

    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10
  },

  containerGrafico: {
    minWidth: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  table: {
    "& .MuiTableCell-root": {
      borderLeft: "1px solid rgba(224, 224, 224, 1)"
    }
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  titulo: {
    margin: '50px auto 5px'
  },

  paragrafo: {
    margin: '5px auto 50px'
  },

  containerInformacoes: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50
  },

  containerTabela: {
    maxWidth: '50%',
    height: 600,
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'start'
  },
}));

export default useStyles;