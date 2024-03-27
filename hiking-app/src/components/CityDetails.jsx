import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { placesData } from './Places';

function CityDetails() {
  const { id } = useParams();
  const city = placesData[parseInt(id)];
//useParams used here to match url with placeData ID for each to display 
 
  return (
    <div>
      <Typography  sx={{ m: 2 }} variant="h4" >{city.name}</Typography>
      <Typography  sx={{ m: 2 }} variant="p">{city.description}</Typography>
    
      
    </div>
  );
};

export default CityDetails;
