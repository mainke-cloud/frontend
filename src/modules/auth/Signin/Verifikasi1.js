import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
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
      width='50vw'
      height='95%'
      sx={{
        bgcolor: '#FFFFFF',
        borderRadius: '16px', // Menambahkan border radius 16px
        border: '1px solid #D8D8D8', // Menambahkan border 1px solid black
      }}
    >
      <Box pt='40px' px='86px'>
        <Typography
          variant='h1'
          pt='24px'
          style={{ fontSize: '36px', fontWeight: 700 }}
        >
          Pengecekan Keamanan
        </Typography>

        <Typography
          variant='h1'
          paddingTop='14px'
          style={{ fontSize: '18px', fontWeight: 500 }}
        >
          <IconButton disabled>
            <InfoOutlinedIcon sx={{ color: '#FFB020' }} />
          </IconButton>
          Dua Langkah Verifikasimu Belum Aktif
        </Typography>

        <Typography
          variant='h6'
          paddingTop='16px'
          style={{ fontSize: '16px', fontWeight: 500, color: '#8C8F93' }}
        >
          Aktivasi dua langkah verifikasi untuk proteksi lebih aman terhadap
          akunmu !
        </Typography>
        <Box
          width='38vw'
          mt='32px'
          sx={{
            bgcolor: '#FFFFFF',
            borderRadius: '16px', // Menambahkan border radius 16px
            border: '1px solid #D8D8D8', // Menambahkan border 1px solid black
            backgroundColor: '#F7F8F9',
          }}
        >
          <Typography
            variant='h5'
            paddingTop='27px'
            px='24px'
            style={{ fontSize: '18px', fontWeight: 700, color: '#474D663' }}
          >
            Apa itu Dua Langkah Verifikasi dan mengapa anda memerlukannya?
          </Typography>

          <Typography
            variant='h5'
            paddingTop='16px'
            px='24px'
            pb='22px'
            style={{ fontSize: '16px', fontWeight: 400, color: '#8C8F93' }}
          >
            Dua Langkah Verifikasi adalah langkah tambahan keamanan saat login.
            Setelah memasukkan kata sandi, Anda perlu melakukan tindakan
            tambahan, seperti memasukkan kode yang dikirimkan ke ponsel Anda.
            Ini menjaga akun Anda lebih aman karena mempersulit akses bagi orang
            yang tidak sah.
          </Typography>
        </Box>
        <Stack
          direction='row'
          paddingTop='32px'
          justifyContent='center'
          gap='16px'
        >
          <Button
            variant='outlined'
            sx={{
              height: '48px',
              width: '12vw',
              borderRadius: '8px',
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
              height: '48px',
              width: '12vw',
              borderRadius: '8px',
              bgcolor: '#E42313',
            }}
          >
            Aktifkan
          </Button>
        </Stack>
        <Typography
          variant='h6'
          sx={{
            color: '#A0A4A8',
            fontSize: '14px',
            paddingTop: '60px',
          }}
        >
          Ⓒ PT. Telkom Indonesia Tbk. | version 1.0
        </Typography>
      </Box>
    </Box>
  );
};

export default Verifikasi1;
