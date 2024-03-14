import React, { useRef, useState } from 'react';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

const Verifikasi5 = () => {
  const [values, setValues] = useState(Array(6).fill(''));
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    const newValues = [...values];
    newValues[index] = value.slice(0, 1);
    setValues(newValues);
    if (value.length === 1) {
      if (index < refs.length - 1) {
        refs[index + 1].current.focus();
      }
    }
  };

  const handleBackspace = (index, event) => {
    if (event.key === 'Backspace') {
      const newValues = [...values];
      newValues[index] = '';
      setValues(newValues);
      if (index > 0) {
        refs[index - 1].current.focus();
      }
    }
  };
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
                <TextField
                  variant='outlined'
                  inputRef={refs[0]}
                  onChange={(e) => handleInputChange(0, e)}
                  onKeyDown={(e) => handleBackspace(0, e)}
                  value={values[0]}
                />
                <TextField
                  variant='outlined'
                  inputRef={refs[1]}
                  onChange={(e) => handleInputChange(1, e)}
                  onKeyDown={(e) => handleBackspace(1, e)}
                  value={values[1]}
                />
                <TextField
                  variant='outlined'
                  inputRef={refs[2]}
                  onChange={(e) => handleInputChange(2, e)}
                  onKeyDown={(e) => handleBackspace(2, e)}
                  value={values[2]}
                />
              </Box>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': { m: 1, width: '6ch', height: '3ch' },
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  variant='outlined'
                  inputRef={refs[3]}
                  onChange={(e) => handleInputChange(3, e)}
                  onKeyDown={(e) => handleBackspace(3, e)}
                  value={values[3]}
                />
                <TextField
                  variant='outlined'
                  inputRef={refs[4]}
                  onChange={(e) => handleInputChange(4, e)}
                  onKeyDown={(e) => handleBackspace(4, e)}
                  value={values[4]}
                />
                <TextField
                  variant='outlined'
                  inputRef={refs[5]}
                  onChange={(e) => handleInputChange(5, e)}
                  onKeyDown={(e) => handleBackspace(5, e)}
                  value={values[5]}
                />
              </Box>
            </Box>
          </Box>
          <Box paddingTop='75px' pr='20px' pl='20px'>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='flex-end'
            >
              <Button
                variant='text'
                sx={{
                  color: '#151718',
                  fontSize: '14px',
                }}
              >
                Kirim ulang kode
              </Button>

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
