import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    placeContent: "center",
    minHeight: '100vh',
  },
  card: {
    maxWidth: 392,
    padding: "88px 86px",
    borderRadius: 16,
    boxShadow: "0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)",

    "& > div": {
      padding: 0
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",

    "& h4": {
      marginBottom: 88,
    },

    "& p": {
      fontSize: 12,
    },
  },
  email: {
    marginBottom: 48,
  },
  senha: {
    marginBottom: 40,
  },
  botao: {
    color: "#FFF",
    backgroundColor: '#00b8e2',
    boxShadow: "none",
    alignSelf: "center",
    marginBottom: "24px",

  }
}));

export default useStyles;