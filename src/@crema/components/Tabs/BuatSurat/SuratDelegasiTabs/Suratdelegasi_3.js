import { IconButton, Link, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { Button } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import PropTypes from 'prop-types';
import ComposeMail from '@crema/components/AppAddress';
import { users } from '@crema/services/dummy/user/user';

const SuratDelegasi_3 = ({ handleNext, handlePrev }) => {
  const [isComposeMail, setComposeMail] = React.useState(false);

  const onOpenComposeMail = () => {
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setComposeMail(false);
  };

  return (
    <>
      <Stack
        spacing={4}
        sx={{
          border: '1px solid #D8D8D8',
          minHeight: '570px',
          borderRadius: '12px',
          padding: '15px',
        }}
      >
        <Stack direction='row'>
          <Link
            component='button'
            underline='always'
            sx={{
              fontSize: '16px',
              fontWeight: 600,
              color: 'black',
              textDecorationColor: 'black',
            }}
            onClick={() => onOpenComposeMail()}
          >
            Jabatan
          </Link>
          <Typography variant='h4' color='red'>
            *
          </Typography>
        </Stack>

        <TextField
          disabled
          fullWidth
          defaultValue='Kepala Research and Development'
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => onOpenComposeMail()}>
                <AddCircleOutlineRoundedIcon
                  sx={{ color: 'black', fontSize: '40px' }}
                />
              </IconButton>
            ),
          }}
        />

        <Stack direction='row'>
          <Link
            component='button'
            underline='always'
            sx={{
              fontSize: '16px',
              fontWeight: 600,
              color: 'black',
              textDecorationColor: 'black',
            }}
            onClick={() => onOpenComposeMail()}
          >
            Nama
          </Link>
          <Typography variant='h4' color='red'>
            *
          </Typography>
        </Stack>

        <TextField
          disabled
          fullWidth
          defaultValue='Taufik Sulaeman'
          InputProps={{
            endAdornment: (
              <IconButton>
                <AddCircleOutlineRoundedIcon
                  sx={{ color: 'black', fontSize: '40px' }}
                />
              </IconButton>
            ),
          }}
        />

        <Typography variant='h4'>Divisi</Typography>

        <TextField disabled fullWidth defaultValue='Divisi Informasi' />

        <Stack direction='row' spacing={5}>
          <Stack flex={1} spacing={5}>
            <Typography variant='h4'>NIK</Typography>
            <TextField disabled defaultValue='8900002' />
          </Stack>
          <Stack flex={1} spacing={5}>
            <Typography variant='h4'>Kode Departemen</Typography>
            <TextField disabled defaultValue='DIT-11 B 10000' />
          </Stack>
        </Stack>

        <Typography variant='h4'>Departemen</Typography>

        <TextField disabled fullWidth defaultValue='Decision Support' />

        <Typography variant='h4'>Kota Kantor</Typography>

        <TextField disabled fullWidth defaultValue='Bandung' />

        <Stack direction='row' justifyContent='flex-end' spacing={4}>
          <Button
            variant='contained'
            sx={{
              borderRadius: '12px',
              bgcolor: '#D9DDE3',
              color: '#5C5E61',
              minWidth: '84px',
            }}
            onClick={handlePrev}
          >
            Kembali
          </Button>

          <Button
            variant='contained'
            sx={{
              borderRadius: '12px',
              bgcolor: '#E42313',
              minWidth: '220px',
              minHeight: '50px',
            }}
            onClick={handleNext}
          >
            Selanjutnya (Penerima)
          </Button>
        </Stack>
      </Stack>

      <ComposeMail
        isComposeMail={isComposeMail}
        onCloseComposeMail={onCloseComposeMail}
        datas={users}
      />
    </>
  );
};

SuratDelegasi_3.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};

export default SuratDelegasi_3;
