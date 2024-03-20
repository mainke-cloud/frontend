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
  TextField,
  Button,
  Divider,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Document, Page, pdfjs } from 'react-pdf';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import AProfile from '../../../../assets/vector/Avatar.png';
import AppScrollbar from '@crema/components/AppScrollbar';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { ClockIcon } from '@mui/x-date-pickers';

const DetailTodo = ({ props }) => {
  const [value, setValue] = React.useState('1');
console.log(props);
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

  const StyledBox = styled(Box)({
    backgroundColor: '#ffffff',
    border: '1px solid #d8d8d8',
    borderRadius: '10px',
    padding: '16px',
  });

  const Judul = styled(Typography)({
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '20px',
  });

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#0F6EB5',
      color: '#0F6EB5',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    },
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
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

  const pekerjaan = [
    {
      name: 'Diterima Tanggal',
    },
    {
      name: 'Nomor Agenda',
    },
    {
      name: 'No Surat',
    },
    {
      name: 'Tanggal Surat',
    },
    {
      name: 'Lampiran',
    },
    {
      name: 'Sifat',
    },
    {
      name: 'Perihal',
    },
    {
      name: 'Dari',
    },
    {
      name: 'Kepada',
    },
    {
      name: 'Tembusan',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Tinggi':
        return ['#E42313', '#FFBDAD'];
      case 'Sedang':
        return ['#FFB020', '#FFEFD2'];
      case 'Rendah':
        return ['#3366FF', '#D6E0FF'];
      default:
        return ['lightgrey', 'lightgrey'];
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <Box sx={{ padding: 8 }}>
      <Grid container>
        <Grid item xs={8}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box>
                <TabList
                  onChange={handleChange}
                  aria-label='lab API tabs example'
                >
                  <Tab
                    label='Disposition Address'
                    value='1'
                    sx={{ borderBottom: '1px solid #DDDDDD' }}
                  />
                  <Tab
                    label='Incoming Mail Agenda'
                    value='2'
                    sx={{ borderBottom: '1px solid #DDDDDD' }}
                  />
                </TabList>
              </Box>
              <TabPanel
                value='1'
                sx={{ paddingTop: '12px', paddingLeft: '0px' }}
              >
                <Stack rowGap='10px'>
                  <StyledBox>
                    <Stack
                      direction='row'
                      justifyContent='space-between'
                      alignItems='center'
                      sx={{ paddingBottom: '10px' }}
                    >
                      <Stack
                        direction='row'
                        alignItems='center'
                        columnGap='8px'
                      >
                        <StyledBadge
                          overlap='circular'
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                          }}
                          variant='dot'
                        >
                          <Avatar
                            sx={{
                              weight: '50px',
                              border: '1.28px solid #9CD7F5',
                            }}
                            alt='Profile'
                            src={props.avatarSrc}
                          />
                        </StyledBadge>
                        <Typography fontSize='16px'>
                          Adhi Prasetio/740049
                        </Typography>
                      </Stack>
                      <StyledBox sx={{ paddingX: '4px', paddingY: '8px' }}>
                        <Stack direction='row' columnGap='8px'>
                            <label style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={{ display: 'none' }} // Sembunyikan input checkbox bawaan
      />
      <span
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: isChecked ? '#34C759' : 'transparent',
          border: '1px solid #000',
          display: 'inline-block',
          marginRight: '5px',
        }}
      />
    </label>
                          <ClockIcon sx={{ color: '#34C759' }} />
                          <Typography fontSize='16px'>{props.date}</Typography>
                          <Typography
                            fontSize='10px'
                            sx={{
                              paddingX: '5px',
                              backgroundColor: '#34C759',
                              color: 'white',
                              borderRadius: '5px',
                              alignSelf: 'center',
                            }}
                          >
                            Selesai
                          </Typography>
                        </Stack>
                      </StyledBox>
                    </Stack>
                    <StyledBox
                      sx={{ backgroundColor: '#F9F9F9', border: '0px' }}
                    >
                      <Stack
                        direction='row'
                        justifyContent='start'
                        columnGap='10px'
                      >
                        <Box>
                          <Typography
                            fontWeight='700'
                            sx={{
                              backgroundColor: getStatusColor(props.status)[1],
                              color: getStatusColor(props.status)[0],
                              padding: 2,
                              borderRadius: 1,
                            }}
                          >
                            {props.status}
                          </Typography>
                        </Box>
                        <Stack rowGap='10px'>
                          <Typography fontWeight='700'>
                            {props.primary}
                          </Typography>
                          <Typography>Untuk diketahui</Typography>
                        </Stack>
                      </Stack>
                    </StyledBox>
                  </StyledBox>
                  <StyledBox>
                    <Stack rowGap='10px'>
                      <Judul>Diteruskan Dari</Judul>
                      <Divider />

                      <Typography>EVITA TUNJUNG SEKAR / 690013</Typography>
                    </Stack>
                  </StyledBox>
                  <StyledBox sx={{ height: '268px' }}>
                    <Stack rowGap='10px'>
                      <Judul>Diteruskan Kepada</Judul>
                      <Divider />

                      <AppScrollbar>
                        <Box
                          sx={{
                            height: '216px',
                            overflowY: 'auto',
                            paddingBottom: '10px',
                          }}
                        >
                          {Array.from({ length: 5 }).map((_, index) => (
                            <StyledBox key={index} sx={{ border: 'none' }}>
                              <Stack
                                direction='row'
                                columnGap='12px'
                                alignItems='center'
                              >
                                <Avatar
                                  sx={{ weight: '50px' }}
                                  alt='Profile'
                                  src={AProfile}
                                />
                                <Stack>
                                  <Typography fontSize='16px' fontWeight='700'>
                                    MANAGER IT PLANNING & PORTFOLIO MANAGEMENT
                                  </Typography>
                                  <Typography fontSize='12px'>
                                    DODDY HADI RUKMANA, ST/720277
                                  </Typography>
                                </Stack>
                              </Stack>
                            </StyledBox>
                          ))}
                        </Box>
                      </AppScrollbar>
                    </Stack>
                  </StyledBox>
                  <StyledBox sx={{ height: '178px' }}>
                    <Stack rowGap='10px'>
                      <Judul>Petunjuk/Catatan</Judul>
                      <Divider />

                      <Typography>
                        Punten Pak Adhi, untuk permintaan ini apakah sudah
                        dipenuhi? . terimakasih
                      </Typography>
                    </Stack>
                  </StyledBox>
                </Stack>
              </TabPanel>
              <TabPanel
                value='2'
                sx={{ paddingTop: '12px', paddingLeft: '0px' }}
              >
                <StyledBox>
                  <Stack rowGap='10px'>
                    <TableContainer>
                      <Table aria-label='customized table'>
                        <TableBody>
                          {pekerjaan.map((row) => (
                            <TableRow key={row.name}>
                              <StyledTableCell
                                className='medium'
                                style={{ width: '40%' }}
                              >
                                {row.name}
                              </StyledTableCell>
                              <StyledTableCell
                                className='medium'
                                style={{ width: '2%' }}
                              >
                                :
                              </StyledTableCell>
                              <StyledTableCell className='medium'>
                                {row.name}
                              </StyledTableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Stack>
                </StyledBox>
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <StyledBox sx={{ marginTop: '60px' }}>
            <Stack rowGap='10px'>
              <Judul fontSize='16px'>Komentar*</Judul>
              <Divider />

              <AppScrollbar>
                <Box
                  sx={{
                    height: '336px',
                    overflowY: 'auto',
                    paddingBottom: '10px',
                  }}
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Box key={index} sx={{ paddingY: '16px' }}>
                      <Stack
                        direction='row'
                        columnGap='12px'
                        alignItems='center'
                      >
                        <Avatar
                          sx={{ weight: '50px' }}
                          alt='Profile'
                          src={AProfile}
                        />
                        <Stack>
                          <Stack
                            direction='row'
                            alignItems='start'
                            columnGap='4px'
                          >
                            <Typography fontSize='16px' fontWeight='700'>Yani Dama Putera</Typography>
                            <Typography fontSize='12px' color='#8C8F93'>7200004</Typography>
                          </Stack>
                          <Typography fontSize='12px' color='#8C8F93'>
                            6 Oktober 2021 - 10:09
                          </Typography>
                          <Typography>Mohon Dicek</Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  ))}
                </Box>
              </AppScrollbar>
            </Stack>
            <Stack
              direction='row'
              columnGap='16px'
              sx={{ marginTop: '8px', justifyContent: 'space-between' }}
            >
              <TextField label='Tambahkan Komentar...' />
              <Button>Kirim</Button>
            </Stack>
          </StyledBox>
        </Grid>
      </Grid>
      <Box sx={{ width: 'fit-content', border: '1px solid #D8D8D8' }}>
        <Document width={'fit-content'} file={require('./Preview Surat.pdf')}>
          <Page pageNumber={1} />
        </Document>
      </Box>
    </Box>
  );
};

DetailTodo.propTypes = {
  props: PropTypes.shape({
  }),
  avatarSrc: PropTypes.string,
  date: PropTypes.string,
  status: PropTypes.string,
  primary: PropTypes.string,
};
export default DetailTodo;
