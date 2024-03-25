import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types'; // Import PropTypes
import AppCard from '@crema/components/AppCard';
import { useState } from 'react';

const Mail_Button = ({ bgColor, bgHover, textColor, text, image }) => {
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
      <Grid container  alignItems="center" justifyContent="center">
          <Grid item xs={2}>
            <img src={image} style={{ width: 45, height: 45 }} />
          </Grid>
          <Grid item xs={10} alignItems="center" justifyContent="center">
              <Typography variant='h3' sx={{ color: textColor }}>
                {text}
              </Typography>                  
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
  image: PropTypes.string.isRequired,
};
export default Mail_Button;
