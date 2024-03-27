import React from 'react'
import { Box, Divider, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { X, Send } from 'feather-icons-react';

const HeaderDetail = ({nama}) => {
  return (
    <>
    <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ paddingX: 8, paddingTop: 12, paddingBottom: 4 }}
      >
        <Typography fontSize='20px' fontWeight='700'>
          {nama}
        </Typography>
        <Stack direction='row' columnGap='24px'>
          <Box border='1px solid #B1B5BA' borderRadius='3px' padding='8px'>
            <Send style={{ width: '28px', height: '28px' }} />
          </Box>
          <Box border='1px solid #B1B5BA' borderRadius='3px' padding='8px'>
            <X style={{ width: '28px', height: '28px' }} />
          </Box>
        </Stack>
      </Stack>
      <Divider sx={{ borderColor: '#B1B5BA', borderBottomWidth: '2px' }} />
    </>
  )
}

  HeaderDetail.propTypes = {
    nama: PropTypes.string,
  };

export default HeaderDetail
