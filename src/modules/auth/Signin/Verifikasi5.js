import React from 'react';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

const Verifikasi5 = () => {
  return (
    <Box width='46vw' height='100%' display='grid' bgcolor='#FFFFFF'>
      <Box
        width='46vw'
        height='100%'
        display='grid'
        alignContent='center'
        px='3vw'
        sx={{ bgcolor: '#FFFFFF' }}
      >
        <Paper elevation={3} sx={{ padding: '30px' }}>
          <Box>
            <Typography
              variant='h4'
              ml='10px'
              sx={{
                color: '#5C5E61',
                fontSize: '20px',
              }}
            >
              Verifikasi 2 Langkah dibutuhkan
            </Typography>
          </Box>
          <Box ml={3} mr={3} mt={2}>
            <Divider
              orientation='Horizontal'
              style={{
                height: 2,
                backgroundColor: '#5C5E61',
              }}
            />
          </Box>

          <Box
            pt='20px'
            justifyContent='center'
            alignItems='center'
            spacing={3}
          >
            <Typography
              variant='h5'
              ml='10px'
              sx={{
                color: '#000000',
                fontSize: '16px',
                textAlign: 'left',
              }}
            >
              Anda telah meminta kami untuk meminta kode login 6 digit ketika
              ada yang mencoba mengakses akun Anda dari perangkat atau browser
              baru.
            </Typography>
            <Box pt='55px'>
              <Typography
                variant='h5'
                sx={{
                  color: '#151718',
                  fontSize: '16px',
                  textAlign: 'center',
                }}
              >
                Masukkan kode 6 digit dari TGPass Autentikator di bawah ini.
              </Typography>
            </Box>
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              sx={{
                '& > :not(style)': { m: 3 },
              }}
            >
              <Box
                alignItems='flex-end'
                component='form'
                sx={{
                  '& > :not(style)': { m: 1, width: '6ch', height: '3ch' },
                }}
                noValidate
                autoComplete='off'
              >
                <TextField variant='outlined' />
                <TextField variant='outlined' />
                <TextField variant='outlined' />
              </Box>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': { m: 1, width: '6ch', height: '3ch' },
                }}
                noValidate
                autoComplete='off'
              >
                <TextField variant='outlined' />
                <TextField variant='outlined' />
                <TextField variant='outlined' />
              </Box>
            </Box>
          </Box>
          <Box paddingTop='75px' pr='20px' pl='20px'>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='flex-end'
            >
              <Typography
                variant='h6'
                sx={{
                  color: '#151718',
                  fontSize: '14px',
                }}
              >
                Kirim ulang kode
              </Typography>

              <Button
                variant='contained'
                color='primary'
                sx={{
                  fontWeight: 'regular',
                  fontSize: 16,
                  textTransform: 'capitalize',
                  borderRadius: 25,
                  padding: '4px 16px',
                  gap: 8,
                  width: '30%',
                  bgcolor: '#E42313',
                }}
              >
                Konfirmasi
              </Button>
            </Stack>
          </Box>
        </Paper>
        <Typography
          variant='h6'
          sx={{
            justifyContent: 'flex-start',
            color: '#A0A4A8',
            fontSize: '14px',
            mt: '125px',
          }}
        >
          Ⓒ PT. Telkom Indonesia Tbk. | version 1.0
        </Typography>
      </Box>
    </Box>
  );
};

export default Verifikasi5;
