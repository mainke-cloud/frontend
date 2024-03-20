import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { useNavigate, useLocation } from 'react-router-dom';
import ArrowBackButton from '@crema/components/ArrowBackButton/ArrowBackButton';
import SuccessImage from '../../../assets/LoginPage/berhasil.png';

const Verifikasi4 = () => {
  const location = useLocation();
  const values = location.state && location.state.valuess;
  console.log(values);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/signin/verifikasi5', { state: { values } });
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
      <Box>
        <Paper elevation={3} sx={{ padding: '30px' }}>
          <Box
            sx={{
              display: 'flex',
              '& > :not(style)': {
                m: 2,
              },
            }}
          >
            <ArrowBackButton path='/signin/verifikasi3' />

            <Typography
              variant='h4'
              pt='10px'
              sx={{
                color: '#151718',
                fontSize: '20px',
                marginTop: '80px',
              }}
            >
              VERIFIKASI 2 LANGKAH
            </Typography>
          </Box>
          <Box ml={3} mr={3}>
            <Divider
              orientation='Horizontal'
              style={{
                height: 2,
                backgroundColor: '#5C5E61',
              }}
            />
          </Box>
          <Stack
            marginTop='20px'
            justifyContent='center'
            alignItems='center'
            spacing={3}
          >
            <img src={SuccessImage} />
            <Typography
              variant='h5'
              sx={{
                color: '#151718',
                fontSize: '18px',
              }}
            >
              Selamat Anda berhasil Mengaktifkan Verifikasi 2 Langkah{' '}
            </Typography>
          </Stack>
          <Box marginTop='27px' textAlign='center'>
            <Button
              variant='contained'
              color='primary'
              onClick={handleSubmit}
              sx={{
                fontWeight: 'regular',
                fontSize: 14,
                textTransform: 'capitalize',
                borderRadius: 25,
                padding: '4px 16px',
                gap: 8,
                width: '50%',
                bgcolor: '#E42313',
              }}
            >
              Lanjut Ke Dashboard
            </Button>
          </Box>
        </Paper>
        <Typography
          variant='h6'
          sx={{
            justifyContent: 'flex-start',
            color: '#A0A4A8',
            fontSize: '14px',
            mt: '55px',
          }}
        >
          Ⓒ PT. Telkom Indonesia Tbk. | version 1.0
        </Typography>
      </Box>
    </Box>
  );
};

export default Verifikasi4;
