import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import '../../styles/carousel.css';

const AuthWrapper = ({ children }) => {
  return (
    <Stack direction='row' height='100%'>
      <Box width='819px'>
        <CCarousel controls indicators>
          <CCarouselItem style={{}}>
            <CImage
              className='d-block w-100'
              src='./carousel1.png'
              alt='slide 1'
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className='d-block w-100'
              src='./carousel2.png'
              alt='slide 2'
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className='d-block w-100'
              src='./carousel2.png'
              alt='slide 3'
            />
          </CCarouselItem>
        </CCarousel>
      </Box>

      <Box width='717px' padding='70px'>
        <Box>
          <Box>
            <img src='./logotelkom.png' />
            <Typography variant='h1' paddingBottom='40px' paddingTop='30px'>
              Masuk NDE Telkom
            </Typography>
          </Box>
          {children}
        </Box>
      </Box>
    </Stack>
  );
};

export default AuthWrapper;

AuthWrapper.propTypes = {
  children: PropTypes.node,
};
