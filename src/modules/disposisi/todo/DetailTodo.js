import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Stack,
  Typography,
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
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { Document, Page, pdfjs } from 'react-pdf';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import AProfile from '../../../assets/vector/Avatar.png';
import AppScrollbar from '@crema/components/AppScrollbar';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import { MessageSquare, File, X, Clock } from 'feather-icons-react';
import HeaderDetail from '@crema/components/HeaderDetail';
import MiniTab from '@crema/components/MiniTab';

const DetailTodo = ({ props }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

  const StyledBox = styled(Box)(({theme})=>({
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #d8d8d8',
    borderRadius: '10px',
    padding: '16px',
  }));

  const Judul = styled(Typography)({
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '20px',
  });

  const StyledBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
      backgroundColor: theme.palette.coofis.secondary.border,
      color: 'white',
    },
    '&.angka': {
      backgroundColor: '#000000',
    },
  }));

  const StyledStatus = styled(Typography)(({theme}) => ({
    fontSize: '10px',
    paddingLeft: '5px',
    paddingRight: '5px',
    paddingTop: '2px',
    paddingBottom: '2px',
    backgroundColor: isChecked ? theme.palette.success.main : theme.palette.coofis.tertiary[40],
    color: 'white',
    borderRadius: '5px',
  }));

  const StyledKomentar = styled(Typography)(({theme}) => ({
    fontSize: '10px',
    paddingLeft: '5px',
    paddingRight: '5px',
    paddingTop: '2px',
    paddingBottom: '2px',
    backgroundColor: theme.palette.success.main,
    color: 'white',
    borderRadius: '5px',
  }));
  const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#EEF0F7',
      color: theme.palette.coofis.tertiary[90],
      fontSize: 16,
      fontWeight: 'bold',
      borderBottom: 'none',
    },
    [`&.${tableCellClasses.body}`]: {
      color: theme.palette.coofis.tertiary[90],
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

  const KirimButton = styled(Button)(({theme})=>({
    borderRadius: '25px',
    backgroundColor: theme.palette.coofis.tertiary[30],
    color: 'white',
    fontSize: '12px',
    boxShadow: 'none',
    textTransform: 'none',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    '&:hover': {
      backgroundColor: theme.palette.coofis.primary.main,
      borderColor: theme.palette.coofis.primary.main,
      boxShadow: 'none',
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

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Tinggi':
        return [(theme) => theme.palette.coofis.primary.main, (theme) => theme.palette.coofis.primary.bg3];
      case 'Sedang':
        return [(theme) => theme.palette.coofis.warning.main, (theme) => theme.palette.coofis.warning.bg1];
      case 'Rendah':
        return [(theme) => theme.palette.coofis.secondary.main, (theme) => theme.palette.coofis.success.bg2];
      default:
        return [(theme) => theme.palette.coofis.tertiary[40], (theme) => theme.palette.coofis.tertiary[40]];
    }
  };

  const [isChecked, setIsChecked] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(null);
  const [showReply, setShowReply] = useState(null);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  
  const AlamatDisposisi = () => {
    return (
      <Stack rowGap='10px'>
        <StyledBox>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ paddingBottom: '10px' }}
          >
            <Stack direction='row' alignItems='center' columnGap='8px'>
              <StyledBadge
                overlap='circular'
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent='S'
              >
                <Avatar
                  sx={{
                    border: 2,
                    borderColor: (theme) => theme.palette.coofis.secondary.border,
                    width: 46,
                    height: 46,
                  }}
                  alt='Profile'
                  src={props.avatarSrc}
                />
              </StyledBadge>
              <Typography fontSize='16px'>Adhi Prasetio/740049</Typography>
            </Stack>
            <StyledBox sx={{ paddingX: '8px', paddingY: '8px' }}>
              <Stack direction='row' columnGap='8px' alignItems='center'>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    style={{ display: 'none' }}
                  />
                  <span
                    style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: isChecked ? '#34C759' : 'transparent',
                      border: '1px solid #34C759',
                      display: 'inline-block',
                      marginRight: '5px',
                      borderRadius: '2px',
                      backgroundImage: isChecked
                        ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z'/%3E%3C/svg%3E\")"
                        : 'none',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  />
                </label>
                <Clock style={{ color: '#34C759', width: '18px' }} />
                <Typography fontSize='16px'>{props.date}</Typography>
                <StyledStatus isChecked={isChecked}>
                  {isChecked ? 'Selesai' : 'Sudah dibaca'}
                </StyledStatus>
              </Stack>
            </StyledBox>
          </Stack>
          <StyledBox sx={{ backgroundColor: '#F9F9F9', border: '0px' }}>
            <Stack direction='row' justifyContent='start' columnGap='10px'>
              <Box>
                <Typography
                  fontWeight='700'
                  sx={{
                    backgroundColor: getPriorityColor(props.priority)[1],
                    color: getPriorityColor(props.priority)[0],
                    padding: 2,
                    borderRadius: 1,
                  }}
                >
                  {props.priority}
                </Typography>
              </Box>
              <Stack rowGap='10px'>
                <Typography fontWeight='700'>{props.primary}</Typography>
                <Typography>Untuk diketahui</Typography>
              </Stack>
            </Stack>
          </StyledBox>
        </StyledBox>
        <StyledBox>
          <Stack rowGap='10px'>
            <Judul>Diteruskan Dari</Judul>
            <Divider
              sx={{
                borderColor: (theme) => theme.palette.coofis.tertiary[50],
                borderBottomWidth: '2px',
              }}
            />

            <Typography>EVITA TUNJUNG SEKAR / 690013</Typography>
          </Stack>
        </StyledBox>
        <StyledBox sx={{ height: '275px' }}>
          <Stack rowGap='10px'>
            <Judul>Diteruskan Kepada</Judul>
            <Divider
              sx={{
                borderColor: (theme) => theme.palette.coofis.tertiary[50],
                borderBottomWidth: '2px',
              }}
            />

            <AppScrollbar
              sx={{
                height: '200px',
                overflowY: 'auto',
              }}
              scrollToTop={false}
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <StyledBox key={index} sx={{ border: 'none' }}>
                  <Stack direction='row' columnGap='12px' alignItems='center'>
                    <Avatar alt='Profile' src={AProfile} />
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
            </AppScrollbar>
          </Stack>
        </StyledBox>
        <StyledBox sx={{ height: '178px' }}>
          <Stack rowGap='10px'>
            <Judul>Petunjuk/Catatan</Judul>
            <Divider
              sx={{
                borderColor: (theme) => theme.palette.coofis.tertiary[50],
                borderBottomWidth: '2px',
              }}
            />

            <Typography>
              Punten Pak Adhi, untuk permintaan ini apakah sudah dipenuhi? .
              terimakasih
            </Typography>
          </Stack>
        </StyledBox>
      </Stack>
    );
  };

  const AgendaSuratMasuk = () => {
    return (
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
                      style={{ width: '2%', paddingRight: '0px' }}
                    >
                      :
                    </StyledTableCell>
                    <StyledTableCell
                      className='medium'
                      style={{ paddingLeft: '8px' }}
                    >
                      {row.name}
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </StyledBox>
    );
  };

  return (
    <Box backgroundColor={(theme) => theme.palette.coofis.tertiary.bg}>
      <HeaderDetail nama='Detail Todo' send />
      <Box sx={{ padding: 8 }}>
        <Box
          backgroundColor={(theme)=> theme.palette.background.paper}
          sx={{ padding: 8, borderRadius: '10px' }}
        >
          <Grid container>
            <Grid item xs={8}>
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <MiniTab
                  tabs={[
                    { name: 'Alamat Disposisi', content: AlamatDisposisi() },
                    { name: 'Agenda Surat Masuk', content: AgendaSuratMasuk() },
                  ]}
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  marginTop: '50px',
                  backgroundColor: (theme) => theme.palette.background.paper,
                  border: '1px solid #d8d8d8',
                  borderRadius: '10px',
                  paddingY: '16px',
                }}
              >
                <Stack rowGap='10px'>
                  <Typography fontSize='16px' fontWeight='700' paddingX='18px'>
                    Komentar <span style={{ color: (theme) => theme.palette.coofis.primary.main }}>*</span>
                  </Typography>
                  <Divider
                    sx={{ borderColor: (theme) => theme.palette.coofis.tertiary[50], borderBottomWidth: '2px' }}
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
                                classname='angka'
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
                              <StyledKomentar>Disetujui</StyledKomentar>
                            </Stack>
                          </Grid>
                        </Grid>
                        {showReply === index && (
                          <Box
                            paddingX='8px'
                            marginTop='8px'
                            paddingY='12px'
                            backgroundColor={(theme)=>theme.palette.coofis.tertiary.bg}
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
                  sx={{ borderColor: (theme) => theme.palette.coofis.tertiary[50], borderBottomWidth: '2px' }}
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

DetailTodo.propTypes = {
  props: PropTypes.shape({}),
  avatarSrc: PropTypes.string,
  date: PropTypes.string,
  priority: PropTypes.string,
  primary: PropTypes.string,
};

export default DetailTodo;
