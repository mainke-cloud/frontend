import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types'; // Import PropTypes
import AppCard from '@crema/components/AppCard';
const Mail_Button = ({ bgColor, textColor, text, subText, image }) => {
  return (
    <AppCard sx={{ backgroundColor: bgColor }}>
      <Grid container >
          <Grid item xs={3}>
            <img src={image} style={{ marginRight: '8px' }} />
          </Grid>
          <Grid item xs={9}>
            <Stack alignItems='flex-start'>
              <Typography variant='h3' sx={{ color: textColor }}>
                {text}
              </Typography>
              <Typography variant='body1' sx={{ color: textColor }}>
                {subText}
              </Typography>
            </Stack>                  
          </Grid>
      </Grid>
    </AppCard>
  );
};
Mail_Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Mail_Button;
