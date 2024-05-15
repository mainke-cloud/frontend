import React from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import DropZoneFile from '../../DropZoneFile';
import PropTypes from 'prop-types';
import ModalConfirmation from '../ModalConfirmation/ModalConfirmation';

const SuratDelegasi_4 = ({ handlePrev, handleNext }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Stack
        spacing={4}
        sx={{
          border: '1px solid #D8D8D8',
          minHeight: '300px',
          borderRadius: '12px',
          padding: '15px',
        }}
      >
        <Typography variant='h4'>Penerima Delegasi</Typography>

        <DropZoneFile />

        <Stack spacing={2}>
          <Typography variant='h5'>Perhatian :</Typography>
          <Typography variant='body1' color='#5C5E61'>
            Total Ukuran Surat & Lampiran yang dapat diproses maksimal 25 MB.
          </Typography>
        </Stack>

        <Typography variant='h4'>Referensi</Typography>

        <TextField
          id='outlined-multiline-static'
          fullWidth
          multiline
          rows={4}
        />

        <Stack direction='row' justifyContent='flex-end' spacing={4}>
          <Button
            variant='contained'
            sx={{
              borderRadius: '12px',
              bgcolor: '#D9DDE3',
              color: '#5C5E61',
              minWidth: '84px',
            }}
            onClick={handlePrev}
          >
            Kembali
          </Button>

          <Button
            variant='contained'
            sx={{
              borderRadius: '12px',
              bgcolor: '#E42313',
              minWidth: '66px',
              minHeight: '50px',
            }}
            onClick={handleOpen}
          >
            Selesai
          </Button>

          <ModalConfirmation
            handleClose={handleClose}
            handleNext={handleNext}
            open={open}
          />
        </Stack>
      </Stack>
    </>
  );
};

SuratDelegasi_4.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};

export default SuratDelegasi_4;
