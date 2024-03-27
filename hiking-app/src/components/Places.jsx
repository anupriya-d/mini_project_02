import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia,Button } from '@mui/material';
import { Link } from 'react-router-dom';
import qhtrack1 from '../assets/benlomond.jpg'
import qhtrack2 from '../assets/lakealta.jpg'
import qhtrack3 from '../assets/mokelake.jpg'
import qbtrack1 from '../assets/mokelake2.jpg'
import qbtrack2 from '../assets/franktonarm.jpg'
import qbtrack3 from '../assets/arthurspoint.jpg'

import chtrack1 from '../assets/cromwellv1.jpg'
import chtrack2 from '../assets/cromwellv2.jpg'
import chtrack3 from '../assets/willowgrove.jpg'
import cbtrack1 from '../assets/lakedunstan.jpg'
import cbtrack2 from '../assets/cromwell.jpg'
import cbtrack3 from '../assets/bb.jpg'

import ahtrack1 from '../assets/alex1.jpg'
import ahtrack2 from '../assets/alex2.jpg'
import ahtrack3 from '../assets/alex3.jpg'
import abtrack1 from '../assets/alex4.jpg'
import abtrack2 from '../assets/alex5.jpg'
import abtrack3 from '../assets/alex6.jpg'

import whtrack1 from '../assets/wanaka1.jpg'
import whtrack2 from '../assets/wanaka2.jpg'
import whtrack3 from '../assets/wanaka3.jpg'
import wbtrack1 from '../assets/wanaka4.jpg'
import wbtrack2 from '../assets/wanaka5.jpg'
import wbtrack3 from '../assets/wanaka6.jpg'


export const placesData = [
  {
    id: 0,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Skiing_In_Queenstown_Nz_%28137507635%29.jpeg",
    name: "Queenstown",
    description: "Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps. Renowned for adventure sports, it’s also a base for exploring the region’s vineyards and historic mining towns.",
    thingsToDo: [
      {image:qhtrack1, title: "Hiking", place: "Ben Lomond Track",description: "This is a fantastic track for biking via skyline Gondola",  },
      {image:qhtrack2, title: "Hiking", place: "Lake Alta Track",description: "This track takes you to the picturesque glacial Lake Alta in Remarkables Conservation Area" },
      {image:qhtrack3, title: "Hiking", place: "Moke Lake",description: "This Lovely Trank aroud the moke lake" },
      {image:qbtrack1, title: "Biking", place: "Moke Lake Loop Track",description: "The views of the lake and surrounding mountains are spectacular" },
      {image:qbtrack2, title: "Biking", place: "Frankton Arm Walkway",description: "The Frankton Arm Walkway takes you from Queenstown to Frankton" },
      {image:qbtrack3, title: "Biking", place: "Moonlight Track from Arthurs Point",description: "Moonlight Track is located in Arthurs Point near Queenstown in the Otago region" },
    ]
  },

  {
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/The_Alexandra_Bridge.jpg",
    name: "Cromwell",
    description: "Cromwell is a town in Central Otago region of the South Island of New Zealand. Cromwell is located on the shores of Lake Dunstan where the Kawarau river joins Lake Dunstan. Cromwell was established during the Otago gold rush .",
    thingsToDo: [
 
      {image:chtrack1, title: "Hiking", place: "Cromwell Valley Park and Loch Raven",description: "This loop begins in Cromwell Valley Park and follows a creek into the forest" },
      {image:chtrack2, title: "Hiking", place: "Cromwell Valley Reservior Trail",description: "This track takes you to the picturesque walk along the reservior" },
      {image:chtrack3, title: "Hiking", place: "Willow Grove Loop",description: "The route can be difficult to follow when the trail is covered in leaves" },
      {image:cbtrack1,title: "Biking", place: "Lake Dunstan Track",description: "The views of the lake and surrounding mountains are spectacular" },
      {image:cbtrack2, title: "Biking", place: "Cromwell Biking Track",description: "The track provides a great experience for biking" },
      {image:cbtrack3, title: "Biking", place: "Baldwin and Barran's Trail Loop",description: "This trail offers a great views for the travellers" },
    ]
  },

  {
    id: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Deadmans_Point_Bridge_Lake_Dunstan_Cromwell.jpg",
    name: "Alexandra",
    description: "Alexandra is a town in the Central Otago district of the South Island of New Zealand. It is on the banks of the Clutha River, on State Highway 8, 188 kilometres by road from Dunedin and 33 kilometres south of Cromwell. Also famous for wineries",
    thingsToDo: [
      {image:ahtrack1, title: "Hiking", place: "Alexandra to Clyde River Track",description: "Thix track is suitable for both walkers and bikers and takes you from Alexandra to Clyde alongside the Clutha River" },
      {image:ahtrack2, title: "Hiking", place: "Graveyard Gully Walk",description: "This track takes you long walk along the breathtaking views" },
      {image:ahtrack3, title: "Hiking", place: "Alexandra Gold Trail",description: "This is a lovely walk with intermittent shelter and a short loop at the end" },
      {image:abtrack1, title: "Biking", place: "Basin View Short Track",description: "The views of the lake and surrounding mountains are spectacular" },
      { image:abtrack2,title: "Biking", place: "Lower Manorburn Dam via Tucker Hill Road",description: "The track provides a great experience for biking" },
      {image:abtrack3, title: "Biking", place: "Earnscleugh Tailing Track",description: "This trail offers a great views for the bikers" },
      
    ]
  },

  {
    id: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/NZ250315_Lake_Wanaka_01.jpg",
    name: "Wanaka",
    description: "Wanaka, a resort town on New Zealand's South Island, is set on the southern end of its namesake lake with views of snowcapped mountains. It's the gateway to the Southern Alps' Mount Aspiring National Park, a wilderness of glaciers, alpine lakes.",
    thingsToDo: [
      {image:whtrack1, title: "Hiking", place: "Mount Iron Track",description: "This is a fantastic short track for moderate hikers. It is a very common track for local residents and tourists" },
      {image:whtrack2, title: "Hiking", place: "Roys Peak Track",description: "One of the most beautiful track for day hikes" },
      {image:whtrack3, title: "Hiking", place: "The wanaka Tree walk",description: "One of the most beautiful track for day hikes" },
      {image:wbtrack1, title: "Biking", place: "Deans Bank Track",description: "This track is a multi-use path for both hikers and bikers" },
      {image:wbtrack2, title: "Biking", place: "Hawea River Track",description: "This track takes you from Alber town to Lake Hawea" },
      {image:wbtrack3, title: "Biking", place: "Dingle Burn Peninsula Track",description: "The start of the track is a 4WD/dirt road you can bike too" },
      
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
