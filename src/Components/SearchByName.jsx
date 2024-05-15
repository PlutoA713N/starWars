import React, { useState, useEffect } from 'react';
import { TextField, Box, Typography } from '@mui/material';
import debounce from 'lodash/debounce';

const SearchByName = ({ handleSearchUrl }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const delayedSearch = debounce((term) => handleSearchUrl(`https://swapi.dev/api/people/?search=${term}`), 500);

  useEffect(() => {
    return () => {
      delayedSearch.cancel();
    };
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    delayedSearch(value); 
  };

  return (
    <Box>
      <TextField
        label="Search by name"
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
    </Box>
  );
};

export default SearchByName;
