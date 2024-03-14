import React from 'react';
import '../../../styles/carousel.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { Box } from '@mui/material';

const Carousel = () => {
  return (
    <Box>
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
    </Box>
  );
};

export default Carousel;
