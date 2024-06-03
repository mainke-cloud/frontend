import { Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import AppScrollbar from '../../../AppScrollbar';
import { Box, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import FormAddressBook from '../../FormAddressBook';

const SuratInternal_2 = ({ handleNext, handlePrev, templateData }) => {
  const kepada = useSelector((state) => state.addressbook.kepada);
  const tembusan = useSelector((state) => state.addressbook.tembusan);

  const handleSubmit = () => {
    // if (KepadaIsEmpty()) {
    //   setFormValid(false);
    // } else {
    //   handleNext();
    // }

    const validKepada = !KepadaIsEmpty();
    const validTembusan = !TembusanIsEmpty();

    setFormValidKepada(validKepada);
    setFormValidTembusan(validTembusan);

    if (validKepada && validTembusan) {
      handleNext();
    }
  };

  // const [isFormValid, setFormValid] = useState(true);
  // const KepadaIsEmpty = () => {
  //   return (
  //     !kepada || (kepada.length === 1 && !tembusan) || tembusan.length === 1
  //   );
  // };

  const [isFormValidKepada, setFormValidKepada] = useState(true);
  const [isFormValidTembusan, setFormValidTembusan] = useState(true);

  const KepadaIsEmpty = () => {
    return !kepada || kepada.length === 1;
  };

  const TembusanIsEmpty = () => {
    return !tembusan || tembusan.length === 1;
  };

  const handleAddressBookChange = () => {
    setFormValidKepada(true) && setFormValidTembusan(true);
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
        <FormAddressBook
          text='Kepada'
          data={kepada}
          templateData={templateData}
          isValid={isFormValidKepada}
          onAddressBookChange={handleAddressBookChange}
        />

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
            {templateData ? (
              <Typography>{templateData.kepada}</Typography>
            ) : (
              kepada?.map((item) => (
                <Stack key={item.id}>
                  <Typography>
                    {item.jabatan} - {item.nama}
                  </Typography>
                </Stack>
              ))
            )}
          </AppScrollbar>
        </Box>

        <FormAddressBook
          text='Tembusan'
          data={tembusan}
          templateData={templateData}
          isValid={isFormValidTembusan}
          onAddressBookChange={handleAddressBookChange}
        />

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
            {templateData ? (
              <Typography>{templateData.tembusan}</Typography>
            ) : (
              tembusan?.map((item) => (
                <Stack key={item.id}>
                  <Typography>
                    {item.jabatan} - {item.nama}
                  </Typography>
                </Stack>
              ))
            )}
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
            onClick={handleSubmit}
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
  templateData: PropTypes.object,
};

export default SuratInternal_2;
