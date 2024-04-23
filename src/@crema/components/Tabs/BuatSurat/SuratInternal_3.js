import { IconButton, Link, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Box, Button, Grid, Icon } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { CiFileOn } from 'react-icons/ci';
import PreviewSurat from '@crema/components/PreviewSurat';
import { GrAttachment } from 'react-icons/gr';
import PreviewSuratImage from '../../../../assets/BuatSurat/Preview Surat.png';
import StepImage from '../../../../assets/BuatSurat/Prgoress bar buat surat 3.png';
import PropTypes from 'prop-types';
import KomentarSection from './KomentarSection/KomentarSection';
import ComposeMail from '@crema/components/AppAddress';

const SuratInternal_3 = ({ handleNext, handlePrev }) => {
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
    <Box
      sx={{
        margin: '26px',
        bgcolor: '#FFFFFF',
        borderRadius: '12px',
        boxShadow: '0px 1px 4px 1px #42424233',
        padding: '20px',
      }}
    >
      <img
        src={StepImage}
        alt='gambar step'
        style={{
          maxHeight: '120px',
        }}
      />

      <Grid container spacing={5}>
        <Grid item xs={8}>
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
              disabled
              fullWidth
              defaultValue='Kepala Research and Development'
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
              disabled
              fullWidth
              defaultValue='Taufik Sulaeman'
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <AddCircleOutlineRoundedIcon
                      sx={{ color: 'black', fontSize: '40px' }}
                    />
                  </IconButton>
                ),
              }}
            />

            <Typography variant='h4'>Divisi</Typography>

            <TextField disabled fullWidth defaultValue='Divisi Informasi' />

            <Stack direction='row' spacing={5}>
              <Stack flex={1} spacing={5}>
                <Typography variant='h4'>NIK</Typography>
                <TextField disabled defaultValue='8900002' />
              </Stack>
              <Stack flex={1} spacing={5}>
                <Typography variant='h4'>Kode Departemen</Typography>
                <TextField disabled defaultValue='DIT-11 B 10000' />
              </Stack>
            </Stack>

            <Typography variant='h4'>Departemen</Typography>

            <TextField disabled fullWidth defaultValue='Decision Support' />

            <Typography variant='h4'>Kota Kantor</Typography>

            <TextField disabled fullWidth defaultValue='Bandung' />

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
        </Grid>

        <Grid item xs={4}>
          <KomentarSection />
        </Grid>
      </Grid>

      <img
        src={PreviewSuratImage}
        alt='surat'
        style={{ paddingTop: '20px', maxWidth: '1305px' }}
      />

      <ComposeMail
        isComposeMail={isComposeMail}
        onCloseComposeMail={onCloseComposeMail}
      />
    </Box>
  );
};

SuratInternal_3.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};

export default SuratInternal_3;
