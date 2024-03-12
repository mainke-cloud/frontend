import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types'; // Import PropTypes
const Mail_Status = ({ image, text, boxColor, counter }) => {
  return (
    <>
      <Button sx={{ padding: '10px' }}>
        <img src={image} style={{ marginRight: '8px' }} />
        <Stack spacing={1}>
          <Typography variant='h3' sx={{ color: 'black' }}>
            {text}
          </Typography>
          <Box
            alignItems='center'
            sx={{
              width: 37,
              height: 20,
              backgroundColor: boxColor,
              borderRadius: 2,
            }}
          >
            <Typography variant='body1' sx={{ color: '#FFFFFF' }}>
              {counter}
            </Typography>
          </Box>
        </Stack>
      </Button>
    </>
  );
};

Mail_Status.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  boxColor: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
};
export default Mail_Status;
