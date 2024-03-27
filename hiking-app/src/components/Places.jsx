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
      { title: "Hiking", place: "Ben Lomond Track",description: "This is a fantastic track for biking via skyline Gondola" },
      { title: "Hiking", place: "Lake Alta Track",description: "This track takes you to the picturesque glacial Lake Alta in Remarkables Conservation Area" },
      { title: "Hiking", place: "Moke Lake",description: "This Lovely Trank aroud the moke lake" },
      { title: "Biking", place: "Moke Lake Loop Track",description: "The views of the lake and surrounding mountains are spectacular" },
      { title: "Biking", place: "Frankton Arm Walkway",description: "The Frankton Arm Walkway takes you from Queenstown to Frankton" },
      { title: "Biking", place: "Moonlight Track from Arthurs Point",description: "Moonlight Track is located in Arthurs Point near Queenstown in the Otago region" },
    ]
  },

  {
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/The_Alexandra_Bridge.jpg",
    name: "Alexandra",
    description: "Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps. Renowned for adventure sports, it’s also a base for exploring the region’s vineyards and historic mining towns.",
    thingsToDo: [
 
      { title: "Hiking", place: "Cromwell Valley Park and Loch Raven",description: "This loop begins in Cromwell Valley Park and follows a creek into the forest" },
      { title: "Hiking", place: "Cromwell Valley Reservior Trail",description: "This track takes you to the picturesque walk along the reservior" },
      { title: "Hiking", place: "Willow Grove Loop",description: "The route can be difficult to follow when the trail is covered in leaves" },
      { title: "Biking", place: "Lake Dunstan Track",description: "The views of the lake and surrounding mountains are spectacular" },
      { title: "Biking", place: "Cromwell Biking Track",description: "The track provides a great experience for biking" },
      { title: "Biking", place: "Baldwin and Barran's Trail Loop",description: "This trail offers a great views for the travellers" },
    ]
  },

  {
    id: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Deadmans_Point_Bridge_Lake_Dunstan_Cromwell.jpg",
    name: "Cromwell",
    description: "Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps. Renowned for adventure sports, it’s also a base for exploring the region’s vineyards and historic mining towns.",
    thingsToDo: [
      { title: "Hiking", place: "Alexandra to Clyde River Track",description: "Thix track is suitable for both walkers and bikers and takes you from Alexandra to Clyde alongside the Clutha River" },
      { title: "Hiking", place: "Graveyard Gully Walk",description: "This track takes you long walk along the breathtaking views" },
      { title: "Hiking", place: "Alexandra Gold Trail",description: "This is a lovely walk with intermittent shelter and a short loop at the end" },
      { title: "Biking", place: "Basin View SHort Track",description: "The views of the lake and surrounding mountains are spectacular" },
      { title: "Biking", place: "Lower Manorburn Dam via Tucker Hill Road",description: "The track provides a great experience for biking" },
      { title: "Biking", place: "Earnscleugh Tailing Track",description: "This trail offers a great views for the bikers" },
      
    ]
  },

  {
    id: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/NZ250315_Lake_Wanaka_01.jpg",
    name: "Wanaka",
    description: "Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps. Renowned for adventure sports, it’s also a base for exploring the region’s vineyards and historic mining towns.",
    thingsToDo: [
      { title: "Hiking", place: "Mount Iron Track",description: "This is a fantastic short track for moderate hikers. It is a very common track for local residents and tourists" },
      { title: "Hiking", place: "Roys Peak Track",description: "One of the most beautiful track for day hikes" },
      { title: "Hiking", place: "The wanaka Tree walk",description: "One of the most beautiful track for day hikes" },
      { title: "Biking", place: "Deans Bank Track",description: "This track is a multi-use path for both hikers and bikers" },
      { title: "Biking", place: "Hawea River Track",description: "This track takes you from Alber town to Lake Hawea" },
      { title: "Biking", place: "Dingle Burn Peninsula Track",description: "The start of the track is a 4WD/dirt road you can bike too" },
      
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
