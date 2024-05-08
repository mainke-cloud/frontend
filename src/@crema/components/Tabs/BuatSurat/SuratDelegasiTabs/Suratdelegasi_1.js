import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextFieldDate from '../TextFieldDate/TextFieldDate';
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

const SuratDelegasi_1 = ({ handleNext }) => {
  const formik = useFormik({
    initialValues: {
      perihal: '',
    },
    onSubmit: handleNext,
    validationSchema: yup.object().shape({
      perihal: yup.string().required('Kolom ini wajib diisi'),
    }),
  });

  const handleForm = (e) => {
    const { target } = e;
    formik.setFieldValue(target.name, target.value);
    console.log(formik.values);
  };

  return (
    <Box>
      <Stack
        spacing={4}
        sx={{
          border: '1px solid #D8D8D8',
          minHeight: '420px',
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

        <Stack direction='row' spacing={5}>
          <Stack flex={1} spacing={5}>
            <Typography variant='h4'>Tanggal Mulai</Typography>
            <TextFieldDate />
          </Stack>
          <Stack flex={1} spacing={5}>
            <Typography variant='h4'>Tanggal Selesai</Typography>
            <TextFieldDate />
          </Stack>
        </Stack>
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
            onClick={formik.handleSubmit}
          >
            Selanjutnya (Pengirim)
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

SuratDelegasi_1.propTypes = {
  handleNext: PropTypes.func.isRequired,
};

export default SuratDelegasi_1;
