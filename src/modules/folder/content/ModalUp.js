import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Modal,
  Button,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { Fonts } from '@crema/constants/AppEnums';
import { X } from 'feather-icons-react';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50vw',
  bgcolor: 'background.paper',
  borderRadius: '8px',
  justifyContent: 'center',
  alignItems: 'center',
};

const ModalUp = (props) => {
  const { title, openState, handleClose, handleOpen } = props;

  return (
    <>
      <Modal
        open={openState}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Box
            p='5px'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            sx={{
              bgcolor: '#383838',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
            }}
          >
            <Box pl='20px'>
              <Typography
                fontSize='16px'
                sx={{ color: 'white', fontWeight: Fonts.BOLD }}
              >
                {title}
              </Typography>
            </Box>
            <IconButton pr='16px' onClick={handleClose}>
              <X style={{ width: '24px', height: '24px' }} />
            </IconButton>
          </Box>
          <Box alignItems='center'>
            <Box p='24px'>
              <Box>
                <Typography
                  pt='20px'
                  fontSize='18px'
                  sx={{ fontWeight: Fonts.BOLD }}
                >
                  Nama Folder
                </Typography>
                <Box pt='10px'>
                  <TextField sx={{ width: 710 }} />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box pt='20px'>
            <Divider />
          </Box>
          <Stack direction='row' justifyContent='space-between' p='10px'>
            <Box></Box>
            <Box display='flex'>
              <Box pr='10px'>
                <Button
                  variant='contained'
                  sx={{
                    borderRadius: '10px',
                    bgcolor: '#429777',
                    minWidth: '55px',
                    minHeight: '31px',
                  }}
                  onClick={handleOpen}
                >
                  Oke
                </Button>
              </Box>
              <Box>
                <Button
                  variant='contained'
                  sx={{
                    borderRadius: '10px',
                    bgcolor: '#BF2600',
                    minWidth: '55px',
                    minHeight: '31px',
                  }}
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default ModalUp;

ModalUp.propTypes = {
  title: PropTypes.string,
  openState: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
};
