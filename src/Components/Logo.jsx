import React from 'react';
import { Typography, Box } from '@mui/material';


const Logo = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' , backgroundColor: 'transparent',}}>
      <Typography variant="h4" component="h1" sx={{ color: 'white', fontWeight: 'bold', marginRight: '10px' }}>
      </Typography>
      <img src="../public/i-made-a-neon-version-of-the-star-wars-logo-v0-nllri433rgs81.webp" alt="Star Wars Logo" style={{ width: '20rem', height: '10rem' }} />
    </Box>
  );
}

export default Logo;
