
import React from 'react';
import { Container, Typography } from '@material-ui/core';
import RegistrationForm from './components/RegistrationForm';
import AgencyList from './components/AgencyList';

function App() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to the Loyalty System
      </Typography>
      <RegistrationForm />
      <AgencyList />
    </Container>
  );
}

export default App;
