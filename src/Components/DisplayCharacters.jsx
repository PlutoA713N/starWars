import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardComponent from './CardComponent';
import { Box } from '@mui/material';
import Loading from './Loading';
import Error from './Error';

const DisplayCharacters = ({ URL, handleTotalPages }) => {
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
  }, [URL, handleTotalPages]);

  const retryFetch = () => {
    fetchData();
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} onRetry={retryFetch} />;

  if (!data || data.results.length === 0) {
    return <h3>No Characters Found!</h3>;
  }
  

  const previousPage = data?.previous ? Number(data.previous.match(/page=(\d+)/)[1]) : 0;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {data?.results.map((character, index) => (
        <CardComponent
          key={character.name}
          title={character.name}
          index={
            !data?.previous && !data?.next
              ? Number(data?.results[0].url.match(/\/people\/(\d+)\//)?.[1]) - 1
              : previousPage ? previousPage * 10 + index + 1 : index + 1
          }
          charactersData={character}
          speciesColor={character.skin_color}
        />
      ))}
    </Box>
  );
};

export default DisplayCharacters;
