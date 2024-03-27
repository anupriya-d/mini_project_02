import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import bannerPhoto from '../assets/Brewster.jpg'
import FetchWeather from './FetchWeather';


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
        <CardContent sx={{ position: 'absolute', right:0 , top: 0, width: '100%', background: 'rgba(0, 0, 0, 0.5)', color: 'white', borderRadius: 0 }}>
        <Box sx={{ textAlign: 'right', padding: '16px', }}>
          <FetchWeather/>
          </Box>
        </CardContent>

        <CardContent sx={{ position: 'absolute', right:0 , top:300, width: '100%', background: 'rgba(0, 0, 0, 0.5)', color: 'white', borderRadius: 0 }}>
        <Box sx={{ textAlign: 'left', padding: '16px', }}>
        <Typography variant="p" sx={{ padding: '16px', }}>
              

        There are few places in the world which will leave you with a lasting sense of difference.
        </Typography>
        <br/> 
        <Typography variant="p" sx={{ padding: '16px', }}>
        Central Otago is undoubtedly one of them from its landscapes, 
        its seasons, its people, its products and experiences.
        </Typography>
        <br/>
        
        <Typography variant="p" sx={{ padding: '16px', }}>
        Moment by moment it will quietly reveal its differences to you in subtle and unexpected ways.
        </Typography>
          
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




