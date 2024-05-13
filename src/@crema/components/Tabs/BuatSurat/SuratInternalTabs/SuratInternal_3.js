import { IconButton, Link, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { Button } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import PropTypes from 'prop-types';
import ComposeMail from '@crema/components/AppAddress';
import { users } from '../../../../services/dummy/user/user';
import { useSelector } from 'react-redux';
const SuratInternal_3 = ({ handleNext, handlePrev, templateData }) => {
  const [isComposeMail, setComposeMail] = React.useState(false);
  const pengirim = useSelector((state) => state.addressbook.pengirim);

  const onOpenComposeMail = () => {
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setComposeMail(false);
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
        <Stack direction='row'>
          <Link
            component='button'
            underline='always'
            sx={{
              fontSize: '16px',
              fontWeight: 600,
              color: 'black',
              textDecorationColor: 'black',
            }}
            onClick={() => onOpenComposeMail()}
          >
            Jabatan
          </Link>
          <Typography variant='h4' color='red'>
            *
          </Typography>
        </Stack>

        <TextField
          fullWidth
          value={
            templateData ? templateData.dari : `${pengirim.jabatan}`
          }          
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => onOpenComposeMail()}>
                <AddCircleOutlineRoundedIcon
                  sx={{ color: 'black', fontSize: '40px' }}
                />
              </IconButton>
            ),
          }}
        />

        <Stack direction='row'>
          <Link
            component='button'
            underline='always'
            sx={{
              fontSize: '16px',
              fontWeight: 600,
              color: 'black',
              textDecorationColor: 'black',
            }}
            onClick={() => onOpenComposeMail()}
          >
            Nama
          </Link>
          <Typography variant='h4' color='red'>
            *
          </Typography>
        </Stack>

        <TextField
          fullWidth
          value={ templateData ? templateData.nama : `${pengirim.nama}`}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => onOpenComposeMail()}>
                <AddCircleOutlineRoundedIcon
                  sx={{ color: 'black', fontSize: '40px' }}
                />
              </IconButton>
            ),
          }}
        />

        <Typography variant='h4'>Divisi</Typography>

        <TextField fullWidth value={templateData ? templateData.primary :`${pengirim.divisi}`} />

        <Stack direction='row' spacing={5}>
          <Stack flex={1} spacing={5}>
            <Typography variant='h4'>NIK</Typography>
            <TextField value={templateData ? templateData.nik :`${pengirim.nikl}`} />
          </Stack>
          <Stack flex={1} spacing={5}>
            <Typography variant='h4'>Kode Departemen</Typography>
            <TextField value={templateData ? templateData.kodeDepart :`${pengirim.kode_departemen}`} />
          </Stack>
        </Stack>

        <Typography variant='h4'>Departemen</Typography>

        <TextField fullWidth value={templateData ? templateData.departemen :`${pengirim.departemen}`} />

        <Typography variant='h4'>Kota Kantor</Typography>

        <TextField fullWidth value={templateData ? templateData.kotaKantor :`${pengirim.kota}`} />

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
              minWidth: '220px',
              minHeight: '50px',
            }}
            onClick={handleNext}
          >
            Selanjutnya (Penerima)
          </Button>
        </Stack>
      </Stack>

      <ComposeMail
        isComposeMail={isComposeMail}
        onCloseComposeMail={onCloseComposeMail}
        datas={users}
        title='Pengirim'
        type='single'
      />
    </>
  );
};

SuratInternal_3.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  templateData: PropTypes.object,
};

export default SuratInternal_3;