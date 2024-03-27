// Footer.js

import React from 'react';
import { Typography, Container } from '@mui/material';

// Inline styles for the footer
const footerStyle = {
  backgroundColor: '#f8f9fa', 
  padding: '2rem 0',
  marginTop: 'auto', 
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          VISIT OTAGO
        </Typography>
        <Typography variant="p" align="center" color="textSecondary">
          © {new Date().getFullYear()} VISIT OTAGO. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
