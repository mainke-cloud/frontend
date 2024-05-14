import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const FolderWrapper = ({ children }) => {
  return (
    <Box>
      <Box
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: '#F7F8F9',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default FolderWrapper;

FolderWrapper.propTypes = {
  children: PropTypes.node,
};
