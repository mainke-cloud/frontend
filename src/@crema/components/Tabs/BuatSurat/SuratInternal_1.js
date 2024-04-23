import {
  Box,
  Button,
  Grid,
  Icon,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { CiFileOn } from 'react-icons/ci';
import PreviewSurat from '@crema/components/PreviewSurat';
import { GrAttachment } from 'react-icons/gr';
import PreviewSuratImage from '../../../../assets/BuatSurat/Preview Surat.png';
import { Navigate, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import KomentarSection from './KomentarSection/KomentarSection';
import AppScrollbar from '@crema/components/AppScrollbar';
import ListKomentar from '../SuratKeluar/ListKomentar';
import ButtonBuatSurat from './ButtonBuatSurat/ButtonBuatSurat';

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
  const [showPreview, setShowPreview] = useState(false);

  const handleShow = () => {
    setShowPreview(!showPreview);
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
          select
          fullWidth
          defaultValue='1'
        >
          {perihal.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Typography
          variant='h4'
          sx={{
            '&::after': {
              content: '"*"',
              color: 'red',
            },
          }}
        >
          Klarifikasi Masalah
        </Typography>

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

        <Typography
          variant='body1'
          sx={{
            color: '#5C5E61',
            // width: '370px',
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

      <img
        src={PreviewSuratImage}
        alt='surat'
        style={{ paddingTop: '20px', maxWidth: '1305px' }}
      />
    </>
  );
};

SuratInternal_1.propTypes = {
  handleNext: PropTypes.func.isRequired,
};

export default SuratInternal_1;
