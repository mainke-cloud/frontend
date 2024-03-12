import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types'; // Import PropTypes
const Mail_Button = ({ bgColor, textColor, text, subText, image }) => {
  return (
    <Button
      variant='contained'
      disableElevation
      sx={{ backgroundColor: bgColor, padding: '10px' }}
    >
      <img src={image} style={{ marginRight: '8px' }} />
      <Stack alignItems='flex-start'>
        <Typography variant='h3' sx={{ color: textColor }}>
          {text}
        </Typography>
        <Typography variant='body1' sx={{ color: textColor }}>
          {subText}
        </Typography>
      </Stack>
    </Button>
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
