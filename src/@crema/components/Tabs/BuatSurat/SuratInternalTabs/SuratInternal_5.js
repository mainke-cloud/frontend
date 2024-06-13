import React, { useContext } from 'react';
import { Stack, TextField, Typography, Button } from '@mui/material';
import DropZoneFile from '../../DropZoneFile';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import ModalConfirmation from '../ModalConfirmation/ModalConfirmation';
import { AuthContext } from '@crema/context/AuthContext';
import { updateData } from '../../../../../redux/actions/buatsuratinternalAction';


const SuratInternal_5 = ({ handlePrev, handleNext, text }) => {
  const [open, setOpen] = React.useState(false);
  const info = useSelector((state) => state.surat);
  const penerima = useSelector((state) => [
    ...state.addressbook.kepada,
    ...state.addressbook.tembusan,
  ]);
  const pengirim = useSelector((state) => state.addressbook.pengirim);
  const pemeriksa = useSelector((state) => [
    state.addressbook.pemeriksa,
    state.addressbook.pemohon,
  ]);
  const { user } = useContext(AuthContext);
  const pembuat = user[0].user_id;
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    const randomChar = () => Math.random().toString(36).substring(2, 8).toUpperCase();
    const now = new Date().toISOString();

    dispatch(
      updateData({
        pembuat: pembuat,
        no_agenda: randomChar(),
        no_surat: randomChar(),
        status: 'sedang dikirim',
        tanggal_pengiriman: now,
        file_surat: '-',
      })
    );
    handleNext();
  };

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
            {text}
          </Button>

          <ModalConfirmation
            open={open}
            handleClose={handleClose}
            handleNext={handleConfirm}
          />
        </Stack>
      </Stack>
    </>
  );
};

SuratInternal_5.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default SuratInternal_5;
