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
      {/* <Stack>
        <Judul>Jabatan</Judul>
        <TextField
          sx={{ marginTop: '8px', width: '98%' }}
          placeholder={'Kepala Research and Development'}
          variant='outlined'
          value={formData.jabatan}
          onChange={handleChange}
          name='jabatan'
        />
      </Stack>
      <Stack>
        <Judul>Nama</Judul>
        <TextField
          sx={{ marginTop: '8px', width: '98%' }}
          placeholder={'Taufik Sulaeman'}
          name='nama'
          variant='outlined'
          value={formData.nama}
          onChange={handleChange}
        />
      </Stack>
      <Stack>
        <Judul>Divisi</Judul>
        <TextField
          sx={{ marginTop: '8px', width: '98%' }}
          placeholder={'Divisi Informasi'}
          name='divisi'
          variant='outlined'
          value={formData.divisi}
          onChange={handleChange}
        />
      </Stack>
      <Stack direction={'row'} gap={6} sx={{ width: '98%' }}>
        <Stack width={'50%'}>
          <Judul>NIK</Judul>
          <TextField
            sx={{ marginTop: '8px' }}
            placeholder={'8900002'}
            name='nik'
            variant='outlined'
            value={formData.nik}
            onChange={handleChange}
          />
        </Stack>
        <Stack width={'50%'}>
          <Judul>Kode Departemen</Judul>
          <TextField
            sx={{ marginTop: '8px' }}
            placeholder={'DIT-11 B 10000'}
            name='kodeDepartemen'
            variant='outlined'
            value={formData.kodeDepartemen}
            onChange={handleChange}
          />
        </Stack>
      </Stack>
      <Stack>
        <Judul>Departemen</Judul>
        <TextField
          sx={{ marginTop: '8px', width: '98%' }}
          placeholder={'Decision Support'}
          name='departemen'
          variant='outlined'
          value={formData.departemen}
          onChange={handleChange}
        />
      </Stack>
      <Stack>
        <Judul>Kantor Kota</Judul>
        <TextField
          sx={{ marginTop: '8px', width: '98%' }}
          placeholder={'Bandung'}
          name='kantorKota'
          variant='outlined'
          value={formData.kantorKota}
          onChange={handleChange}
        />
      </Stack> */}
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
