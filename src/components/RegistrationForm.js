
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@material-ui/core';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    agencyName: '',
    email: '',
    phone: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/agencies', formData);
      setMessage('Agency registered successfully!');
      setFormData({
        agencyName: '',
        email: '',
        phone: ''
      });
    } catch (error) {
      setMessage('Error registering agency. Please try again.');
      console.error('There was an error!', error);
    }
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Register New Travel Agency
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="agencyName"
          label="Agency Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.agencyName}
          onChange={handleChange}
          required
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          name="phone"
          label="Phone"
          type="tel"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
      {message && <Typography variant="body1" color="textSecondary">{message}</Typography>}
    </Container>
  );
}

export default RegistrationForm;
