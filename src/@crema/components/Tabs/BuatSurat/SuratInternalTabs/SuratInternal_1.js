import React from 'react';
import { Button, MenuItem, Stack, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import FormAddressBook from '../../FormAddressBook';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

const perihal = [
  {
    value: '1',
    label: '',
  },
  {
    value: '2',
    label: '',
  },
  {
    value: '3',
    label: '',
  },
  {
    value: '4',
    label: '',
  },
];

const prioritas = [
  {
    value: '1',
    label: 'Normal',
  },
  {
    value: '2',
    label: 'Segera',
  },
];

const jenisSurat = [
  {
    value: '1',
    label: 'Biasa',
  },
  {
    value: '2',
    label: 'Rhs',
  },
  {
    value: '3',
    label: 'Rhs-Prib',
  },
];

const SuratInternal_1 = ({ handleNext }) => {
  const klasifikasi = useSelector((state) => state.addressbook.klasifikasi);

  let datass = klasifikasi[0];
  if (!datass || !Array.isArray(datass)) {
    datass = [];
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
        <Typography
          variant='h4'
          sx={{
            '&::after': {
              content: '"*"',
              color: 'red',
            },
          }}
        >
          Perihal
        </Typography>

        <TextField
          id='outlined-select-currency'
          select
          fullWidth
          onChange={handleForm}
          name='perihal'
          error={formik.errors.perihal}
        >
          {perihal.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <FormAddressBook text='Klasifikasi Masalah' data={datass} />
        <Typography
          variant='body1'
          sx={{
            color: '#5C5E61',
          }}
        >
          Saat klasifikasi masalah dipilih, menampilkan nama klasifikasi masalah
        </Typography>
        <Typography variant='h4'>Prioritas Surat</Typography>
        <TextField
          id='outlined-select-currency'
          select
          fullWidth
          defaultValue='1'
          onChange={handleForm}
          name='prioritas'
          {...formik.getFieldProps('prioritas')}
        >
          {prioritas.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Typography variant='h4'>Jenis Surat</Typography>
        <TextField
          id='outlined-select-currency'
          select
          fullWidth
          defaultValue='1'
          onChange={handleForm}
          name='jenis'
          {...formik.getFieldProps('jenis')}
        >
          {jenisSurat.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Typography variant='h4'>Lampiran</Typography>
        <TextField
          sx={{ marginTop: '8px' }}
          placeholder={'Masukkan jumlah'}
          variant='outlined'
          fullWidth
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Stack direction='row' justifyContent='flex-end' spacing={4}>
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
      </Stack>
    </>
  );
};

SuratInternal_1.propTypes = {
  handleNext: PropTypes.func.isRequired,
};

export default SuratInternal_1;
