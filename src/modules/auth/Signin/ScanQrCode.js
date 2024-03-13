import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const ScanQrCode = () => {
  const handleChange = (event, index) => {
    const inputValue = event.target.value;
    if (inputValue.length > 1) {
      event.preventDefault();
      const newValue = inputValue.slice(0, 1);
      event.target.value = newValue;
    }

    if (index < 5) {
      const nextInput = document.querySelector(
        `input[name="digit${index + 1}"]`,
      );
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

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

        <Box display='grid' justifyItems='center'>
          <Typography variant='h5' paddingTop='20px' paddingBottom='20px'>
            Buka Aplikasi TGPortal pada ponsel anda lalu scan kode QR berikut
          </Typography>

          <img src='/qrcode.png' alt='gambar qr' />

          <Typography variant='body1' pt='10px'>
            Atau masuk dengan kode manual
          </Typography>

          <Stack direction='row' paddingTop='20px' alignItems='center'>
            <Typography variant='h3'>
              88D120AA2E37F3A857FCD9643B20CA3C
            </Typography>

            <IconButton>
              <ContentCopyIcon />
            </IconButton>
          </Stack>

          <Typography variant='h5' py='20px'>
            Masukkan kode 6 digit dari TGPass Autentikator di bawah ini.
          </Typography>

          <Grid container spacing={1} justifyContent='center'>
            {Array.from({ length: 6 }, (_, index) => (
              <Grid item key={index} xs={1}>
                <TextField
                  name={`digit${index + 1}`}
                  label=''
                  variant='outlined'
                  fullWidth
                  margin='dense'
                  inputMode='numeric'
                  maxLength={1}
                  onChange={(event) => handleChange(event, index)}
                  sx={{
                    borderRadius: '5px',
                    color: 'black',
                  }}
                />
              </Grid>
            ))}
          </Grid>

          <Button
            variant='outlined'
            sx={{
              marginTop: '20px',
              width: '20vw',
              borderRadius: '20px',
              color: '#8C8F93',
              border: '1px solid #8C8F93',
              '&:hover': {
                border: '1px solid #8C8F93',
              },
            }}
          >
            Aktivasi
          </Button>
        </Box>
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

export default ScanQrCode;
