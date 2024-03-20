import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useRef, useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useNavigate } from 'react-router-dom';
import ArrowBackButton from '@crema/components/ArrowBackButton/ArrowBackButton';
import QrImage from '../../../assets/LoginPage/qrcode.png';
import { useLocation } from 'react-router-dom';

const Verifikasi3 = () => {
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
  const location = useLocation();
  const valuess = location.state && location.state.values;
  console.log(valuess);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/signin/verifikasi4', { state: { valuess } });
  };

  const allValuesFilled = values.every((value) => value.length === 1);

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
          <ArrowBackButton path='/signin/verifikasi2' />

          <Typography variant='h1' paddingLeft='30px'>
            VERIFIKASI 2 LANGKAH
          </Typography>
        </Stack>

        <Divider sx={{ bgcolor: 'black' }} />

        <Box display='grid' justifyItems='center'>
          <Typography variant='h5' paddingTop='20px' paddingBottom='20px'>
            Buka Aplikasi TGPortal pada ponsel anda lalu scan kode QR berikut
          </Typography>

          <img src={QrImage} alt='gambar qr' />

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

          <Button
            disabled={!allValuesFilled}
            variant='outlined'
            onClick={handleSubmit}
            sx={{
              marginTop: '50px',
              width: '20vw',
              borderRadius: '20px',
              color: values.every((value) => value.length === 1)
                ? 'white'
                : '#8C8F93',
              backgroundColor: values.every((value) => value.length === 1)
                ? 'red'
                : null,
              '&:hover': {
                color: '#F0F0F0',
                bgcolor: '#B22222',
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

export default Verifikasi3;
