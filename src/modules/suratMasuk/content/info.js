import React from 'react';
import PropsTypes from 'prop-types';
import { Stack, Typography, Box } from '@mui/material';

import AppScrollbar from '@crema/components/AppScrollbar';
import ProfileUser from '../../../@crema/components/Tabs/Disposisi/ProfileUser';

const Info = (props) => {
  const { data } = props;

  return (
    <Stack
      rowGap={'16px'}
      sx={{ border: '1px solid #A7A7A7', borderRadius: '10px' }}
    >
      <Box className='content-styled-box'>
        <Typography className='content-styled-judul'> To </Typography>
        <Box
          className='content-styled-box'
          sx={{ height: '275px', mt: '20px' }}
        >
          <AppScrollbar>
            {data &&
              data.map((item, index) => (
                <Box key={index} sx={{ paddingY: '6px' }}>
                  <ProfileUser
                    avatar={item.avatar}
                    position={item.position.toUpperCase()}
                    name={item.name.toUpperCase()}
                  />
                </Box>
              ))}
          </AppScrollbar>
        </Box>
        <Typography className='content-styled-judul' pt='20px'>
          {' '}
          CC{' '}
        </Typography>
        <Box
          className='content-styled-box'
          sx={{ height: '275px', mt: '20px' }}
        >
          <AppScrollbar>
            {data &&
              data.map((item, index) => (
                <Box key={index} sx={{ paddingY: '6px' }}>
                  <ProfileUser
                    avatar={item.avatar2}
                    position={item.position.toUpperCase()}
                    name={item.name.toUpperCase()}
                  />
                </Box>
              ))}
          </AppScrollbar>
        </Box>
      </Box>
    </Stack>
  );
};

export default Info;

Info.propTypes = {
  data: PropsTypes.any,
};
