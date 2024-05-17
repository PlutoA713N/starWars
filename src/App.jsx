import React, { useState } from 'react';
import DisplayCharacters from './Components/DisplayCharacters';
import { Box } from '@mui/material';
import PaginatedItems from './Components/PaginatedItems';
import SearchByName from './Components/SearchByName';
import Logo from './Components/Logo';

import  {  useEffect } from 'react';

import backgroundImage from './../public/wp3390444-wallpaper-star-war.jpg'

function App() {
  const searchUrl = `https://swapi.dev/api/people/?search=`
  const pageUrl = `https://swapi.dev/api/people/?page=`

  const [totalPages, setTotalPages] = useState(9)

// for search 
const [searchTerm, setSearchTerm] = useState('')
const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

const handleChange = (value) => {
  setSearchTerm(value);
};

useEffect(() => {
  const debounceTimer = setTimeout(() => {
    setDebouncedSearchTerm(searchTerm);
  }, 1000); 
  return () => clearTimeout(debounceTimer);
}, [searchTerm]);




  const [page, setPage] = useState(1);

  const handlePrevious = () => {
    if (page > 1) {
      setPage((prevPage) => {
        const newPage = prevPage - 1;
        return newPage;
      });
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage((prevPage) => {
        const newPage = prevPage + 1;
        return newPage;
      });
    }
  };

  const handleTotalPages = (pageCount) => {
    setTotalPages(pageCount)
  }



  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundColor: 'transparent' ,
      minHeight: '100vh',
      padding: '3.5rem'
    }}>

      <Box sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.15)', 
        borderRadius: '10px',
        width: '100%',
        flexShrink: 0,

        boxSizing: 'border-box',
        padding: '1.5rem'
      }}>
        <Logo />
        <SearchByName searchTerm={searchTerm} handleChange={handleChange}/>
        {(debouncedSearchTerm !== "")
         ?  <DisplayCharacters URL={searchUrl+debouncedSearchTerm} handleTotalPages={handleTotalPages}/>
        : <DisplayCharacters URL={pageUrl+page}  handleTotalPages={handleTotalPages}/>
        }
        <PaginatedItems 
          page={page}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          totalPages={totalPages} 
          />
      </Box>

    </Box>
  );
}

export default App;
