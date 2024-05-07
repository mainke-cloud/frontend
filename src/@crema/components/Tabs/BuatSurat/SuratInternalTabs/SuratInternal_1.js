import React from 'react';
import { Button, MenuItem, Stack, TextField, Typography } from '@mui/material';
import PropTypes, { string } from 'prop-types';
import FormAddressBook from '../../FormAddressBook';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

const perihal = [
  {
    value: 'Pilihan 1',
    label: 'Pilihan 1',
  },
  {
    value: 'Pilihan 2',
    label: 'Pilihan 2',
  },
  {
    value: 'Pilihan 3',
    label: 'Pilihan 3',
  },
];

const prioritas = [
  {
    value: 'Normal',
    label: 'Normal',
  },
  {
    value: 'Segera',
    label: 'Segera',
  },
];

const jenisSurat = [
  {
    value: 'Biasa',
    label: 'Biasa',
  },
  {
    value: 'Rhs',
    label: 'Rhs',
  },
  {
    value: 'Rhs-Prib',
    label: 'Rhs-Prib',
  },
];

const SuratInternal_1 = ({ handleNext }) => {
  const formik = useFormik({
    initialValues: {
      perihal: '',
      // klasifikasi: '',
      prioritas: 'Normal',
      jenis: 'Biasa',
      lampiran: '',
    },
    onSubmit: handleNext,
    validationSchema: yup.object().shape({
      perihal: yup.string().required('Kolom ini wajib diisi'),
      // klasifikasi: yup.string().required(),
      // prioritas: yup.string().required('Kolom ini wajib diisi'),
      // jenis: yup.string().required('Kolom ini wajib diisi'),
      // lampiran: yup.number().required('Kolom ini wajib diisi'),
    }),
  });

  const handleForm = (e) => {
    const { target } = e;
    formik.setFieldValue(target.name, target.value);
    console.log(formik.values);
  };

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
        {formik.touched.perihal && formik.errors.perihal && (
          <Typography variant='body1' color='error'>
            {formik.errors.perihal}
          </Typography>
        )}

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
          onChange={handleForm}
          name='lampiran'
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
            onClick={formik.handleSubmit}
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
