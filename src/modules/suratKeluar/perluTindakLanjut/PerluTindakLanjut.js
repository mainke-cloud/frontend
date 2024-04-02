import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Stack,
  Typography,
  Tab,
  Box,
  Grid,
  TableRow,
  TableBody,
  Table,
  TableContainer,
  Button,
  Divider,
  IconButton,
  InputBase,
  Chip,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Document, Page, pdfjs } from 'react-pdf';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import AProfile from '../../../assets/vector/Avatar.png';
import Check from '../../../assets/icon/check.svg';
import gridIcon from '../../../assets/icon/grid.svg';
import menuIcon from '../../../assets/icon/menu.svg';
import AppScrollbar from '@crema/components/AppScrollbar';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { MessageSquare, File, X, Send, Clock } from 'feather-icons-react';
import { position } from 'stylis';
import Cobaindropzone from './cobaindropzone';
import DropZone from '../../../@crema/components/Tabs/SuratKeluar/DropZone';
const PerluTindakLanjut = ({ props }) => {
  const [value, setValue] = React.useState('1');
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

  const StyledBox = styled(Box)({
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    marginRight: '3%',
    border: '1px solid #d8d8d8',
  });

  const Judul = styled(Typography)({
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '20px',
    padding: '16px 16px 0px 16px',
  });

  const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#0F6EB5',
      color: 'white',
    },
    '&.angka': {
      backgroundColor: '#000000',
    },
  }));

  const StyledStatus = styled(Typography)(() => ({
    fontSize: '10px',
    paddingLeft: '5px',
    paddingRight: '5px',
    paddingTop: '2px',
    paddingBottom: '2px',
    backgroundColor: isChecked ? '#34C759' : '#C8CCD2',
    color: 'white',
    borderRadius: '5px',
  }));

  const StyledKomentar = styled(Typography)(() => ({
    fontSize: '10px',
    paddingLeft: '5px',
    paddingRight: '5px',
    paddingTop: '2px',
    paddingBottom: '2px',
    backgroundColor: '#34C759',
    color: 'white',
    borderRadius: '5px',
  }));

  const StyledTab = styled(Tab)(({ theme }) => ({
    borderRadius: '100px',
    backgroundColor: '#ffffff',
    color: '#5C5E61',
    indicatorColor: 'none',
    fontSize: '12px',
    textTransform: 'none',
    minHeight: 0,
    minWidth: 0,
    padding: '10px 26px',
    '&.MuiTabs-indicator': {
      display: 'none',
    },
    '&.Mui-selected': {
      backgroundColor: '#E42313',
      color: '#ffffff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }));

  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#EEF0F7',
      color: '#262829',
      fontSize: 16,
      fontWeight: 'bold',
      borderBottom: 'none',
    },
    [`&.${tableCellClasses.body}`]: {
      color: '#25282B',
      borderBottom: 'none',
    },
    '&.small': {
      fontSize: 14,
      fontWeight: 'regular',
    },
    '&.medium': {
      fontWeight: 'bold',
      fontSize: 16,
    },
  }));

  const KirimButton = styled(Button)({
    borderRadius: '25px',
    backgroundColor: '#4B4747',
    color: 'white',
    fontSize: '12px',
    boxShadow: 'none',
    textTransform: 'none',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    '&:hover': {
      backgroundColor: '#E42313',
      borderColor: '#E42313',
      boxShadow: 'none',
    },
  });

  const info = [
    {
      desc: 'Surat penunjukan pelaksana pengadaan aplikasi si',
      name: 'Perihal',
    },
    {
      desc: 'In.02/HK',
      name: 'Klasifikasi Masalah',
    },
    {
      desc: 'Tinggi',
      name: 'Prioritas',
    },
    {
      desc: 'Rahasia',
      name: 'Jenis Surat',
    },
    {
      desc: '3 Berkas',
      name: 'Lampiran',
    },
  ];
  const Pengirim = [
    {
      desc: 'Kepala Research dan Development',
      name: 'Jabatan',
    },
    {
      desc: 'Taufik Sulaeman',
      name: 'Nama',
    },
    {
      desc: '8900002',
      name: 'Nik',
    },
    {
      desc: 'Divisi Informasi',
      name: 'Divisi',
    },
    {
      desc: 'Decision Support',
      name: 'Departemen',
    },
    {
      desc: 'DIT-11 B 10000',
      name: 'Departemen Code',
    },
    {
      desc: 'Bandung',
      name: 'Kota Kantor',
    },
    {
      desc: '-',
      name: 'Pemohon',
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Tinggi':
        return ['#E42313', '#FFBDAD'];
      case 'Sedang':
        return ['#FFB020', '#FFEFD2'];
      case 'Rendah':
        return ['#3366FF', '#D6E0FF'];
      case 'Disetujui':
        return ['#52BD94', '#EEF8F4'];
      default:
        return ['#C8CCD2', '#C8CCD2'];
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [isChecked, setIsChecked] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(null);
  const [showReply, setShowReply] = useState(null);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleClick = () => {
    console.log('StyledBox clicked');
  };

  const data = props;
  return (
    <Box backgroundColor='#F7F8F9'>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ paddingX: 8, paddingTop: 12, paddingBottom: 4 }}
      >
        <Typography fontSize='20px' fontWeight='700'>
          Detail Surat Perlu Tindak Lanjut {data.id}
        </Typography>
        <Stack direction='row' columnGap='24px'>
          <Box border='1px solid #B1B5BA' borderRadius='3px' padding='8px'>
            <Send style={{ width: '28px', height: '28px' }} />
          </Box>
          <Box border='1px solid #B1B5BA' borderRadius='3px' padding='8px'>
            <X style={{ width: '28px', height: '28px' }} />
          </Box>
        </Stack>
      </Stack>
      <Divider sx={{ borderColor: '#B1B5BA', borderBottomWidth: '2px' }} />
      <Box sx={{ padding: 8 }}>
        <Box backgroundColor='#FFFFFF' sx={{ padding: 8 }}>
          <Grid container>
            <Grid item xs={8}>
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value} sx={{ border: '1px solid red' }}>
                  <Box
                    sx={{
                      border: '1px solid #D8D8D8',
                      width: 'fit-content',
                      borderRadius: '100px',
                    }}
                  >
                    <TabList
                      onChange={handleChange}
                      indicatorColor='none'
                      sx={{ minHeight: 0 }}
                    >
                      <StyledTab label='Info' value='1' />
                      <StyledTab label='Penerima' value='2' />
                      <StyledTab label='Pengirim' value='3' />
                      <StyledTab label='Penyetuju' value='4' />
                      <StyledTab label='Lainnya' value='5' />
                    </TabList>
                  </Box>
                  <TabPanel
                    value='1'
                    sx={{ paddingTop: '12px', paddingLeft: '0px' }}
                  >
                    <StyledBox
                      sx={{
                        height: '577px',
                      }}
                    >
                      <Stack rowGap='10px'>
                        <TableContainer>
                          <Table aria-label='customized table'>
                            <TableBody>
                              {info.map((row) => (
                                <TableRow key={row.name}>
                                  <StyledTableCell
                                    className='medium'
                                    style={{ width: '40%' }}
                                  >
                                    {row.name}
                                  </StyledTableCell>
                                  <StyledTableCell
                                    className='medium'
                                    style={{ width: '2%', paddingRight: '0px' }}
                                  >
                                    :
                                  </StyledTableCell>
                                  <StyledTableCell
                                    className='medium'
                                    style={{ paddingLeft: '8px' }}
                                  >
                                    {row.desc}
                                  </StyledTableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Stack>
                    </StyledBox>
                  </TabPanel>
                  <TabPanel
                    value='2'
                    sx={{ paddingTop: '12px', paddingLeft: '0px' }}
                  >
                    <Stack rowGap='11px'>
                      <StyledBox sx={{ height: '283px' }} onClick={handleClick}>
                        <Stack rowGap='10px'>
                          <Judul>Untuk</Judul>
                          <Divider
                            sx={{
                              borderColor: '#B1B5BA',
                              borderBottomWidth: '1px',
                              padding: '0px',
                            }}
                          />
                          <AppScrollbar
                            sx={{
                              height: '200px',
                              overflowY: 'auto',
                              padding: '0px 16px 0px 16px',
                            }}
                            scrollToTop={false}
                          >
                            {Array.from({ length: 5 }).map((_, index) => (
                              <StyledBox
                                key={index}
                                sx={{
                                  border: 'none',
                                  mb: 1,
                                  transition: 'background-color 0.3s ease', // Efek transisi untuk perubahan warna
                                  '&:hover': {
                                    backgroundColor: '#f0f0f0', // Warna abu saat dihover
                                  },
                                }}
                              >
                                <Stack
                                  direction='row'
                                  alignItems='center'
                                  justifyContent='space-between'
                                >
                                  <Stack direction='row' columnGap='12px'>
                                    <Avatar alt='Profile' src={AProfile} />
                                    <Stack>
                                      <Typography
                                        fontSize='16px'
                                        fontWeight='700'
                                      >
                                        MANAGER IT PLANNING & PORTFOLIO
                                        MANAGEMENT
                                      </Typography>
                                      <Typography fontSize='12px'>
                                        DODDY HADI RUKMANA, ST/720277
                                      </Typography>
                                    </Stack>
                                  </Stack>
                                  <Stack direction={'row'}>
                                    <img src={Check} alt='user-profile' />
                                  </Stack>
                                </Stack>
                              </StyledBox>
                            ))}
                          </AppScrollbar>
                        </Stack>
                      </StyledBox>
                      <StyledBox sx={{ height: '283px' }} onClick={handleClick}>
                        <Stack rowGap='10px'>
                          <Judul>Tembusan</Judul>
                          <Divider
                            sx={{
                              borderColor: '#B1B5BA',
                              borderBottomWidth: '1px',
                              padding: '0px',
                            }}
                          />
                          <AppScrollbar
                            sx={{
                              height: '200px',
                              overflowY: 'auto',
                              padding: '0px 16px 0px 16px',
                            }}
                            scrollToTop={false}
                          >
                            {Array.from({ length: 5 }).map((_, index) => (
                              <StyledBox
                                key={index}
                                sx={{
                                  border: 'none',
                                  mb: 1,
                                  transition: 'background-color 0.3s ease', // Efek transisi untuk perubahan warna
                                  '&:hover': {
                                    backgroundColor: '#f0f0f0', // Warna abu saat dihover
                                  },
                                }}
                              >
                                <Stack
                                  direction='row'
                                  alignItems='center'
                                  justifyContent='space-between'
                                >
                                  <Stack direction='row' columnGap='12px'>
                                    <Avatar alt='Profile' src={AProfile} />
                                    <Stack>
                                      <Typography
                                        fontSize='16px'
                                        fontWeight='700'
                                      >
                                        MANAGER IT PLANNING & PORTFOLIO
                                        MANAGEMENT
                                      </Typography>
                                      <Typography fontSize='12px'>
                                        DODDY HADI RUKMANA, ST/720277
                                      </Typography>
                                    </Stack>
                                  </Stack>
                                  <Stack direction={'row'}>
                                    <img src={Check} alt='user-profile' />
                                  </Stack>
                                </Stack>
                              </StyledBox>
                            ))}
                          </AppScrollbar>
                        </Stack>
                      </StyledBox>
                    </Stack>
                  </TabPanel>
                  <TabPanel
                    value='3'
                    sx={{ paddingTop: '12px', paddingLeft: '0px' }}
                  >
                    <StyledBox
                      sx={{
                        height: '577px',
                      }}
                    >
                      <Stack rowGap='10px'>
                        <TableContainer>
                          <Table aria-label='customized table'>
                            <TableBody>
                              {Pengirim.map((row) => (
                                <TableRow key={row.name}>
                                  <StyledTableCell
                                    className='medium'
                                    style={{ width: '40%' }}
                                  >
                                    {row.name}
                                  </StyledTableCell>
                                  <StyledTableCell
                                    className='medium'
                                    style={{ width: '2%', paddingRight: '0px' }}
                                  >
                                    :
                                  </StyledTableCell>
                                  <StyledTableCell
                                    className='medium'
                                    style={{ paddingLeft: '8px' }}
                                  >
                                    {row.desc}
                                  </StyledTableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Stack>
                    </StyledBox>
                  </TabPanel>
                  <TabPanel
                    value='4'
                    sx={{ paddingTop: '12px', paddingLeft: '0px' }}
                  >
                    <Stack rowGap='11px'>
                      <StyledBox sx={{ height: '577px' }} onClick={handleClick}>
                        <Stack rowGap='10px'>
                          <Judul>Pemeriksa</Judul>
                          <Divider
                            sx={{
                              borderColor: '#B1B5BA',
                              borderBottomWidth: '1px',
                              padding: '0px',
                            }}
                          />
                          <AppScrollbar
                            sx={{
                              height: '510px',
                              overflowY: 'auto',
                              padding: '0px 16px 0px 16px',
                            }}
                            scrollToTop={false}
                          >
                            {Array.from({ length: 25 }).map((_, index) => (
                              <StyledBox
                                key={index}
                                sx={{
                                  border: 'none',
                                  mb: 1,
                                  transition: 'background-color 0.3s ease', // Efek transisi untuk perubahan warna
                                  '&:hover': {
                                    backgroundColor: '#f0f0f0', // Warna abu saat dihover
                                  },
                                }}
                              >
                                <Stack
                                  direction='row'
                                  alignItems='center'
                                  justifyContent='space-between'
                                >
                                  <Stack direction='row' columnGap='12px'>
                                    <Avatar alt='Profile' src={AProfile} />
                                    <Stack>
                                      <Typography
                                        fontSize='16px'
                                        fontWeight='700'
                                      >
                                        MANAGER IT PLANNING & PORTFOLIO
                                        MANAGEMENT
                                      </Typography>
                                      <Typography fontSize='12px'>
                                        DODDY HADI RUKMANA, ST/720277
                                      </Typography>
                                    </Stack>
                                  </Stack>
                                  <Stack direction={'row'}>
                                    <img src={Check} alt='user-profile' />
                                  </Stack>
                                </Stack>
                              </StyledBox>
                            ))}
                          </AppScrollbar>
                        </Stack>
                      </StyledBox>
                    </Stack>
                  </TabPanel>
                  <TabPanel
                    value='5'
                    sx={{ paddingTop: '12px', paddingLeft: '0px' }}
                  >
                    <StyledBox sx={{ height: '577px' }} onClick={handleClick}>
                      <Stack rowGap='10px'>
                        <Stack direction='row' justifyContent='space-between'>
                          <Judul>Lampiran</Judul>
                          <Stack direction='row'>
                            <Judul>
                              <a style={{ textDecoration: 'none' }} href='#'>
                                See More
                              </a>
                            </Judul>
                            <Judul>
                              <img src={menuIcon} />
                            </Judul>
                            <Judul>
                              <img src={gridIcon} />
                            </Judul>
                          </Stack>
                        </Stack>
                        <AppScrollbar
                          sx={{
                            height: '210px',
                            overflowY: 'auto',
                            border: '1px solid #B1B5BA',
                            width: '97%',
                            ml: 3,
                            borderRadius: 2,
                            borderStyle: 'dashed',
                            borderColor: 'black',
                            borderWidth: '1px',
                            cursor: 'pointer',
                          }}
                          scrollToTop={false}
                        >
                          <DropZone></DropZone>
                        </AppScrollbar>
                      </Stack>
                      <Stack rowGap='10px'>
                        <Stack direction='row' justifyContent='space-between' sx={{ mt:5}}>
                          <Judul>Lampiran</Judul>
                          <Stack direction='row'>
                            <Judul>
                              <a style={{ textDecoration: 'none' }} href='#'>
                                See More
                              </a>
                            </Judul>
                            <Judul>
                              <img src={menuIcon} />
                            </Judul>
                            <Judul>
                              <img src={gridIcon} />
                            </Judul>
                          </Stack>
                        </Stack>
                        <AppScrollbar
                          sx={{
                            height: '210px',
                            overflowY: 'auto',
                            border: '1px solid #B1B5BA',
                            width: '97%',
                            ml: 3,
                            borderRadius: 2,
                            borderStyle: 'dashed',
                            borderColor: 'black',
                            borderWidth: '1px',
                            cursor: 'pointer',
                          }}
                          scrollToTop={false}
                        >
                          <DropZone></DropZone>
                        </AppScrollbar>
                      </Stack>
                    </StyledBox>
                  </TabPanel>
                </TabContext>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  marginTop: '50px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #d8d8d8',
                  borderRadius: '10px',
                  paddingY: '16px',
                }}
              >
                <Stack rowGap='10px'>
                  <Typography fontSize='16px' fontWeight='700' paddingX='18px'>
                    Komentar <span style={{ color: '#E42313' }}>*</span>
                  </Typography>
                  <Divider
                    sx={{ borderColor: '#B1B5BA', borderBottomWidth: '2px' }}
                  />
                  <AppScrollbar
                    sx={{
                      height: '455px',
                      overflowY: 'auto',
                      paddingBottom: '10px',
                    }}
                    scrollToTop={false}
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Stack
                        key={index}
                        sx={{ paddingY: '16px', paddingX: '12px' }}
                      >
                        <Grid
                          container
                          columnSpacing='16px'
                          alignItems='center'
                        >
                          <Grid item xs={2}>
                            <Stack
                              justifyContent='space-between'
                              alignItems='center'
                            >
                              <Avatar
                                sx={{
                                  marginBottom: '30px',
                                  marginTop: '-10px',
                                }}
                                alt='Profile'
                                src={AProfile}
                              />
                              <StyledBadge
                                overlap='circular'
                                anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'right',
                                }}
                                badgeContent='1'
                                className='angka'
                              />
                            </Stack>
                          </Grid>
                          <Grid item xs={10}>
                            <Stack
                              direction='row'
                              alignItems='baseline'
                              justifyContent='space-between'
                              columnGap='4px'
                            >
                              <Typography fontSize='16px' fontWeight='700'>
                                Yani Dama Putera
                              </Typography>
                              <Typography fontSize='12px' color='#8C8F93'>
                                7200004
                              </Typography>
                            </Stack>
                            <Typography fontSize='12px' color='#8C8F93'>
                              6 Oktober 2021 - 10:09
                            </Typography>
                            <Typography>Mohon Dicek</Typography>
                            <Stack
                              direction='row'
                              justifyContent='space-between'
                            >
                              <Stack
                                direction='row'
                                columnGap='18px'
                                alignItems='center'
                              >
                                <IconButton
                                  onClick={() =>
                                    setShowReply(
                                      showReply === index ? null : index,
                                    )
                                  }
                                  sx={{ padding: '0px' }}
                                >
                                  <Stack
                                    direction='row'
                                    columnGap='6px'
                                    alignItems='center'
                                  >
                                    <MessageSquare style={{ width: '16px' }} />
                                    <Typography>1</Typography>
                                  </Stack>
                                </IconButton>
                                <IconButton
                                  onClick={() =>
                                    setShowReplyInput(
                                      showReplyInput === index ? null : index,
                                    )
                                  }
                                  sx={{ padding: '0px' }}
                                >
                                  <Typography>Balas</Typography>
                                </IconButton>
                                <IconButton sx={{ padding: '0px' }}>
                                  <Stack
                                    direction='row'
                                    columnGap='6px'
                                    alignItems='center'
                                  >
                                    <File style={{ width: '16px' }} />
                                    <Typography>2</Typography>
                                  </Stack>
                                </IconButton>
                              </Stack>
                              <Chip
                                label='Disetujui'
                                sx={{
                                  borderRadius: 1,
                                  fontSize: '10px',
                                  height: '20px',
                                  backgroundColor:
                                    getPriorityColor('Disetujui')[1],
                                  color: getPriorityColor('Disetujui')[0],
                                }}
                              />
                            </Stack>
                          </Grid>
                        </Grid>
                        {showReply === index && (
                          <Box
                            paddingX='8px'
                            marginTop='8px'
                            paddingY='12px'
                            backgroundColor='#F7F8F9'
                            border='1px solid #B1B5BA'
                            borderRadius='4px'
                          >
                            <Stack
                              direction='row'
                              justifyContent='space-between'
                              alignItems='center'
                              paddingBottom='8px'
                            >
                              <Typography>Balasan Komentar</Typography>
                              <IconButton sx={{ padding: '0px' }}>
                                <X
                                  onClick={() => setShowReply(null)}
                                  style={{ width: '16px', height: '16px' }}
                                />
                              </IconButton>
                            </Stack>
                            <Grid
                              container
                              columnSpacing='16px'
                              alignItems='flex-start'
                              paddingLeft='16px'
                            >
                              <Grid item xs={2}>
                                <Avatar alt='Profile' src={AProfile} />
                              </Grid>
                              <Grid item xs={10}>
                                <Stack
                                  direction='row'
                                  alignItems='baseline'
                                  justifyContent='space-between'
                                  columnGap='4px'
                                >
                                  <Typography fontSize='14px' fontWeight='700'>
                                    Yani Dama Putera
                                  </Typography>
                                  <Typography fontSize='12px' color='#8C8F93'>
                                    7200004
                                  </Typography>
                                </Stack>
                                <Typography fontSize='10px' color='#8C8F93'>
                                  6 Oktober 2021 - 10:09
                                </Typography>
                                <Typography fontSize='13px'>
                                  Mohon Dicek
                                </Typography>
                                <Stack
                                  direction='row'
                                  columnGap='18px'
                                  alignItems='center'
                                >
                                  <IconButton
                                    onClick={() =>
                                      setShowReply(
                                        showReplyInput === index ? null : index,
                                      )
                                    }
                                    sx={{ padding: '0px' }}
                                  >
                                    <Stack
                                      direction='row'
                                      columnGap='6px'
                                      alignItems='center'
                                    >
                                      <MessageSquare
                                        style={{ width: '16px' }}
                                      />
                                      <Typography>1</Typography>
                                    </Stack>
                                  </IconButton>
                                  <IconButton
                                    onClick={() =>
                                      setShowReplyInput(
                                        showReplyInput === index ? null : index,
                                      )
                                    }
                                    sx={{ padding: '0px' }}
                                  >
                                    <Typography>balas</Typography>
                                  </IconButton>
                                </Stack>
                              </Grid>
                            </Grid>
                            <Divider />
                          </Box>
                        )}
                        {showReplyInput === index && (
                          <Stack
                            paddingY='8px'
                            direction='row'
                            columnGap='16px'
                            sx={{
                              marginTop: '8px',
                              justifyContent: 'space-between',
                            }}
                          >
                            <InputBase
                              placeholder='Balas Komentar...'
                              sx={{
                                width: '100%',
                                border: '0.5px solid #8C8F93',
                                borderRadius: '8px',
                                paddingX: '8px',
                              }}
                            />
                            <KirimButton
                              onClick={() => setShowReplyInput(null)}
                            >
                              Balas
                            </KirimButton>
                          </Stack>
                        )}
                      </Stack>
                    ))}
                  </AppScrollbar>
                </Stack>
                <Divider
                  sx={{ borderColor: '#B1B5BA', borderBottomWidth: '2px' }}
                />
                <Stack
                  direction='row'
                  columnGap='16px'
                  paddingX='16px'
                  sx={{ marginTop: '8px', justifyContent: 'space-between' }}
                >
                  <InputBase
                    placeholder='Tambahkan Komentar...'
                    sx={{
                      width: '100%',
                      border: '0.5px solid #8C8F93',
                      borderRadius: '8px',
                      paddingX: '8px',
                    }}
                  />
                  <KirimButton>Kirim</KirimButton>
                </Stack>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Box
                sx={{
                  border: '1px solid #D8D8D8',
                  minHeight: '1209px',
                  minWidth: '821px',
                }}
              >
                <Document
                  width={'fit-content'}
                  file={require('./Preview Surat.pdf')}
                >
                  <Page pageNumber={1} />
                </Document>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

PerluTindakLanjut.propTypes = {
  props: PropTypes.shape({}),
  avatarSrc: PropTypes.string,
  date: PropTypes.string,
  priority: PropTypes.string,
  primary: PropTypes.string,
};
export default PerluTindakLanjut;
