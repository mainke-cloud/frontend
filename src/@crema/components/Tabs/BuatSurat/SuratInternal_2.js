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

const SuratInternal_2 = ({ handleNext, handlePrev }) => {
  const [showPreview, setShowPreview] = useState(false);

  const handleShow = () => {
    setShowPreview(!showPreview);
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
                onClick={() => {
                  console.log('pop up address book');
                }}
              >
                Kepada
              </Link>

              <Typography variant='h4' color='red'>
                *
              </Typography>
            </Stack>

            <AppScrollbar>
              <TextField
                id='outlined-multiline-static'
                multiline
                rows={4}
                fullWidth
                InputProps={{
                  readOnly: true,

                  endAdornment: <ButtonBuatSurat />,
                }}
              />
            </AppScrollbar>

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
            <AppScrollbar>
              <TextField
                id='outlined-multiline-static'
                multiline
                rows={4}
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
            </AppScrollbar>

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
              onClick={() => {
                console.log('pop up address book');
              }}
            >
              Tembusan
            </Link>

            <AppScrollbar>
              <TextField
                id='outlined-multiline-static'
                multiline
                rows={4}
                fullWidth
                InputProps={{
                  readOnly: true,

                  endAdornment: <ButtonBuatSurat />,
                }}
              />
            </AppScrollbar>
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
            <AppScrollbar>
              <TextField
                id='outlined-multiline-static'
                multiline
                rows={4}
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
            </AppScrollbar>

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
    </Box>
  );
};

SuratInternal_2.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};

export default SuratInternal_2;
