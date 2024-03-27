import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia,Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const placesData = [
  {
    id: 0,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Skiing_In_Queenstown_Nz_%28137507635%29.jpeg",
    name: "Queenstown",
    description: "Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps. Renowned for adventure sports, it’s also a base for exploring the region’s vineyards and historic mining towns.",
    thingsToDo: [
      { image:"https://upload.wikimedia.org/wikipedia/commons/4/47/Skiing_In_Queenstown_Nz_%28137507635%29.jpeg", title: "Skydiving", description: "Experience the thrill of skydiving over Queenstown." },
      { title: "Bungee Jumping", description: "Bungee jump off the Kawarau Gorge Suspension Bridge."},
      
    ]
  },

  {
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/The_Alexandra_Bridge.jpg",
    name: "Alexandra",
    description: "Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps. Renowned for adventure sports, it’s also a base for exploring the region’s vineyards and historic mining towns.",
    thingsToDo: [
      { title: "Skydiving", description: "Experience the thrill of skydiving over Queenstown." },
      { title: "Bungee Jumping", description: "Bungee jump off the Kawarau Gorge Suspension Bridge."},
      
    ]
  },

  {
    id: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Deadmans_Point_Bridge_Lake_Dunstan_Cromwell.jpg",
    name: "Cromwell",
    description: "Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps. Renowned for adventure sports, it’s also a base for exploring the region’s vineyards and historic mining towns.",
    thingsToDo: [
      { title: "Skydiving", description: "Experience the thrill of skydiving over Queenstown." },
      { title: "Bungee Jumping", description: "Bungee jump off the Kawarau Gorge Suspension Bridge."},
      
    ]
  },

  {
    id: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/NZ250315_Lake_Wanaka_01.jpg",
    name: "Wanaka",
    description: "Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps. Renowned for adventure sports, it’s also a base for exploring the region’s vineyards and historic mining towns.",
    thingsToDo: [
      { title: "Skydiving", description: "Experience the thrill of skydiving over Queenstown." },
      { title: "Bungee Jumping", description: "Bungee jump off the Kawarau Gorge Suspension Bridge."},
      
    ]
  },
 
];


function Places() {
  return (
    <Grid container spacing={3}>
      {placesData.map((place, index) => (
        <Grid item xs={12}  md={3} key={index}>
          <Card  sx={{
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}>
            <CardMedia
              component="img"
              height="200"
              image={place.image}
              alt={place.name}
            />
            <CardContent sx={{  }}>
              <Typography variant="h6" component="h2">
                {place.name}
              </Typography>
              <Typography variant="p" color="text.secondary">
                {place.description}
              </Typography>
              <div>
              <Button component={Link} to={`/city/${index}`} variant="contained" color="primary">See More</Button>
              </div>
            </CardContent>

          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Places;
