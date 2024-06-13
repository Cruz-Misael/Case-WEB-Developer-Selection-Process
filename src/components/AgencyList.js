
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@material-ui/core';

function AgencyList() {
  const [agencies, setAgencies] = useState([]);

  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/agencies');
        setAgencies(response.data);
      } catch (error) {
        console.error('There was an error fetching the agencies!', error);
      }
    };

    fetchAgencies();
  }, []);

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Registered Travel Agencies
      </Typography>
      <List>
        {agencies.map((agency, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={agency.agencyName}
              secondary={`Email: ${agency.email}, Phone: ${agency.phone}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default AgencyList;
