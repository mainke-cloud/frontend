import React from 'react';
import { Modal, Stack, TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import DropZoneFile from '../DropZoneFile';
import PropTypes from 'prop-types';
import SuratDelegasi_3 from './Suratdelegasi_3';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '34vw',
  bgcolor: 'background.paper',
  p: '20px',
  borderRadius: '8px',
  justifyContent: 'center',
  alignItems: 'center',
};

const SuratDelegasi_4 = ({ handleNext, handlePrev }) => {
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

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Stack sx={style} spacing={5}>
              <Typography variant='h1'>Konfirmasi</Typography>
              <Typography variant='h3'>
                Apakah Anda Yakin Dengan Data Yang Diisi?
              </Typography>

              <Stack direction='row' spacing={5}>
                <Button
                  variant='contained'
                  sx={{
                    borderRadius: '25px',
                    bgcolor: '#5C5E61',
                    minHeight: '32px',
                    minWidth: '100px',
                    '&:hover': {
                      bgcolor: '#5C5E61',
                    },
                  }}
                  onClick={handleClose}
                >
                  Tidak
                </Button>

                <Button
                  variant='contained'
                  // onClick={handleSubmit}
                  sx={{
                    bgcolor: '#52BD94',
                    borderRadius: '25px',
                    minHeight: '32px',
                    minWidth: '100px',
                    '&:hover': {
                      bgcolor: '#52BD94',
                    },
                  }}
                >
                  Ya
                </Button>
              </Stack>
            </Stack>
          </Modal>
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
