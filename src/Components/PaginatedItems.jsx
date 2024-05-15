import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

const PaginatedItems = ({ handleUrl, totalPages }) => {
  const [page, setPage] = useState(1);

  const handlePrevious = () => {
    if (page > 1) {
      setPage((prevPage) => {
        const newPage = prevPage - 1;
        handleUrl(`https://swapi.dev/api/people/?page=${newPage}`);
        return newPage;
      });
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage((prevPage) => {
        const newPage = prevPage + 1;
        handleUrl(`https://swapi.dev/api/people/?page=${newPage}`);
        return newPage;
      });
    }
  };

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
        <Typography variant="body1" sx={{ mx: 2 }}>
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
