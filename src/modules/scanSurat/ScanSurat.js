import React from 'react'
import kosong from '../../assets/vector/IllustrasiKosong.svg';
import { Stack, Typography } from '@mui/material';

const ScanSurat = () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
      rowGap={'12px'}
    >
      <img src={kosong} alt='belum memilih' />
      <Typography fontSize={'16px'} fontWeight={'600'} >Tidak ada yang dipilih</Typography>
    </Stack>
  );
};

export default ScanSurat;
