import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import bannerPhoto from '../assets/Brewster.jpg'
import FetchWeather from './FetchWeather';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';

function Banner() {
  return (
    <Box sx={{ position: 'relative' }}>
      <Card sx={{ position: 'relative', borderRadius: 0 }}>
        <CardMedia
          component="img"
          image={bannerPhoto}
          alt="Hiking Banner"
          sx={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: 0 }}
        />
        <CardContent sx={{ position: 'absolute', right:40 , top: 0, width: '100%', background: 'rgba(0, 0, 0, 0.5)', color: 'white', borderRadius: 0 }}>
        <Box sx={{ textAlign: 'right', padding: '16px', }}>
          <FetchWeather/>
          </Box>
        </CardContent>

    
        <CardContent sx={{ position: 'absolute', bottom: 20, width: '100%', background: 'rgba(0, 0, 0, 0.7)', color: 'white', borderRadius: 0 }}>
          <Box sx={{ textAlign: 'center', padding: '16px' }}>
            <Typography variant="h4" component="h2" sx={{ marginBottom: '8px' }}>
              Welcome to Otago
            </Typography>
            <Typography variant="h6">
              Explore nature with our experienced guides and enjoy breathtaking views .
            </Typography>
            <Typography variant="h6">
              QUEENSTOWN | ALEXANDRA | CROMWELL| WANAKA
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Banner;




