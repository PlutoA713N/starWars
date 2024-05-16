import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

const PaginatedItems = ({ page, handlePrevious, handleNext, totalPages }) => {
  

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePrevious}
          disabled={page === 1}
          sx={{ mr: 1 }}
        >
          Previous
        </Button>
        <Typography variant="body1" sx={{ mx: 2 , color: 'white'}}>
          Page {page} of {totalPages}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default PaginatedItems;
