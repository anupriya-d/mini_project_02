import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';
import AccordionExpandIcon from './AccordionExpandIcon';

function HomeComponent() {
  return (
    <div className='componentBox'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent="center">
       
        <Grid item md={6} sm={6} xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <SwipeableTextMobileStepper />
          </Box>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <AccordionExpandIcon/>
          </Box>
        </Grid>
                 
         
        
      </Grid>
    </Box>
    </div>
  );
}

export default HomeComponent