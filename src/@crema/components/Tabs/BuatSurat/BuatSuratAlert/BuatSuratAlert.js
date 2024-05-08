import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { Alert, IconButton, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

export default function PositionedSnackbar() {
  const [state, setState] = React.useState({
    open: true,
    vertical: 'top',
    horizontal: 'right',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        key={vertical + horizontal}
      >
        <Alert
          elevation={10}
          icon={<CheckCircleOutlineIcon fontSize='large' />}
          action={
            <IconButton aria-label='close' size='large' onClick={handleClose}>
              <CloseIcon fontSize='large' />
            </IconButton>
          }
          sx={{
            height: '95px',
            borderRadius: '20px',
            alignItems: 'center',
          }}
        >
          <Typography variant='h1'>Berhasil</Typography>
          <Typography variant='body1'>
            Surat berhasil disubmit kepada pemeriksa 1 Adhi Prasetio/740049
          </Typography>
        </Alert>
      </Snackbar>
    </div>
  );
}
