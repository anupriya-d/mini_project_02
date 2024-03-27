import React from 'react';
import { Card, CardContent, Typography ,Grid,CardMedia} from '@mui/material';



const ThingsToDo = ({ thingsToDo }) => {
  return (
  
       <div>
      <Typography variant="h5" gutterBottom>
        Things to do:
      </Typography>
      <Grid container spacing={2}>
        {thingsToDo.map((thing, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card variant="outlined">
              <CardContent>
              <CardMedia
              component="img"
              height="200"
              image={thing.image}
              alt={thing.title}/>
                <Typography variant="h6" component="h2" gutterBottom>
                  {thing.place}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {thing.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ThingsToDo;
