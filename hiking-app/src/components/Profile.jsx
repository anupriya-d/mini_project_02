import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar } from '@mui/material';

import proPic from "../assets/anup.jpg"

const ContactCard = () => {
  return (
    <Card>
      <CardContent>
            <Typography sx={{ m: 2 }} variant="h5" gutterBottom>
          Contact Details
        </Typography>

        <Typography sx={{ m: 2 }} variant="p">
          Name: Anupriya Dayaratne
          </Typography>
          <br/>
          <Typography sx={{ m: 2 }} variant="p">
          Phone: +64291248811
          </Typography>
          <br/>
          <Typography sx={{ m: 2 }} variant="p">
          email : anupriya@visitotago.co.nz
          </Typography>
          <br/>
          <Typography sx={{ m: 2 }} variant="p">
          And Follow Me on :
          </Typography>
          <br/>
          <Typography sx={{ m: 2 }} variant="p">
          Facebook : /anupriya.dayaratne
          </Typography>
          <br/>
          <Typography sx={{ m: 2 }} variant="p">
          Instagram : /anupriya_d
          </Typography>
      
      </CardContent>
    </Card>
  );
};

const ProfileCard = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
          <Avatar alt="Anupriya" src={proPic} sx={{ width: 200, height: 200, textAlign:'center'}} />
          </Grid>
          <Grid item>
            <Typography variant="h5">Anupriya Dayaratne</Typography>
            <Typography variant="subtitle1">Web Developer</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const Profile = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        <ProfileCard />
      </Grid>
      <Grid item xs={12} lg={6}>
        <ContactCard />
      </Grid>
    </Grid>
  );
};

export default Profile;
