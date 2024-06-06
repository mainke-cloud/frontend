import React from 'react';
import { Modal, Stack, Typography } from '@mui/material';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { Title } from '@mui/icons-material';

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
  height: '30vh',
};

const ModalConfirmation3 = ({
  handleCloseModal,
  openModal,
  handleNextModal,
}) => {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Stack sx={style} spacing={5}>
          <Typography variant='h1'>Informasi</Typography>
          <Typography variant='h3' align='center'>
            Mohon Mengisi Kolom Komentar
          </Typography>

          <Stack direction='row' spacing={5}>
            <Button
              variant='contained'
              onClick={handleNextModal}
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
    </div>
  );
};

ModalConfirmation3.propTypes = {
  handleNextModal: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ModalConfirmation3;
