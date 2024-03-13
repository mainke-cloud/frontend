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
import { useNavigate } from 'react-router-dom';

const Verifikasi2 = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/signin/verifikasi3');
  };
  return (
    <Box
      width='46vw'
      height='100%'
      display='grid'
      alignContent='center'
      px='3vw'
      sx={{ bgcolor: '#FFFFFF' }}
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
          <img src='/two factor.png' alt='gambar verifikasi 2 langkah' />
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
            variant='outlined'
            onClick={handleSubmit}
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

export default Verifikasi2;
