import { Avatar, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import AppScrollbar from '../../../AppScrollbar';
import { Box, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import FormAddressBook from '../../FormAddressBook';
import AProfile from '../../../../../assets/vector/Avatar.png';
import { useDispatch } from 'react-redux';
import { updateData } from '../../../../../redux/actions/buatsuratinternalAction';
const SuratInternal_2 = ({ handleNext, handlePrev, templateData }) => {
  const dispatch = useDispatch();
  const kepada = useSelector((state) => state.addressbook.kepada);
  const tembusan = useSelector((state) => state.addressbook.tembusan);
  const [penerima, setPenerima] = useState({
    kepadaIds: [],
    tembusanIds: [],
  });

  const handleSubmit = () => {
    const validKepada = kepada.length > 0; // Misalnya validasi ini
    const validTembusan = tembusan.length > 0; // Misalnya validasi ini

    setFormValidKepada(validKepada);
    setFormValidTembusan(validTembusan);

    if (validKepada && validTembusan) {
      const kepadaIds = kepada.map((item) => item.id);
      const tembusanIds = tembusan.map((item) => item.id);
      const newPenerima = [...kepadaIds, ...tembusanIds];
      setPenerima(newPenerima);

      dispatch(updateData({ penerima: newPenerima }));
      handleNext();
    }
  };

  const [isFormValidKepada, setFormValidKepada] = useState(true);
  const [isFormValidTembusan, setFormValidTembusan] = useState(true);

  const KepadaIsEmpty = () => {
    return (
      !kepada ||
      !Array.isArray(kepada) ||
      kepada.some((item) => !item.jabatan || !item.nama)
    );
  };

  const TembusanIsEmpty = () => {
    return (
      !tembusan ||
      !Array.isArray(tembusan) ||
      tembusan.some((item) => !item.jabatan || !item.nama)
    );
  };

  const handleAddressBookChangeKepada = () => {
    setFormValidKepada(true);
  };
  const handleAddressBookChangeTembusan = () => {
    setFormValidTembusan(true);
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
          onAddressBookChange={handleAddressBookChangeKepada}
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
                  {item.id && (
                    <Stack
                      direction='row'
                      spacing={5}
                      pl='20px'
                      pr='400px'
                      pt='20px'
                    >
                      <Stack>
                        <Avatar
                          sx={{
                            marginBottom: '30px',
                            marginTop: '7px',
                          }}
                          alt='Profile'
                          src={AProfile}
                        />
                      </Stack>
                      <Stack flex={1}>
                        <Typography>{item.jabatan}</Typography>
                        <Typography>{item.nama}</Typography>
                      </Stack>
                      <Stack flex={1}>
                        <Typography color='#8C8F93'>{item.nikg}</Typography>
                      </Stack>
                    </Stack>
                  )}
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
          onAddressBookChange={handleAddressBookChangeTembusan}
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
                  {item.id && (
                    <Stack
                      direction='row'
                      spacing={5}
                      pl='20px'
                      pr='400px'
                      pt='20px'
                    >
                      <Stack>
                        <Avatar
                          sx={{
                            marginBottom: '30px',
                            marginTop: '7px',
                          }}
                          alt='Profile'
                          src={AProfile}
                        />
                      </Stack>
                      <Stack flex={1}>
                        <Typography>{item.jabatan}</Typography>
                        <Typography>{item.nama}</Typography>
                      </Stack>
                      <Stack flex={1}>
                        <Typography color='#8C8F93'>{item.nikg}</Typography>
                      </Stack>
                    </Stack>
                  )}
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
