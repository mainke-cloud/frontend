import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import AppScrollbar from '@crema/components/AppScrollbar';
import ButtonBuatSurat from './ButtonBuatSurat/ButtonBuatSurat';
import { useSelector } from 'react-redux';
import FormAddressBook from '../FormAddressBook';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInfo } from '../../../../redux/actions/suratAction';
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

const SuratInternal_1 = ({ handleNext, onStateChange }) => {
  const dispatch = useDispatch();
  const kepada = useSelector((state) => state.addressbook.kepada);
  const [formData, setFormData] = useState({
    perihal: '',
    klasifikasi: '',
    prioritas: '1',
    jenis: '1',
    lampiran: 1,
  });

  let datass = kepada[0];
  if (!datass || !Array.isArray(datass)) {
    datass = [];
  }

  const handleTampilkanData = () => {
    console.log(formData);
    dispatch(addInfo(formData));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    onStateChange({ ...formData, [name]: value });
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
          fullWidth
          name='perihal'
          value={formData.perihal}
          onChange={handleChange}
        />

        {/* <FormAddressBook text='Klasifikasi Masalah' data={datass} /> */}

        <Typography variant='h4'>Prioritas Surat</Typography>
        <TextField
          id='outlined-select-currency'
          select
          fullWidth
          defaultValue='1'
          name='prioritas'
          value={formData.prioritas}
          onChange={handleChange}
        >
          {prioritas.map((option) => (
            <MenuItem key={option.value} value={option.label}>
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
          name='jenis'
          value={formData.jenis}
          onChange={handleChange}
        >
          {jenisSurat.map((option) => (
            <MenuItem key={option.value} value={option.label}>
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
          name='lampiran'
          value={formData.lampiran}
          onChange={handleChange}
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
  onStateChange: PropTypes.func,
};

export default SuratInternal_1;
