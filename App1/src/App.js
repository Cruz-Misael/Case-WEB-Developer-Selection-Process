
import React from 'react';
import { Container, TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: 400,
    marginTop: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  info: {
    marginBottom: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h4" className={classes.info}>
        Bem-vindo ao Sistema de Fidelidade
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.input}
          label="Nome da Agência"
          variant="outlined"
          required
        />
        <TextField
          className={classes.input}
          label="Email"
          type="email"
          variant="outlined"
          required
        />
        <TextField
          className={classes.input}
          label="Telefone"
          type="tel"
          variant="outlined"
          required
        />
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          color="primary"
        >
          Cadastrar
        </Button>
      </form>
    </Container>
  );
}

export default App;
