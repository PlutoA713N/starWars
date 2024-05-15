import React, { useState } from 'react';
import DisplayCharacters from './Components/DisplayCharacters';
import { Box } from '@mui/material';
import PaginatedItems from './Components/PaginatedItems';
import SearchByName from './Components/SearchByName';
import Logo from './Components/Logo';

import backgroundImage from './../public/wp3390444-wallpaper-star-war.jpg'

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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'auto', 
      width: '100vw', 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundColor: 'transparent' 
    }}>

      <Box sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
        padding: '20px',
        borderRadius: '10px',
      }}>
        <Logo />
        <SearchByName handleSearchUrl={handleSearchUrl}/>
        <DisplayCharacters URL={url} handleTotalPages={handleTotalPages} />
        <PaginatedItems handleUrl={handleUrl} totalPages={totalPages} />
      </Box>

    </Box>
  );
}

export default App;
