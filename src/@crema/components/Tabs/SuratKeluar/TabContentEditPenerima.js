import { Avatar, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import AppScrollbar from '@crema/components/AppScrollbar';
import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import FormAddressBook from '../FormAddressBook';
import AProfile from 'assets/vector/Avatar.png';
import { useDispatch } from 'react-redux';

const TabContentEditPenerima = () => {
  const dispatch = useDispatch();
  const kepada = useSelector((state) => state.addressbook.kepada);
  const tembusan = useSelector((state) => state.addressbook.tembusan);
  const [penerima, setPenerima] = useState({
    kepadaIds: [],
    tembusanIds: [],
  });

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
          templateData={kepada}
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
            {/* {templateData ? (
              <Typography>{templateData.kepada}</Typography>
            ) : ( */}
            {kepada?.map((item) => (
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
            ))}
            {/* )} */}
          </AppScrollbar>
        </Box>

        <FormAddressBook
          text='Tembusan'
          data={tembusan}
          templateData={tembusan}
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
            {/* {templateData ? (
              <Typography>{templateData.tembusan}</Typography>
            ) : ( */}
            {tembusan?.map((item) => (
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
            ))}
            {/* )} */}
          </AppScrollbar>
        </Box>
      </Stack>
    </>
  );
};

export default TabContentEditPenerima;
