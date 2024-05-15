import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Error = ({ message, onRetry }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Typography variant="h6" color="error">
      {message}
    </Typography>
    {onRetry && (
      <Button variant="contained" color="primary" onClick={onRetry} sx={{ mt: 2 }}>
        Retry
      </Button>
    )}
  </Box>
);

export default Error;
