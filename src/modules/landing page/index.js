import {
  Box,
  Typography,
  Grid,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import coofis from '../../assets/Landingpage/coofis 1.png';
import aktivitas1 from '../../assets/Landingpage/Image.png';
import aktivitas2 from '../../assets/Landingpage/Image1.png';
import aktivitas3 from '../../assets/Landingpage/Image2.png';
import klien1 from '../../assets/Landingpage/klien1.png';
import klien2 from '../../assets/Landingpage/klien2.png';
import klien3 from '../../assets/Landingpage/klien3.png';
import klien4 from '../../assets/Landingpage/klien4.png';
import klien5 from '../../assets/Landingpage/klien5.png';
import klien6 from '../../assets/Landingpage/klien6.png';
import klien7 from '../../assets/Landingpage/klien7.png';
import backgroundImage from '../../assets/Landingpage/backgroundImage.png';
import grid1 from '../../assets/Landingpage/grid1.png';
import grid12 from '../../assets/Landingpage/grid1-2.png';
import grid2 from '../../assets/Landingpage/grid2.png';
import grid3 from '../../assets/Landingpage/grid3.png';
import linkedin from '../../assets/Landingpage/linkedin.svg';
import instagram from '../../assets/Landingpage/instagram.svg';
import youtube from '../../assets/Landingpage/youtube.svg';
import mail from '../../assets/Landingpage/mail.svg';
import kertas from '../../assets/Landingpage/kertas.png';
import digital from '../../assets/Landingpage/digital.png';
import { Fonts } from '@crema/constants/AppEnums';
import IconButton from '@mui/material/IconButton';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Landing_page = () => {
  return (
    <>
      <Box sx={{ height: 813 }}>
        <Grid container>
          <Grid item xs={4} sx={{ paddingTop: 3 }}>
            <img src={coofis} style={{ width: 118, height: 80 }} />
          </Grid>
          <Grid item xs={6} sx={{ paddingTop: 12 }}>
            <Stack direction='row' spacing={7}>
              <Typography>Coofis</Typography>
              <Typography>Nota Dinas</Typography>
              <Typography>Careers</Typography>
              <Typography>News</Typography>
              <Typography>Contact</Typography>
            </Stack>
          </Grid>
          <Grid item xs={2} sx={{ paddingTop: 8 }}>
            <Box
              sx={{
                backgroundColor: '#E42313',
                width: 166,
                height: 46,
                paddingY: 3,
                borderRadius: 5,
              }}
            >
              <Typography sx={{ textAlign: 'center', color: '#FFFFFF' }}>
                Coba Demo
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ paddingTop: 15 }}>
            <Stack alignItems='center' justifyContent='center' spacing={2}>
              <Typography variant='h1'>Mengurus Persuratan menjadi</Typography>
              <Stack direction='row' spacing={1}>
                <Typography variant='h1'>Lebih</Typography>
                <Typography variant='h1' sx={{ color: '#E42313' }}>
                  Cepat
                </Typography>
                <Typography variant='h1'>&</Typography>
                <Typography variant='h1' sx={{ color: '#E42313' }}>
                  Efisien
                </Typography>
              </Stack>
              <Stack sx={{ paddingTop: 2 }}>
                <Typography>
                  Dengan Mengubah Cara Kerja Manual Menjadi Elektronis
                </Typography>
                <Typography>
                  Dapat Meningkatkan Derajat Kolaborasi Di Perusaan Anda
                </Typography>
              </Stack>
              <Stack direction='row' spacing={8} sx={{ paddingTop: 5 }}>
                <Box
                  sx={{
                    backgroundColor: '#E42313',
                    width: 236,
                    height: 49,
                    paddingTop: 3,
                    borderRadius: 1,
                  }}
                >
                  <Typography sx={{ color: '#FFFFFF', textAlign: 'center' }}>
                    Trial 30 Hari
                  </Typography>
                </Box>
                <Box
                  sx={{
                    border: '1px solid #E42313',
                    width: 236,
                    height: 49,
                    paddingTop: 3,
                    borderRadius: 1,
                  }}
                >
                  <Typography sx={{ color: '#E42313', textAlign: 'center' }}>
                    Coba Demo
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ height: 437, backgroundColor: '#E42313' }}>
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Box>
      <Box sx={{ height: 750 }}>
        <Stack alignItems='center'>
          <img src={coofis} style={{ width: 118, height: 80 }} />
          <Typography variant='h1'>Fitur Unggulan Coofis</Typography>
        </Stack>
      </Box>
      <Box sx={{ height: 770 }}>
        <Stack alignItems='center'>
          <Typography
            fontSize={36}
            fontWeight={Fonts.MEDIUM}
            textAlign='center'
          >
            Perbedaan Menggunakan Surat <br />
            <span style={{ color: '#BF2600' }}>Kertas</span> Dan{' '}
            <span style={{ color: '#BF2600' }}>Digital</span>
          </Typography>
        </Stack>
        {/* <Box> */}
        <Grid container spacing={10} p={10}>
          <Grid item xs={12} md={6}>
            <Box p={8} bgcolor='#FFF4F4' borderRadius={5}>
              <Box
                sx={{
                  bgcolor: '#E42013',
                  height: 200,
                  width: 200,
                  borderRadius: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: 10,
                }}
              >
                <img
                  src={kertas}
                  alt='Stack of Papers'
                  style={{ width: 162, height: 77 }}
                />
              </Box>
              <Typography
                mt={2}
                fontSize={36}
                color='#E42313'
                fontWeight={Fonts.BOLD}
              >
                Menggunakan Surat Kertas
              </Typography>
              <Stack mt={3}>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: '#E42313', fontSize:36 }}/>
                  </ListItemIcon>
                  <ListItemText
                    primary='Memerlukan biaya untuk cetakan'
                    primaryTypographyProps={{ fontSize: 24 }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: '#E42313', fontSize:36 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary='Memerlukan ruang penyimpanan fisik'
                    primaryTypographyProps={{ fontSize: 24 }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: '#E42313', fontSize:36 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary='Memerlukan waktu untuk pengiriman'
                    primaryTypographyProps={{ fontSize: 24 }}
                  />
                </ListItem>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={8} bgcolor='#FFE2E2' borderRadius={5}>
              <Box
                sx={{
                  bgcolor: '#E42013',
                  height: 200,
                  width: 200,
                  borderRadius: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={digital}
                  alt='Stack of Papers'
                  style={{ width: 130, height: 150 }}
                />
              </Box>
              <Typography
                mt={2}
                fontSize={36}
                color='#E42313'
                fontWeight={Fonts.BOLD}
              >
                Menggunakan Coofis
              </Typography>
              <Stack mt={3}>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: '#E42313', fontSize:36 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary='Hanya Membayar Biaya Platform'
                    primaryTypographyProps={{ fontSize: 24 }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: '#E42313', fontSize:36 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary='Disimpan secara elektronik dalam Database'
                    primaryTypographyProps={{ fontSize: 24 }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: '#E42313', fontSize:36 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary='Dapat diakses secara instan melalui website'
                    primaryTypographyProps={{ fontSize: 24 }}
                  />
                </ListItem>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* </Box> */}
      <Box sx={{ height: 630 }}>
        <Stack alignItems='center'>
          <Typography fontSize={36} fontWeight={Fonts.MEDIUM}>
            Aktivitas Terbaru
          </Typography>
        </Stack>
        <Grid container spacing={5} sx={{ p: 10 }}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 399 }}>
              <CardMedia
                sx={{ height: 240 }}
                image={aktivitas1}
                title='aktivitas terbaru 1'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  sx={{ color: 'red' }}
                >
                  17 Juni 2024
                </Typography>
                <Grid container justifyContent='space-between'>
                  <Typography variant='h1' sx={{ fontWeight: Fonts.BOLD }}>
                    Implementasi Coofis pada PBNU
                  </Typography>
                  <IconButton aria-label='arrow' size='small'>
                    <ArrowOutwardIcon fontSize='small' />
                  </IconButton>
                </Grid>
                <Typography
                  variant='body2'
                  sx={{ fontWeight: Fonts.LIGHT, paddingTop: 2 }}
                >
                  PBNU adalah salah satu Organisasi Keagamaan yang menjadi
                  pionir dalam memasuki Era Digital dengan mempercayakan Coofis
                  NDE menjadi solusi Tata
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 399 }}>
              <CardMedia
                sx={{ height: 240 }}
                image={aktivitas2}
                title='aktivitas terbaru 1'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  sx={{ color: 'red' }}
                >
                  17 Juni 2024
                </Typography>
                <Typography variant='h1' sx={{ fontWeight: Fonts.BOLD }}>
                  Implementasi Coofis pada PT. Pegadaian
                </Typography>
                <Typography
                  variant='body2'
                  sx={{ fontWeight: Fonts.LIGHT, paddingTop: 2 }}
                >
                  Kami adalah team dibelakang Telkom DES dalam sukses
                  mengimplementasikan NDE di PT. Pegadaian. PT. Pegadaian telah
                  menggunakan aplikasi Coofis NDE
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 399 }}>
              <CardMedia
                sx={{ height: 240 }}
                image={aktivitas3}
                title='aktivitas terbaru 1'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  sx={{ color: 'red' }}
                >
                  17 Juni 2024
                </Typography>
                <Typography variant='h1' sx={{ fontWeight: Fonts.BOLD }}>
                  Implementasi Coofis pada PT. POS Indonesia (Persero)
                </Typography>
                <Typography
                  variant='body2'
                  sx={{ fontWeight: Fonts.LIGHT, paddingTop: 2 }}
                >
                  Kami adalah team dibelakang Telkom DES dan Telkom Sigma dalam
                  sukses mengimplementasikan Coofis NDE di PT. POS Indonesia
                  (Persero). PT.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ height: 350 }}>
        <Stack alignItems='center'>
          <Typography fontSize={36} fontWeight={Fonts.MEDIUM}>
            Klien Kami
          </Typography>
          <Typography fontSize={16} sx={{ textAlign: 'center' }}>
            Beberapa perusahaan atau instansi pemerintah maupun swasta yang
            mempercayakan
            <br /> implementasi Coofis dari kami.
          </Typography>
        </Stack>
        <Grid container justifyContent='space-around' paddingTop={10}>
          <img src={klien1} style={{ width: 132, height: 123 }} />
          <img src={klien2} style={{ width: 132, height: 123 }} />
          <img src={klien3} style={{ width: 132, height: 123 }} />
          <img src={klien4} style={{ width: 132, height: 123 }} />
          <img src={klien5} style={{ width: 132, height: 123 }} />
          <img src={klien6} style={{ width: 132, height: 123 }} />
          <img src={klien7} style={{ width: 132, height: 123 }} />
        </Grid>
      </Box>
      <Box
        sx={{
          height: 700,
          background: `linear-gradient(to bottom, rgba(228, 35, 19, 0.8) 30%, rgba(126, 19, 11, 0.8) 100%),
      url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply',
        }}
      >
        <Grid container sx={{ height: '100%' }}>
          <Grid item xs={8} container>
            <Grid item xs={5}>
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='100%'
              >
                <img src={grid1} style={{ width: 295, height: 202 }} />
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='100%'
                sx={{ paddingTop: 10 }}
              >
                <Stack>
                  <Typography
                    fontSize={36}
                    sx={{ textAlign: 'center', color: '#FFFFFF' }}
                  >
                    Gunakan Coofis Sekarang Juga
                    <br />
                    Dan Nikmati Fiturnya
                  </Typography>
                  <Stack direction='row' spacing={8} sx={{ paddingTop: 15 }}>
                    <Box
                      sx={{
                        backgroundColor: '#FFFFFF',
                        width: 236,
                        height: 49,
                        paddingTop: 2,
                        borderRadius: 5,
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#E42313',
                          textAlign: 'center',
                          fontWeight: Fonts.MEDIUM,
                          fontSize: 20,
                        }}
                      >
                        Trial 30 Hari
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        border: '1px solid #FFFFFF',
                        width: 236,
                        height: 49,
                        paddingTop: 2,
                        borderRadius: 5,
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#FFFFFF',
                          textAlign: 'center',
                          fontWeight: Fonts.MEDIUM,
                          fontSize: 20,
                        }}
                      >
                        Coba Demo
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='100%'
              >
                <img src={grid12} style={{ width: 350, height: 230 }} />
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Box
                display='flex'
                justifyContent='center'
                alignItems='flex-end'
                height='100%'
              >
                <img src={grid2} style={{ width: 291, height: 330 }} />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={4} sx={{ height: '100%' }}>
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              height='100%'
            >
              <img src={grid3} style={{ width: 393, height: 314 }} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ height: 370 }}>
        <Grid container columns p={10} sx={{ height: '100%' }}>
          <Grid item xs={10}>
            <Stack spacing={3}>
              <img src={coofis} style={{ width: 118, height: 80 }} />
              <Stack direction='row' spacing={7}>
                <Typography>Coofis</Typography>
                <Typography>Nota Dinas</Typography>
                <Typography>Careers</Typography>
                <Typography>News</Typography>
                <Typography>Contact</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Stack>
              <Divider />
              <Grid container justifyContent='space-between' paddingTop={5}>
                <Typography>
                  © Copyright 2024 | Powered By{' '}
                  <span style={{ color: '#BF2600' }}>ARM Solusi</span> | Alright
                  Reserved
                </Typography>
                <Stack direction='row' spacing={5}>
                  <img src={linkedin} alt='LinkedIn' />
                  <img src={instagram} alt='Instagram' />
                  <img src={mail} alt='Mail' />
                  <img src={youtube} alt='Youtube' />
                </Stack>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Landing_page;
