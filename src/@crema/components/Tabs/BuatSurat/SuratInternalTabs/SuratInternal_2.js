import { Stack, Typography } from '@mui/material';
import React from 'react';
import AppScrollbar from '../../../AppScrollbar';
import { Box, Button } from '@mui/material';
import PropTypes from 'prop-types';
import FormAddressBook from '../../FormAddressBook';
const SuratInternal_2 = ({ handleNext, handlePrev }) => {
  const kepada = useSelector((state) => state.addressbook.kepada);
  const tembusan = useSelector((state) => state.addressbook.tembusan);

  let datass = kepada[0];
  if (!datass || !Array.isArray(datass)) {
    datass = [];
  }

  let datasss = tembusan[0];
  if (!datasss || !Array.isArray(datasss)) {
    datasss = [];
  }

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
        <FormAddressBook text='Kepada' data={datass} />

        <Stack direction='row' spacing={4} alignItems={'center'}>
          <Typography>Tampilkan Kepada</Typography>
          <Button
            variant='contained'
            sx={{
              bgcolor: '#229BD8',
              padding: '5px',
              borderRadius: '5px',
              color: 'white',
            }}
          >
            Update
          </Button>
        </Stack>

        <Box
          position={'relative'}
          sx={{
            border: '1px solid #B1B5BA',
            borderRadius: '10px',
          }}
        >
          <AppScrollbar
            sx={{
              minHeight: '145px',
              maxHeight: '145px',
              overflow: 'auto',
            }}
          >
            {datass.map((item) => (
              <Stack key={item.id}>
                <Typography>
                  {item.jabatan} - {item.nama}
                </Typography>
              </Stack>
            ))}
          </AppScrollbar>
        </Box>

        <FormAddressBook text='Tembusan' data={datasss} />

        <Stack direction='row' spacing={4} alignItems={'center'}>
          <Typography>Tampilkan Kepada</Typography>
          <Button
            variant='contained'
            sx={{
              bgcolor: '#229BD8',
              padding: '5px',
              borderRadius: '5px',
              color: 'white',
            }}
          >
            Update
          </Button>
        </Stack>

        <Box
          position={'relative'}
          sx={{
            border: '1px solid #B1B5BA',
            borderRadius: '10px',
          }}
        >
          <AppScrollbar
            sx={{
              minHeight: '145px',
              maxHeight: '145px',
              overflow: 'auto',
            }}
          >
            {datasss.map((item) => (
              <Stack key={item.id}>
                <Typography>
                  {item.jabatan} - {item.nama}
                </Typography>
              </Stack>
            ))}
          </AppScrollbar>
        </Box>

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
    </>
  );
};

SuratInternal_2.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};

export default SuratInternal_2;
