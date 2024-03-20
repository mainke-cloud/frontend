import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types'; // Import PropTypes
import AppCard from '@crema/components/AppCard';
import { useState } from 'react';

const Mail_Button = ({ bgColor, bgHover, textColor, text, subText, image }) => {
  const [Link, setLink] = useState();

  const handleClick = () => {
      setLink(!Link);
  };
  return (
    <AppCard 
    sx={{ 
      backgroundColor: bgColor, 
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: bgHover,
      } 
    }} 
    onClick={handleClick} >
      <Grid container >
          <Grid item xs={3}>
            <img src={image} style={{ marginRight: '8px', width: 45, heigh: 45 }} />
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
  bgHover: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Mail_Button;
