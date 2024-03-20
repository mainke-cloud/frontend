import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import '@coreui/coreui/dist/css/coreui.min.css';
import '../../styles/carousel.css';
import Carousel from '@crema/components/Carousel/Carousel';
const AuthWrapper = ({ children }) => {
  return (
    <Box
      style={{
        height: '100vh',
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <Box>
        <Carousel />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default AuthWrapper;

AuthWrapper.propTypes = {
  children: PropTypes.node,
};
