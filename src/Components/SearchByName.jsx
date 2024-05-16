import React, { useState, useEffect, useCallback } from 'react';
import { TextField, Box, Typography } from '@mui/material';
import { debounce } from 'lodash';

const SearchByName = ({ searchTerm, handleChange }) => {
  

  return (
    <Box>
      <TextField
        label="Search by name"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => handleChange(e.target.value)}
        fullWidth
        margin="normal"
      />
    </Box>
  );
};

export default SearchByName;
