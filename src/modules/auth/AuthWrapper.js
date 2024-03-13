import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import '../../styles/carousel.css';

const AuthWrapper = ({ children }) => {
  return (
    <Box
      style={{
        height: '100vh',
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <Box style={{ width: '54vw', height: '100vh' }}>
        <CCarousel controls indicators>
          <CCarouselItem>
            <CImage
              className='d-block w-100'
              src='/carousel1.png'
              alt='slide 1'
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className='d-block w-100'
              src='/carousel2.png'
              alt='slide 2'
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className='d-block w-100'
              src='/carousel2.png'
              alt='slide 3'
            />
          </CCarouselItem>
        </CCarousel>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default AuthWrapper;

AuthWrapper.propTypes = {
  children: PropTypes.node,
};
