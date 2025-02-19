import React from 'react';
import PropsTypes from 'prop-types';
import { Stack, Typography, Box } from '@mui/material';
import ListStaff from '@crema/components/Tabs/ListStaff';

const Info = () => {
  return (
    <Stack
      rowGap={'16px'}
      sx={{ border: '1px solid #A7A7A7', borderRadius: '10px' }}
    >
      <Box className='content-styled-box'>
        <Typography className='content-styled-judul'> To </Typography>
        <ListStaff sx={{ mt: 2 }} />
        <Typography className='content-styled-judul' pt='20px'>
          {' '}
          Cc{' '}
        </Typography>
        <ListStaff sx={{ mt: 2 }} />
      </Box>
    </Stack>
  );
};

export default Info;

Info.propTypes = {
  data: PropsTypes.any,
};
