import { Box, IconButton, Typography } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import React from 'react';

const ButtonBuatSurat = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        //   top: 0,
        // left: '50%',
        right: '1%',
        bottom: '6%',
      }}
    >
      <IconButton>
        <AddCircleOutlineRoundedIcon sx={{ color: 'black' }} />
      </IconButton>
    </Box>
  );
};

export default ButtonBuatSurat;
