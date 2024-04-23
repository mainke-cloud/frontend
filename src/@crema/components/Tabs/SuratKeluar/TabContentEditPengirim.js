import React, { useState } from 'react';
import {
  Stack,
  Typography,
  TextField,
  IconButton,
  Button,
  Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PdfCardEdit from '@crema/components/Tabs/SuratKeluar/PdfCardEdit';
import { useSelector } from 'react-redux';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ComposeMail from '@crema/components/AppAddress';

const TabContentEditPengirim = () => {
  const initialState = useSelector((state) => state.surat);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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
      </Stack>
      <br />
      <br />
      <PdfCardEdit
        jabatan={formData.jabatan}
        nama={formData.nama}
        divisi={formData.divisi}
        nik={formData.nik}
        kodeDepartemen={formData.kodeDepartemen}
        departemen={formData.departemen}
        kantorKota={formData.kantorKota}
      />
      <ComposeMail
        isComposeMail={isComposeMail}
        onCloseComposeMail={onCloseComposeMail}
      />
    </>
  );
};

export default TabContentEditPengirim;
