import React from 'react';
import { Box, Stack } from '@mui/material';
import ListFile from '@crema/components/Tabs/ListFile';
import PropTypes from 'prop-types';

const Lainnya = ({files}) => {
  console.log(files)

  return (
    <Box className='content-styled-box'>
      <Stack rowGap='16px'>
        <ListFile files={files} label='Lampiran'/>
        <ListFile files={files} label='Refrensi'/>
      </Stack>
    </Box>
  );
};
Lainnya.propTypes = {
  props: PropTypes.shape({}),
  files: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Lainnya;
