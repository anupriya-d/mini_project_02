import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar } from '@mui/material';

const ContactCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Contact Details
        </Typography>
        <Typography variant="body1">
          Name: John Doe
          <br />
          Phone: +1234567890
          <br />
          Email: john@example.com
          <br />
          Social Media:
          <br />
          - Facebook: facebook.com/johndoe
          <br />
          - Twitter: twitter.com/johndoe
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
            <Avatar alt="John Doe" src="/path_to_your_photo.jpg" />
          </Grid>
          <Grid item>
            <Typography variant="h5">John Doe</Typography>
            <Typography variant="subtitle1">Software Developer</Typography>
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
