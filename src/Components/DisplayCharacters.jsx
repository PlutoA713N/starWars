import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardComponent from './CardComponent';
import { Box } from '@mui/material';
import Loading from './Loading';
import Error from './Error';

const DisplayCharacters = ({ URL , handleTotalPages}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(URL);
      setData(response.data);
      handleTotalPages(Math.ceil(response.data.count / 10)); 
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [URL]);

  const retryFetch = () => {
    fetchData();
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} onRetry={retryFetch} />;

  if (!data || data.results.length === 0) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row',  flexWrap: 'wrap' , minHeight: '100vh'}}>
      <h3>No Characters Found!</h3>;
      </Box>
    )
  }
  


  return (
    <Box sx={{ display: 'flex', flexDirection: 'row',  flexWrap: 'wrap' , minHeight: '100vh'}}>
      {data?.results.map((character, index) => {
        console.log(character.url.match(/\/people\/(\d+)\//)[1], URL, 44)
        return <CardComponent
          key={character.name}
          title={character.name}
          index={
             character.url.match(/\/people\/(\d+)\//)[1]

          }
          charactersData={character}
          speciesColor={character.skin_color}
        />
  })}
    </Box>
  );
};

export default DisplayCharacters;
