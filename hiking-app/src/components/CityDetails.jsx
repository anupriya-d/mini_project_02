import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { placesData } from './Places';

function CityDetails() {
  const { id } = useParams();
  const city = placesData[parseInt(id)];

 
  return (
    <div>
      <Typography variant="h4">{city.name}</Typography>
      <Typography variant="p">{city.description}</Typography>
    
      
    </div>
  );
};

export default CityDetails;
