import React from 'react';
import PropsTypes from 'prop-types';
import { Box } from '@mui/material';

const AppContentViewWrapper = ({ children, ...rest }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        height: '100%',
        width: { xl: '100%' },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default AppContentViewWrapper;

AppContentViewWrapper.propTypes = {
  children: PropsTypes.node,
};
