import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import Error from './Error'; 

const HomeTownData = ({ homeWorldUrl }) => {
  const [homeWorldData, sethomeWorldData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${homeWorldUrl}`);
        sethomeWorldData(response?.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [homeWorldUrl]);

  if (error) {
    return <Error error={error.message} />; 
  }

  return (
    <Box>
      {!homeWorldData ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Typography variant="h6" gutterBottom>
            Homeworld Information
          </Typography>
          <Typography variant="body1" id="modal-description" gutterBottom>
            Name: {homeWorldData?.name}
          </Typography>
          <Typography variant="body1" id="modal-description" gutterBottom>
            Terrain: {homeWorldData?.terrain}
          </Typography>
          <Typography variant="body1" id="modal-description" gutterBottom>
            Climate: {homeWorldData?.climate}
          </Typography>
          <Typography variant="body1" id="modal-description" gutterBottom>
            Residents: {homeWorldData?.residents?.length}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default HomeTownData;
