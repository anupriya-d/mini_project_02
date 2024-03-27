import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia,Button } from '@mui/material';

const placesData = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Skiing_In_Queenstown_Nz_%28137507635%29.jpeg',
    name: 'Queenstown',
    description: 'Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps. Renowned for adventure sports, it’s also a base for exploring the region’s vineyards and historic mining towns.',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/The_Alexandra_Bridge.jpg',
    name: 'Alexandra',
    description: 'Alexandra is a town in the Central Otago district of the South Island of New Zealand. It is on the banks of the Clutha River, on State Highway 8, 188 kilometres by road from Dunedin and 33 kilometres south of Cromwell.',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Old_Globe_Hotel_Building%2C_Cromwell%2C_New_Zealand.jpg',
    name: 'Cromwell',
    description: 'Cromwell is a town in Central Otago region of the South Island of New Zealand. Cromwell is located on the shores of Lake Dunstan where the Kawarau river joins Lake Dunstan.',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Lake_Wanaka_Tree.jpg',
    name: 'Wanaka',
    description: "Wanaka, a resort town on New Zealand's South Island, is set on the southern end of its namesake lake with views of snowcapped mountains. It's the gateway to the Southern Alps' Mount Aspiring National Park, a wilderness of glaciers, beech forests and alpine lakes.",
  },
];

const Places = () => {
  return (
    <Grid container spacing={3}>
      {placesData.map((place, index) => (
        <Grid item xs={12}  md={3} key={index}>
          <Card sx={{ }}>
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
              <Button>SEE More</Button>
              </div>
            </CardContent>

          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Places;
