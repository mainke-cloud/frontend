import { Link, MenuItem, Stack, Typography } from '@mui/material';
import React from 'react';
import AppScrollbar from '../../../AppScrollbar';
import { Box, Button, TextField } from '@mui/material';
import ButtonBuatSurat from '@crema/components/Tabs/BuatSurat/ButtonBuatSurat/ButtonBuatSurat';
import PropTypes from 'prop-types';
import ComposeMail from '@crema/components/AppAddress';

const jabatan = [
  {
    value: '1',
    label: '',
  },
];

const SuratDelegasi_2 = ({ handleNext, handlePrev }) => {
  const [isComposeMail, setComposeMail] = React.useState(false);

  const onOpenComposeMail = () => {
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setComposeMail(false);
  };

  return (
    <>
      <Box
        sx={{
          border: '1px solid #D8D8D8',
          minHeight: '300px',
          borderRadius: '12px',
          padding: '15px',
        }}
      >
        <Stack flex={1} spacing={5}>
          <Typography variant='h4'>Penerima Delegasi</Typography>
          <TextField />
        </Stack>
        <Stack flex={1} spacing={5} pt='20px'>
          <Typography variant='h4'>Jabatan</Typography>

          <TextField
            id='outlined-select-currency'
            select
            fullWidth
            defaultValue='1'
          >
            {jabatan.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <Stack direction='row' justifyContent='flex-end' spacing={4} pt='50px'>
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
            Selanjutnya (Pengirim)
          </Button>
        </Stack>
      </Box>
    </>
  );
};

SuratDelegasi_2.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};

export default SuratDelegasi_2;
