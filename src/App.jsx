import React, { useState } from 'react';
import DisplayCharacters from './Components/DisplayCharacters';
import { Box } from '@mui/material';
import PaginatedItems from './Components/PaginatedItems';
import SearchByName from './Components/SearchByName';


function App() {
  const [url, setUrl] = useState('https://swapi.dev/api/people');
  const [totalPages, setTotalPages] = useState(0);

  const handleUrl = (newUrlLink) => {
    setUrl(newUrlLink);
  };

  const handleTotalPages = (pages) => {
    setTotalPages(pages);
  };


  const handleSearchUrl = (newUrlLink) => {
    setUrl(newUrlLink);
  }

  return (
    <Box sx={{
      boxSizing: 'border-box',
      p: 6,
    }}>
      <SearchByName  handleSearchUrl={handleSearchUrl}/>
      <DisplayCharacters URL={url} handleTotalPages={handleTotalPages} />
      <PaginatedItems handleUrl={handleUrl} totalPages={totalPages} />
    </Box>
  );
}

export default App;


