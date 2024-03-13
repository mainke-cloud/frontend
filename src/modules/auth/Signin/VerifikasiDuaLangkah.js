import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const VerifikasiDuaLangkah = () => {
  return (
    <Box
      width='46vw'
      height='100%'
      display='grid'
      alignContent='center'
      px='3vw'
    >
      <Paper elevation={3} sx={{ padding: '30px' }}>
        <Stack direction='row' alignItems='center'>
          <IconButton>
            <ArrowBackIosNewIcon />
          </IconButton>

          <Typography variant='h1' paddingLeft='30px'>
            VERIFIKASI 2 LANGKAH
          </Typography>
        </Stack>

        <Divider sx={{ bgcolor: 'black' }} />

        <Box
          sx={{
            paddingTop: '20px',
            textAlign: 'center',
          }}
        >
          <img src='/twofactor.png' alt='gambar verifikasi 2 langkah' />
          <Typography variant='h4' paddingTop='30px'>
            Apakah anda sudah memiliki aplikasi TGPortal di perangkat anda ?
          </Typography>
        </Box>

        <Stack
          direction='row'
          paddingTop='70px'
          paddingBottom='20px'
          justifyContent='center'
          gap='10px'
        >
          <Button
            variant='contained'
            sx={{
              width: '12vw',
              borderRadius: '50px',
              bgcolor: '#E42313',
            }}
          >
            Ya
          </Button>

          <Button
            variant='outlined'
            sx={{
              width: '12vw',
              borderRadius: '50px',
              color: '#4D6FD4',
              border: '1px solid #4D6FD4',
              '&:hover': {
                border: '1px solid #4D6FD4',
              },
            }}
          >
            Tidak
          </Button>
        </Stack>
      </Paper>

      <Typography
        variant='h6'
        sx={{
          color: '#A0A4A8',
          fontSize: '14px',
          paddingTop: '50px',
        }}
      >
        Ⓒ PT. Telkom Indonesia Tbk. | version 1.0
      </Typography>
    </Box>
  );
};

export default VerifikasiDuaLangkah;
