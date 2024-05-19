import React, { useEffect, useState } from 'react';
import {
  Stack,
  Typography,
  TextField,
  IconButton,
  Button,
  Link,
  Box,
} from '@mui/material';
import PdfCardEdit from '@crema/components/Tabs/SuratKeluar/PdfCardEdit';
import { useSelector } from 'react-redux';
import AppScrollbar from '@crema/components/AppScrollbar';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ComposeMail from '@crema/components/AppAddress';
import { users } from '../../../services/dummy/user/user';

const TabContentEditPengirim = () => {
  const jabatann = useSelector((state) => state.addressbook.jabatann);
  let datass = jabatann[0];
  if (!datass || !Array.isArray(datass)) {
    datass = [];
  }
  const namaa = useSelector((state) => state.addressbook.namaa);
  const initialState = useSelector((state) => state.surat);
  const [formData, setFormData] = useState(initialState);
  // const [jabatanValue, setJabatanValue] = useState(datass[0]?.jabatan ?? '');
  const [jabatanValue, setJabatanValue] = useState('');
  const [namaValue, setNamaValue] = useState('');

  useEffect(() => {
    setJabatanValue(datass[0]?.jabatan ?? '');
    setNamaValue(datass.map((item) => item.nama).join('\n'));
  }, [datass]);

  const handleJabatanChange = (event) => {
    setJabatanValue(event.target.value);
  };

  const [isComposeMail, setComposeMail] = React.useState(false);
  const [composeMailTitle, setComposeMailTitle] = useState('');

  const onOpenComposeMail = (title) => {
    setComposeMailTitle(title);
    setJabatanValue('');
    setNamaValue('');
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setJabatanValue(datass[0]?.jabatan ?? '');
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
            onClick={() => onOpenComposeMail('Jabatan')}
          >
            Jabatan
          </Link>
          <Typography variant='h4' color='red'>
            *
          </Typography>
        </Stack>

        <TextField
          fullWidth
          value={jabatanValue}
          onChange={handleJabatanChange}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => onOpenComposeMail('Jabatan')}>
                <AddCircleOutlineRoundedIcon
                  sx={{ color: 'black', fontSize: '40px' }}
                />
              </IconButton>
            ),
          }}
          sx={{ color: 'black', fontWeight: 'bold' }}
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
            onClick={() => onOpenComposeMail('Nama')}
          >
            Nama
          </Link>
          <Typography variant='h4' color='red'>
            *
          </Typography>
        </Stack>

        <Box position={'relative'}>
          <AppScrollbar
            sx={{
              minHeight: '145px',
              maxHeight: '145px',
              overflow: 'auto',
            }}
          >
            <Stack>
              <TextField
                id='outlined-multiline-static'
                multiline
                rows={5}
                sx={{
                  border: 'none',
                }}
                // defaultValue={
                //   composeMailTitle === 'Nama'
                //     ? `${namaa.nama}`
                //     : datass.map((item) => item.nama).join('\n')
                // }
                value={
                  composeMailTitle === 'Nama' ? `${namaa.nama}` : namaValue
                }
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={() => onOpenComposeMail('Nama')}>
                      <AddCircleOutlineRoundedIcon
                        sx={{ color: 'black', fontSize: '40px' }}
                      />
                    </IconButton>
                  ),
                }}
              />
            </Stack>
          </AppScrollbar>
        </Box>

        <TextField
          fullWidth
          value={
            composeMailTitle === 'Nama'
              ? `${namaa.nama}`
              : datass[0]?.nama ?? ''
          }
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => onOpenComposeMail('Nama')}>
                <AddCircleOutlineRoundedIcon
                  sx={{ color: 'black', fontSize: '40px' }}
                />
              </IconButton>
            ),
          }}
        />

        <Typography variant='h4'>Divisi</Typography>

        <TextField
          fullWidth
          value={
            composeMailTitle === 'Nama'
              ? `${namaa.divisi}`
              : datass[0]?.divisi ?? ''
          }
        />

        <Stack direction='row' spacing={5}>
          <Stack flex={1} spacing={5}>
            <Typography variant='h4'>NIK</Typography>
            <TextField
              value={
                composeMailTitle === 'Nama'
                  ? `${namaa.nikl}`
                  : datass[0]?.nikl ?? ''
              }
            />
          </Stack>
          <Stack flex={1} spacing={5}>
            <Typography variant='h4'>Kode Departemen</Typography>
            <TextField
              value={
                composeMailTitle === 'Nama'
                  ? `${namaa.kode_departemen}`
                  : datass[0]?.kode_departemen ?? ''
              }
            />
          </Stack>
        </Stack>

        <Typography variant='h4'>Departemen</Typography>

        <TextField
          fullWidth
          value={
            composeMailTitle === 'Nama'
              ? `${namaa.departemen}`
              : datass[0]?.departemen ?? ''
          }
        />

        <Typography variant='h4'>Kota Kantor</Typography>

        <TextField
          fullWidth
          value={
            composeMailTitle === 'Nama'
              ? `${namaa.kota}`
              : datass[0]?.kota ?? ''
          }
        />
      </Stack>
      <ComposeMail
        isComposeMail={isComposeMail}
        onCloseComposeMail={onCloseComposeMail}
        datas={users}
        title={composeMailTitle}
        type='single'
      />
    </>
  );
};

export default TabContentEditPengirim;
