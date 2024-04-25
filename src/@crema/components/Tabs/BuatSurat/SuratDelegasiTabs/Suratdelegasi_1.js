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
import { GrAttachment } from 'react-icons/gr';
import { Navigate, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import LabelInput from '@crema/components/LabelInput';

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

const SuratDelegasi_1 = ({ handleNext }) => {
  const [isComposeMail, setComposeMail] = React.useState(false);
  const [formData, setFormData] = useState({
    tanggalSurat: null,
  });

  const onOpenComposeMail = () => {
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setComposeMail(false);
  };

  const handleTanggal = (date) => {
    setFormData({
      ...formData,
      tanggalSurat: date,
    });
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
          defaultValue='1'
        ></TextField>

        <Stack direction='row' spacing={5}>
          <Stack flex={1} spacing={5}>
            <Typography variant='h4'>Tanggal Mulai</Typography>
            <LabelInput
              type='tanggal'
              name='tanggalSurat'
              value={formData.tanggalSurat}
              onChange={handleTanggal}
            />
          </Stack>
          <Stack flex={1} spacing={5}>
            <Typography variant='h4'>Tanggal Selesai</Typography>
            <LabelInput
              type='tanggal'
              name='tanggalSurat'
              value={formData.tanggalSurat}
              onChange={handleTanggal}
            />
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
            onClick={handleNext}
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
