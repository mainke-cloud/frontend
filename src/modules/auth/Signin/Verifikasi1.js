import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate, useLocation } from 'react-router-dom';

const Verifikasi1 = () => {

  const location = useLocation();
  const values = location.state && location.state.values;
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/signin/verifikasi2', { state: { values } });
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
        <Typography variant='h1'>Pengecekan Keamanan</Typography>

        <Typography variant='h1' paddingTop='50px'>
          <IconButton disabled>
            <InfoOutlinedIcon sx={{ color: '#FFB020' }} />
          </IconButton>
          Dua Langkah Verifikasimu Belum Aktif
        </Typography>

        <Typography variant='body1' paddingTop='15px'>
          Aktivasi dua langkah verifikasi untuk proteksi lebih aman terhadap
          akunmu !
        </Typography>

        <Typography variant='h4' paddingTop='70px'>
          Apa itu Dua Langkah Verifikasi dan mengapa anda memerlukannya?
        </Typography>

        <Typography variant='body1'>
          Dua Langkah Verifikasi adalah langkah tambahan keamanan saat login.
          Setelah memasukkan kata sandi, Anda perlu melakukan tindakan tambahan,
          seperti memasukkan kode yang dikirimkan ke ponsel Anda. Ini menjaga
          akun Anda lebih aman karena mempersulit akses bagi orang yang tidak
          sah.
        </Typography>

        <Stack
          direction='row'
          paddingTop='70px'
          paddingBottom='20px'
          justifyContent='center'
          gap='10px'
        >
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
            Nanti Saja
          </Button>

          <Button
            variant='contained'
            onClick={handleSubmit}
            sx={{
              width: '12vw',
              borderRadius: '50px',
              bgcolor: '#E42313',
            }}
          >
            Aktifkan
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

export default Verifikasi1;
