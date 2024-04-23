import { Link, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import AppScrollbar from '../../AppScrollbar';
import { Box, Button, Grid, Icon } from '@mui/material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { CiFileOn } from 'react-icons/ci';
import PreviewSurat from '@crema/components/PreviewSurat';
import { GrAttachment } from 'react-icons/gr';
import PreviewSuratImage from '../../../../assets/BuatSurat/Preview Surat.png';
import Divider from '@mui/material/Divider';
import StepImage from '../../../../assets/BuatSurat/Prgoress bar buat surat 2.png';
import PPImage from '../../../../assets/BuatSurat/PP.png';
import ButtonBuatSurat from '@crema/components/Tabs/BuatSurat/ButtonBuatSurat/ButtonBuatSurat';
import PropTypes from 'prop-types';
import KomentarSection from './KomentarSection/KomentarSection';
import ComposeMail from '@crema/components/AppAddress';
import ListKomentar from '../SuratKeluar/ListKomentar';

const SuratInternal_2 = ({ handleNext, handlePrev }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [isComposeMail, setComposeMail] = React.useState(false);

  const handleShow = () => {
    setShowPreview(!showPreview);
  };

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
            Kepada
          </Link>

          <Typography variant='h4' color='red'>
            *
          </Typography>
        </Stack>

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

        <Stack direction='row' spacing={4} alignItems={'center'}>
          <Typography>Tampilkan Kepada</Typography>
          <Button
            variant='contained'
            sx={{
              bgcolor: '#229BD8',
              padding: '5px',
              borderRadius: '5px',
              color: 'white',
            }}
          >
            Update
          </Button>
        </Stack>

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
        </Box>

        <Link
          component='button'
          underline='always'
          sx={{
            fontSize: '16px',
            fontWeight: 600,
            color: 'black',
            textDecorationColor: 'black',
            textAlign: 'start',
          }}
          onClick={() => onOpenComposeMail()}
        >
          Tembusan
        </Link>

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

        <Stack direction='row' spacing={4} alignItems={'center'}>
          <Typography>Tampilkan Kepada</Typography>
          <Button
            variant='contained'
            sx={{
              bgcolor: '#229BD8',
              padding: '5px',
              borderRadius: '5px',
              color: 'white',
            }}
          >
            Update
          </Button>
        </Stack>

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
        </Box>

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
      />
    </>
  );
};

SuratInternal_2.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};

export default SuratInternal_2;
