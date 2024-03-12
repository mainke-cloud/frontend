import React from 'react';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

const Verifikasi4 = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/signin/verifikasi5');
  };

  return (
    <Box
      width='46vw'
      height='100%'
      gap={63}
      display='grid'
      sx={{ bgcolor: '#FFFFFF' }}
    >
      <Box
        height='100vh'
        borderRadius={10}
        border='0px 0px 0.1px 0px'
        padding={20}
        marginTop='50px'
      >
        <Paper elevation={3} sx={{ width: '100%', height: '75%' }}>
          <Box
            sx={{
              display: 'flex',
              '& > :not(style)': {
                m: 2,
              },
            }}
          >
            <IconButton
              sx={{
                padding: '10px',
                mx: '10px',
                marginTop: '5px',
              }}
            >
              <ArrowBackIosIcon variant='contained' />
            </IconButton>
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
            <img src='/berhasil.png' />
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
