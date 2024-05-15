import React, { useState } from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import ModalComponent from './ModalComponent';
import Loading from './Loading';

const CardComponent = ({ index, title, speciesColor, charactersData }) => {
  const [open, setOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false); 

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let color = '';

  if (speciesColor.includes(',')) {
    color = speciesColor.split(',')[0].trim();
  } else if (speciesColor === 'light') {
    color = '#ffe0bd';
  } else if (speciesColor === 'fair') {
    color = '#fff5e1';
  } else {
    color = speciesColor;
  }

  return (
    <Box>
      <Card
        sx={{
          width: 316,
          height: 500,
          mt: 2,
          mb: 2,
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
          border: '1px solid black',
        }}
        onClick={handleOpen}
      >
        {!imageLoaded && <Loading />} 
        <CardMedia
          component="img"
          image={`public/static/assets/img/people/${index}.jpg`}
          alt={title}
          sx={{
            width: '100%',
            height: '350',
            objectFit: 'contain',
            objectPosition: 'center',
            bgcolor: color,
            boxSizing: 'border-box',
            p: 2,
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(0.8)',
            },
          }}
          onLoad={() => setImageLoaded(true)} 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            {title}
          </Typography>
        </CardContent>
      </Card>

      <ModalComponent
        open={open}
        handleClose={handleClose}
        title={title}
        characterData={charactersData}
      />
    </Box>
  );
};

export default CardComponent;
