import React from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types'; // Import PropTypes
import AppCard from '@crema/components/AppCard';
const Mail_Status = ({ image, text, boxColor, counter }) => {
  return (
    <>
      <AppCard sx={{ padding: '10px' }}>
        <Grid container>
          <Grid item xs={4}>
            <img src={image} style={{ marginRight: '8px' }} />
          </Grid>
          <Grid item xs={8}>
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
          </Grid>
        </Grid>
      </AppCard>
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
