import React, { useState } from 'react';
import {
  Stack,
  Typography,
  Button,
  ButtonBase,
  Box,
  Link,
} from '@mui/material';
import ButtonBuatSurat from '@crema/components/Tabs/BuatSurat/ButtonBuatSurat/ButtonBuatSurat';
import { styled } from '@mui/material/styles';
import AppScrollbar from '@crema/components/AppScrollbar';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import TabWrapper from '../../../../modules/suratKeluar/TabWrapper';
import { IconButton, TextField } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ComposeMail from '@crema/components/AppAddress';
import { users } from '@crema/services/dummy/user/user';
import { useSelector } from 'react-redux';
const TabContentEditPenerima = () => {
  const [isComposeMail, setComposeMail] = React.useState(false);
  const datas = users;
  const kepada = useSelector((state) => state.addressbook.kepada);
  let datass = kepada[0];
  if (!datass || !Array.isArray(datass)) {
    datass = [];
  }
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
            Kepada
          </Link>

          <Typography variant='h4' color='red'>
            *
          </Typography>
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
          <ButtonBuatSurat pemeriksa />
        </Box>

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

        <Link
          component='button'
          underline='always'
          sx={{
            fontSize: '16px',
            fontWeight: 600,
            color: 'black',
            textDecorationColor: 'black',
            textAlign: 'start',
          }}
          onClick={() => onOpenComposeMail()}
        >
          Tembusan
        </Link>

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
          ></AppScrollbar>
          <ButtonBuatSurat pemeriksa />
        </Box>

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
          ></AppScrollbar>
        </Box>
      </Stack>
      <ComposeMail
        isComposeMail={isComposeMail}
        onCloseComposeMail={onCloseComposeMail}
        datas={datas}
      />
    </>
  );
};

export default TabContentEditPenerima;
