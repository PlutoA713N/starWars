import React from 'react';
import { Modal, Backdrop, Box, Typography, Card } from '@mui/material';
import HomeTownData from './HomeTownData';
import Loading from './Loading';
import Error from './Error';

const ModalComponent = ({ open, characterData, handleClose }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      BackdropComponent={Backdrop}
      BackdropProps={{
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 2,
          p: 4,
          minWidth: 400,
        }}
      >
        {!characterData && <Loading />} //
        {characterData ? (  
          <>
            <Typography variant="h2" id="modal-title" gutterBottom>
              {characterData.name}
            </Typography>
            <Card>
              <Box sx={{ p: 2 }}>
                <Typography variant="body1" id="modal-description" gutterBottom>
                  Height: {characterData?.height ? (characterData.height / 100).toFixed(2) : 'N/A'} meters
                </Typography>
                <Typography variant="body1" id="modal-description" gutterBottom>
                  Mass: {characterData?.mass} kg
                </Typography>
                <Typography variant="body1" id="modal-description" gutterBottom>
                  Date Added: {formatDate(characterData?.created)}
                </Typography>
                <Typography variant="body1" id="modal-description" gutterBottom>
                  Number of Films: {characterData?.films.length}
                </Typography>
                <Typography variant="body1" id="modal-description" gutterBottom>
                  Birth Year: {characterData?.birth_year}
                </Typography>
                <HomeTownData homeWorldUrl={characterData.homeworld} />
              </Box>
            </Card>
          </>
        ) : (
          <Error error="Failed to load character data" /> 
        )}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
