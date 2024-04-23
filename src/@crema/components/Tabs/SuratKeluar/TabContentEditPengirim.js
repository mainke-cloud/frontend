import React, { useState } from 'react';
import {
  Stack,
  Typography,
  TextField,
  IconButton,
  Button,
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
        <Stack
          direction='row'
          spacing={1}
          onClick={onOpenComposeMail}
          sx={{ cursor: 'pointer' }}
        >
          <Typography variant='h4' sx={{ textDecoration: 'underline' }}>
            Jabatan
          </Typography>
          <Typography variant='h4' color='red'>
            *
          </Typography>
        </Stack>

        <TextField
          fullWidth
          defaultValue='Kepala Research and Development'
          InputProps={{
            endAdornment: (
              <IconButton>
                <AddCircleOutlineRoundedIcon
                  sx={{ color: 'black' }}
                  onClick={onOpenComposeMail}
                />
              </IconButton>
            ),
          }}
        />

        <Stack
          direction='row'
          spacing={1}
          onClick={onOpenComposeMail}
          sx={{ cursor: 'pointer' }}
        >
          <Typography variant='h4' sx={{ textDecoration: 'underline' }}>
            Nama
          </Typography>
          <Typography variant='h4' color='red'>
            *
          </Typography>
        </Stack>

        <TextField
          fullWidth
          defaultValue='Taufik Sulaeman'
          InputProps={{
            endAdornment: (
              <IconButton>
                <AddCircleOutlineRoundedIcon
                  sx={{ color: 'black' }}
                  onClick={onOpenComposeMail}
                />
              </IconButton>
            ),
          }}
        />

        <Typography variant='h4'>Divisi</Typography>

        <TextField
          fullWidth
          defaultValue='Divisi Informasi'
          InputProps={{
            endAdornment: (
              <IconButton>
                <AddCircleOutlineRoundedIcon sx={{ color: 'black' }} />
              </IconButton>
            ),
          }}
        />

        <Stack direction='row' spacing={5}>
          <Stack flex={1} spacing={5}>
            <Typography variant='h4'>NIK</Typography>
            <TextField defaultValue='8900002' />
          </Stack>
          <Stack flex={1} spacing={5}>
            <Typography variant='h4'>Kode Departemen</Typography>
            <TextField defaultValue='DIT-11 B 10000' />
          </Stack>
        </Stack>

        <Typography variant='h4'>Departemen</Typography>

        <TextField
          fullWidth
          defaultValue='Decision Support'
          InputProps={{
            endAdornment: (
              <IconButton>
                <AddCircleOutlineRoundedIcon
                  sx={{ color: 'black' }}
                  onClick={onOpenComposeMail}
                />
              </IconButton>
            ),
          }}
        />

        <Typography variant='h4'>Kota Kantor</Typography>

        <TextField
          fullWidth
          defaultValue='Bandung'
          InputProps={{
            endAdornment: (
              <IconButton>
                <AddCircleOutlineRoundedIcon
                  sx={{ color: 'black' }}
                  onClick={onOpenComposeMail}
                />
              </IconButton>
            ),
          }}
        />
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
