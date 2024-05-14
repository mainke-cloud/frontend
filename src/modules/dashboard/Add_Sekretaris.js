import React from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Switch,
  FormControlLabel,
  Checkbox,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
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
import Filter_sekretaris from './FilterPopUp/Filter_sekretaris';
import { dataSekre } from '../../@crema/services/dummy/dataSekreDele'; 
import { users } from '../../@crema/services/dummy/user/user';
import { useSelector } from 'react-redux';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  width: 36,
  height: 20,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#E42313',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 16,
    height: 16,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const Add_Sekretaris = () => {
  const sekretaris = useSelector((state) => state.addressbook.sekretaris);
  
  const [isActive, setIsActive] = useState(true);
  const [openFilter, setOpenFilter] = React.useState(false);
  const [isComposeMail, setComposeMail] = React.useState(false);
  const [isSelected, setSelected] = React.useState(1)

  const filtered = dataSekre.find(secretary => secretary.id === isSelected);
  // console.log(filtered)
  
  const onOpenComposeMail = () => {
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setComposeMail(false);
  };

  const handleFilterClick = () => {
    setOpenFilter(!openFilter); 
  };

  const handleCloseFilter = () => {
    setOpenFilter(false); 
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleSelected = (id) => {
    setSelected(id)
  }

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
                    <Typography variant='h2'>Sekretaris Saya</Typography>
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
                        <Filter_sekretaris
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
                            Tambah Sekretaris Baru
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
                    {dataSekre.map((sekre) => (
                      <Box
                      sx={{
                        width: 135,
                        height: 142,
                        backgroundColor: '#FFFFFF',
                        borderRight: '1px solid #B1B5BA',
                        cursor: 'pointer',
                        '&:hover': { backgroundColor: '#D9DDE3' },
                      }}
                      key={sekre.id}
                      onClick={() => handleSelected(sekre.id)}
                    >
                      <Stack alignItems='center' justifyContent='center'>
                        <Box
                          sx={{
                            width: 61,
                            height: 18,
                            backgroundColor: sekre.status ? '#429777' : '#BF2600',
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
                            {sekre.status ? 'Aktif' : 'Nonaktif'}
                          </Typography>
                        </Box>
                        <img src={Avatar} style={{ width: 48, height: 48 }} />
                        <Typography variant='h5' sx={{maxWidth: 120, textAlign: 'center'}}>{sekre.nama}</Typography>
                        <Typography sx={{ color: '#5C5E61', fontSize: 11 }}>
                          {sekre.nikg}
                        </Typography>
                      </Stack>
                    </Box>
                    ))}
                    <Box
                      sx={{
                        width: 135,
                        height: 142,
                        backgroundColor: '#FFFFFF',
                        borderRight: '1px solid #B1B5BA',
                        padding: 2,
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
                          Tambah Sekretaris Baru
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
                        Hapus Sekretaris
                      </Typography>
                      <img src={Trash} style={{ height: 24, width: 24 }} />
                    </Stack>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Stack>
                    <Typography variant='h2'>Nama :</Typography>
                    <Typography sx={{ marginBottom: 7, fontSize: '16px' }}>
                      {filtered.nama}
                    </Typography>
                    <Typography variant='h2'>Jabatan :</Typography>
                    <Typography sx={{ marginBottom: 7, fontSize: '16px' }}>
                      {filtered.jabatan}
                    </Typography>
                    <Typography variant='h2'>No :</Typography>
                    <Typography sx={{ fontSize: '16px' }}>{filtered.nikg}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={3}>
                  <Stack spacing={2}>
                    <Typography variant='h4'>Status :</Typography>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} />}
                      label='Aktif'
                      checked={filtered.status}
                    />
                    <Typography variant='h4'>Sifat :</Typography>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} />}
                      label='Personal Assistant'
                      checked={filtered.personalAssistant}
                    />
                    <Typography variant='h4'>Hak Sekretaris :</Typography>
                    <Stack direction='row'>
                      <FormControlLabel
                        control={<Checkbox />}
                        label='Biasa'
                        checked={filtered.hak.biasa}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label='Rhs'
                        checked={filtered.hak.Rhs}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label='Rhs Prib'
                        checked={filtered.hak.RhsPrib}
                      />
                    </Stack>
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
          <Stack spacing={5}>
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
                  <Typography variant='h2'>Tambah Sekretaris</Typography>
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
                    <Typography variant='h2' sx={{cursor: 'pointer'}} onClick={() => onOpenComposeMail()}>Nama :</Typography>
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
                        <Typography>{sekretaris.nama}</Typography>
                      </Stack>
                    </Box>
                    <Typography variant='h2'>Jabatan :</Typography>
                    <Typography sx={{ marginBottom: 7, fontSize: '16px' }}>
                      {sekretaris.jabatan}
                    </Typography>
                    <Typography variant='h2'>No :</Typography>
                    <Typography sx={{ fontSize: '16px' }}>
                      {sekretaris.nohp}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={3}>
                  <Stack spacing={2}>
                    <Typography variant='h4'>Status :</Typography>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} />}
                      label='Aktif'
                    />
                    <Typography variant='h4'>Sifat :</Typography>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} />}
                      label='Personal Assistant'
                    />
                    <Typography variant='h4'>Hak Sekretaris :</Typography>
                    <Stack direction='row'>
                      <FormControlLabel
                        value='end'
                        control={<Checkbox />}
                        label='Biasa'
                        labelPlacement='End'
                      />
                      <FormControlLabel
                        value='end'
                        control={<Checkbox />}
                        label='Rhs'
                        labelPlacement='End'
                      />
                      <FormControlLabel
                        value='end'
                        control={<Checkbox />}
                        label='Rhs Prib'
                        labelPlacement='End'
                      />
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
              <Grid container sx={{ padding: 5 }}>
                <Grid item xs={2}></Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      backgroundColor: '#E42313',
                      width: 247.5,
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
                      <Typography sx={{ color: '#FFFFFF' }}>
                        Tambahkan Sebagai Delegasi
                      </Typography>
                      <img src={Add} style={{ width: 20, height: 20 }} />
                    </Stack>
                  </Box>
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
      )}
      <ComposeMail
        isComposeMail={isComposeMail}
        onCloseComposeMail={onCloseComposeMail}
        datas={users}
        title='Sekretaris'
        type='single'
      />
    </>
  );
};

export default Add_Sekretaris;
