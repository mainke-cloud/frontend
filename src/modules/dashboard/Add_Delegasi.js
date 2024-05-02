import React from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  TextField,
  IconButton,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import AppScrollbar from '@crema/components/AppScrollbar';
import { useState } from 'react';

import Add from '../../assets/Dashboard/Plus_icon.png';
import Filter from '../../assets/Dashboard/Filter_icon.png';
import Warning from '../../assets/Dashboard/Warning_icon_blue.png';
import Profile from '../../assets/Dashboard/Profile_icon.png';
import Trash from '../../assets/Dashboard/Trash_icon.png';
import Avatar from '../../assets/Dashboard/avatar_placeholder.png';
import Avatar_Blank from '../../assets/Dashboard/Avatar_icon.png';
import Add_Grey from '../../assets/Dashboard/Add_grey_icon.png';
import ComposeMail from '@crema/components/AppAddress';
import Filter_delegasi from './FilterPopUp/Filter_delegasi';
import { users } from '../../@crema/services/dummy/user/user';
import { useSelector } from 'react-redux';

const Add_Delegasi = () => {
  const delegasidata = useSelector((state) => state.addressbook.delegasi); 
  const [dateFrom, setDateFrom] = React.useState(null);
  const [dateTo, setDateTo] = React.useState(null);
  const [isComposeMail, setComposeMail] = React.useState(false);
  const [openFilter, setOpenFilter] = React.useState(false);

  const onOpenComposeMail = () => {
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setComposeMail(false);
  };

  const handleFilterClick = () => {
    setOpenFilter(!openFilter); // Toggle nilai openFilter
  };

  const handleCloseFilter = () => {
    setOpenFilter(false); // Tutup FilterPopover dengan mengatur openFilter ke false
  };

  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {' '}
      {isActive ? (
        <Box sx={{ backgroundColor: '#F4F4F4', padding: 5, height: '100vh' }}>
          <Stack spacing={5}>
            <Box sx={{ borderRadius: 2, backgroundColor: '#FFFFFF' }}>
              <Grid container sx={{ padding: 5 }}>
                <Grid
                  item
                  xs={12}
                  sx={{ margin: 5, paddingX: 2, marginBottom: 10 }}
                >
                  <Stack
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                  >
                    <Typography variant='h2'>Delegasi Saya</Typography>
                    <Stack direction='row' alignItems='center' spacing={3}>
                      <Box
                        sx={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E42313',
                          borderRadius: 2,
                          padding: 2,
                          cursor: 'pointer',
                          '&:hover': { backgroundColor: '#D9DDE3' },
                        }}
                        onClick={handleFilterClick}
                      >
                        <Stack
                          direction='row'
                          alignItems='center'
                          justifyContent='center'
                          spacing={2}
                        >
                          <Typography sx={{ color: '#E42313' }}>
                            Urutkan
                          </Typography>
                          <img src={Filter} style={{ height: 20, width: 20 }} />
                        </Stack>
                        <Filter_delegasi
                          open={openFilter}
                          onClose={handleCloseFilter}
                        />
                      </Box>
                      <Box
                        sx={{
                          backgroundColor: '#E42313',
                          padding: 2,
                          borderRadius: 2,
                          cursor: 'pointer',
                          '&:hover': { backgroundColor: '#F4CACA' },
                        }}
                        onClick={handleClick}
                      >
                        <Stack
                          direction='row'
                          alignItems='center'
                          justifyContent='center'
                          spacing={2}
                        >
                          <Typography sx={{ color: '#FFFFFF' }}>
                            Tambah Delegasi Baru
                          </Typography>
                          <img src={Add} style={{ width: 20, height: 20 }} />
                        </Stack>
                      </Box>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <AppScrollbar>
                <Box sx={{ overflowY: 'hidden', borderRadius: 2 }}>
                  <Stack direction='row'>
                    <Box
                      sx={{
                        width: 135,
                        height: 142,
                        backgroundColor: '#FFFFFF',
                        borderRight: '1px solid #B1B5BA',
                        cursor: 'pointer',
                        '&:hover': { backgroundColor: '#D9DDE3' },
                      }}
                    >
                      <Stack alignItems='center' justifyContent='center'>
                        <Box
                          sx={{
                            width: 61,
                            height: 18,
                            backgroundColor: '#429777',
                            borderRadius: 2,
                            marginY: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              textAlign: 'center',
                              color: '#FFFFFF',
                              fontSize: 12,
                            }}
                          >
                            17 Des
                          </Typography>
                        </Box>
                        <img src={Avatar} style={{ width: 48, height: 48 }} />
                        <Typography variant='h3'>Komisaris</Typography>
                        <Typography sx={{ color: '#5C5E61' }}>
                          Salies Apriliyanto
                        </Typography>
                      </Stack>
                    </Box>
                    <Box
                      sx={{
                        width: 135,
                        height: 142,
                        backgroundColor: '#FFFFFF',
                        borderRight: '1px solid #B1B5BA',
                        cursor: 'pointer',
                        '&:hover': { backgroundColor: '#D9DDE3' },
                      }}
                    >
                      <Stack alignItems='center' justifyContent='center'>
                        <Box
                          sx={{
                            width: 61,
                            height: 18,
                            backgroundColor: '#429777',
                            borderRadius: 2,
                            marginY: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              textAlign: 'center',
                              color: '#FFFFFF',
                              fontSize: 12,
                            }}
                          >
                            15 Des
                          </Typography>
                        </Box>
                        <img src={Avatar} style={{ width: 48, height: 48 }} />
                        <Typography variant='h3'>Komisaris</Typography>
                        <Typography sx={{ color: '#5C5E61' }}>
                          Salies Apriliyanto
                        </Typography>
                      </Stack>
                    </Box>
                    <Box
                      sx={{
                        width: 135,
                        height: 142,
                        backgroundColor: '#FFFFFF',
                        borderRight: '1px solid #B1B5BA',
                        cursor: 'pointer',
                        '&:hover': { backgroundColor: '#D9DDE3' },
                      }}
                    >
                      <Stack alignItems='center' justifyContent='center'>
                        <Box
                          sx={{
                            width: 61,
                            height: 18,
                            backgroundColor: '#BF2600',
                            borderRadius: 2,
                            marginY: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              textAlign: 'center',
                              color: '#FFFFFF',
                              fontSize: 12,
                            }}
                          >
                            Habis
                          </Typography>
                        </Box>
                        <img src={Avatar} style={{ width: 48, height: 48 }} />
                        <Typography variant='h3'>Komisaris</Typography>
                        <Typography sx={{ color: '#5C5E61' }}>
                          Salies Apriliyanto
                        </Typography>
                      </Stack>
                    </Box>
                    <Box
                      sx={{
                        width: 135,
                        height: 142,
                        backgroundColor: '#FFFFFF',
                        borderRight: '1px solid #B1B5BA',
                        padding: 1,
                      }}
                    >
                      <Stack alignItems='center' justifyContent='center'>
                        <img
                          src={Avatar_Blank}
                          style={{ width: 48, height: 48 }}
                        />
                        <Typography
                          variant='h4'
                          sx={{ textAlign: 'center', color: '#5C5E61' }}
                        >
                          Tambah Delegasi Baru
                        </Typography>
                        <IconButton onClick={handleClick}>
                          <img
                            src={Add_Grey}
                            style={{ width: 20, height: 20 }}
                          />
                        </IconButton>
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
              </AppScrollbar>
            </Box>
            <Box
              sx={{ backgroundColor: '#FFFFFF', borderRadius: 2, padding: 7 }}
            >
              <Box
                sx={{
                  backgroundColor: '#FFEFD2',
                  border: '1px solid #FFB020',
                  height: 40,
                  width: 264,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 1,
                  marginBottom: 5,
                }}
              >
                <Typography sx={{ color: '#FFB020', fontSize: 13 }}>
                  Tanggal Pembuatan: 15 Agustus 2021
                </Typography>
              </Box>
              <Grid container spacing={4}>
                <Grid item xs={2}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginBottom: 5,
                    }}
                  >
                    <img
                      src={Profile}
                      style={{
                        width: 187,
                        height: 187,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E42313',
                      borderRadius: 1,
                      padding: 2,
                      cursor: 'pointer',
                      '&:hover': { backgroundColor: '#D9DDE3' },
                    }}
                    flex={1}
                  >
                    <Stack
                      direction='row'
                      alignItems='center'
                      justifyContent='center'
                      spacing={2}
                    >
                      <Typography sx={{ color: '#E42313' }}>
                        Hapus Delegasi
                      </Typography>
                      <img src={Trash} style={{ height: 24, width: 24 }} />
                    </Stack>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Stack>
                    <Typography variant='h2'>Nama :</Typography>
                    <Typography sx={{ marginBottom: 7, fontSize: '16px' }}>
                      Salies Apriliyanto
                    </Typography>
                    <Typography variant='h2'>Jabatan :</Typography>
                    <Typography sx={{ marginBottom: 7, fontSize: '16px' }}>
                      Kepala Research and Development
                    </Typography>
                    <Typography variant='h2'>No :</Typography>
                    <Typography sx={{ fontSize: '16px' }}>8900001</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={3}>
                  <Stack spacing={2}>
                    <Typography variant='h4'>Tanggal Aktif</Typography>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        value={dateFrom}
                        onChange={(dateFrom) => {
                          setDateFrom(dateFrom);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                    <Typography variant='h4' sx={{ marginTop: 7 }}>
                      Tanggal Berakhir
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        value={dateTo}
                        onChange={(dateTo) => {
                          setDateTo(dateTo);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Stack>
                </Grid>
                <Grid item xs={4}>
                  <Stack
                    direction='row'
                    alignItems='flex-end'
                    justifyContent='flex-end'
                    sx={{ height: 250 }}
                  >
                    <Box
                      sx={{
                        height: 40,
                        width: 153,
                        backgroundColor: '#E42313',
                        padding: 2,
                        borderRadius: 2,
                        cursor: 'pointer',
                        '&:hover': { backgroundColor: '#F4CACA' },
                      }}
                    >
                      <Stack
                        direction='row'
                        alignItems='center'
                        justifyContent='center'
                        spacing={2}
                      >
                        <Typography
                          sx={{ color: '#FFFFFF', textAlign: 'center' }}
                        >
                          Simpan Perubahan
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                backgroundColor: '#EBF0FF',
                borderRadius: 1,
                padding: 4,
                paddingY: 7,
                border: '2px solid #9DB5FF',
              }}
            >
              <Stack spacing={2}>
                <Stack direction='row' spacing={3}>
                  <Typography variant='h4' sx={{ color: '#2952CC' }}>
                    Catatan Penting
                  </Typography>
                  <img src={Warning} style={{ width: 24, height: 24 }} />
                </Stack>
                <Typography sx={{ color: '#2952CC' }}>
                  Personal Assistant adalah fitur yang mengubah role sekretaris
                  antara lain :
                </Typography>
                <Stack>
                  <Typography sx={{ color: '#2952CC' }}>
                    1.Sekretaris tidak akan terlibat dalam pembuatan surat,
                    tetapi dapat tracking surat melalui menu tracking
                  </Typography>
                  <Typography sx={{ color: '#2952CC' }}>
                    2.Sekretaris dan Pejabat yang mengaktifkan sekretaris akan
                    menerima surat masuk
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Box>
      ) : (
        <Box sx={{ backgroundColor: '#F4F4F4', padding: 5, height: '100vh' }}>
          <Box sx={{ borderRadius: 2, backgroundColor: '#FFFFFF' }}>
            <Grid container sx={{ padding: 5 }}>
              <Stack
                direction='row'
                justifyContent='center'
                alignItems='center'
                spacing={5}
                sx={{ marginBottom: 5 }}
              >
                <Box
                  sx={{
                    backgroundColor: '#E42313',
                    padding: 2,
                    borderRadius: 2,
                    width: 100,
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: '#F4CACA' },
                  }}
                  onClick={handleClick}
                >
                  <Typography sx={{ textAlign: 'center', color: '#FFFFFF' }}>
                    Kembali
                  </Typography>
                </Box>
                <Typography variant='h2'>Tambah Delegasi</Typography>
              </Stack>
            </Grid>
            <Grid container spacing={4} sx={{ padding: 5 }}>
              <Grid item xs={2}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: 5,
                  }}
                >
                  <img
                    src={Profile}
                    style={{
                      width: 187,
                      height: 187,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Stack>
                  <Typography variant='h2'>Nama :</Typography>
                  <Box
                    sx={{
                      height: 40,
                      maxWidth: 350,
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #B1B5BA',
                      borderRadius: 2,
                      marginBottom: 7,
                      marginTop: 2,
                      cursor: 'pointer',
                      paddingTop: 2,
                      paddingX: 2,
                    }}
                    onClick={() => onOpenComposeMail()}
                  >
                    <Stack direction='row'>
                      <Typography>{delegasidata.nama}</Typography>
                    </Stack>
                  </Box>
                  <Typography variant='h2'>Jabatan :</Typography>
                  <Typography sx={{ marginBottom: 7, fontSize: '16px' }}>
                    {delegasidata.jabatan}
                  </Typography>
                  <Typography variant='h2'>No :</Typography>
                  <Typography sx={{ fontSize: '16px' }}>{delegasidata.nohp}</Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack spacing={2}>
                  <Typography variant='h4'>Tanggal Aktif</Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={dateFrom}
                      onChange={(dateFrom) => {
                        setDateFrom(dateFrom);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <Typography variant='h4' sx={{ marginTop: 7 }}>
                    Tanggal Berakhir
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={dateTo}
                      onChange={(dateTo) => {
                        setDateTo(dateTo);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Stack>
              </Grid>
            </Grid>
            <Grid container sx={{ padding: 5 }}>
              <Grid item xs={2}></Grid>
              <Grid item xs={6}>
                <Stack spacing={2} sx={{ marginBottom: 7 }}>
                  <Typography variant='h2'>Alasan:</Typography>
                  <Stack spacing={10}>
                    <TextField
                      variant='outlined'
                      multiline
                      minRows={4}
                      sx={{ width: '100%', height: 88 }}
                    />
                    <Box
                      sx={{
                        backgroundColor: '#E42313',
                        width: 247.5,
                        padding: 2,
                        borderRadius: 2,
                        marginTop: 500,
                        cursor: 'pointer',
                        '&:hover': { backgroundColor: '#F4CACA' },
                      }}
                    >
                      <Stack
                        direction='row'
                        alignItems='center'
                        justifyContent='center'
                        spacing={2}
                      >
                        <Typography sx={{ color: '#FFFFFF' }}>
                          Tambahkan Sebagai Delegasi
                        </Typography>
                        <img src={Add} style={{ width: 20, height: 20 }} />
                      </Stack>
                    </Box>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
      <ComposeMail
        isComposeMail={isComposeMail}
        onCloseComposeMail={onCloseComposeMail}
        datas={users}
        title='Delegasi'
        type='single'
      />
    </>
  );
};

export default Add_Delegasi;
