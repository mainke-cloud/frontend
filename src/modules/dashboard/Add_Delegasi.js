import React from "react";
import { Box, Grid, Stack, Typography, TextField, IconButton } from "@mui/material";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import AppScrollbar from '@crema/components/AppScrollbar';

import Add from '../../assets/Dashboard/Plus_icon.png'
import Warning from '../../assets/Dashboard/Warning_icon_blue.png'
import Profile from '../../assets/Dashboard/Profile_icon.png'
import Trash from '../../assets/Dashboard/Trash_icon.png'
import Avatar from '../../assets/Dashboard/avatar_placeholder.png'
import Avatar_Blank from '../../assets/Dashboard/Avatar_icon.png'
import Red_X from '../../assets/Dashboard/Red_x_icon.png'
import Add_Grey from '../../assets/Dashboard/Add_grey_icon.png'

const Add_Delegasi = () => {
    const [dateFrom, setDateFrom] = React.useState(null);
    const [dateTo, setDateTo] = React.useState(null);

    return (
        <>
            <Box sx={{backgroundColor: '#D9DDE3', padding: 5, height: '100vh'}}>
                <Stack spacing={5}>
                    <Box sx={{borderRadius: 1, backgroundColor: '#FFFFFF'}}>
                        <Grid container sx={{padding: 5}} >
                            <Grid item xs={12} sx={{margin: 5, paddingX: 2, marginBottom: 10}}>
                                <Stack direction="row" alignItems="center" justifyContent="space-between">
                                    <Typography variant="h2">Delegasi Saya</Typography>
                                    <Box sx={{backgroundColor: '#E42313', padding: 2, borderRadius: 2, cursor: 'pointer', '&:hover': {backgroundColor: '#F4CACA'} }}>
                                        <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                                            <Typography sx={{color: '#FFFFFF'}}>Tambah Delegasi Baru</Typography>
                                            <img src={Add} style={{width: 20, height: 20}}/>
                                        </Stack>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sx={{margin: 5}}>
                                <AppScrollbar>
                                    <Box sx={{overflowY: 'hidden'}}>
                                        <Stack direction='row'>
                                            <Box sx={{width: 135, height: 142, backgroundColor: '#D9DDE3', border: '1px solid #B1B5BA'}}>
                                                <Stack alignItems='center' justifyContent='center'>
                                                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                                                        <Box sx={{width: 61, height: 18, backgroundColor: '#429777', borderRadius: 2, marginRight: 5}}>
                                                            <Typography sx={{textAlign: 'center', color: '#FFFFFF'}}>17 Des</Typography>
                                                        </Box>
                                                        <IconButton >
                                                            <img src={Red_X} style={{width: 20, height: 20}}/>
                                                        </IconButton>
                                                    </Stack>
                                                    <img src={Avatar} style={{width: 48, height: 48}}/>
                                                    <Typography variant="h3">Komisaris</Typography>
                                                    <Typography>Salies Apriliyanto</Typography>
                                                </Stack>
                                            </Box>
                                            <Box sx={{width: 135, height: 142, backgroundColor: '#FFFFFF', border: '1px solid #B1B5BA'}}>
                                                <Stack alignItems='center' justifyContent='center'>
                                                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                                                        <Box sx={{width: 61, height: 18, backgroundColor: '#429777', borderRadius: 2, marginRight: 5}}>
                                                            <Typography sx={{textAlign: 'center', color: '#FFFFFF'}}>15 Des</Typography>
                                                        </Box>
                                                        <IconButton >
                                                            <img src={Red_X} style={{width: 20, height: 20}}/>
                                                        </IconButton>
                                                    </Stack>
                                                    <img src={Avatar} style={{width: 48, height: 48}}/>
                                                    <Typography variant="h3">Komisaris</Typography>
                                                    <Typography>Salies Apriliyanto</Typography>
                                                </Stack>
                                            </Box>
                                            <Box sx={{width: 135, height: 142, backgroundColor: '#FFFFFF', border: '1px solid #B1B5BA'}}>
                                                <Stack alignItems='center' justifyContent='center'>
                                                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                                                        <Box sx={{width: 61, height: 18, backgroundColor: '#BF2600', borderRadius: 2, marginRight: 5}}>
                                                            <Typography sx={{textAlign: 'center', color: '#FFFFFF'}}>Habis</Typography>
                                                        </Box>
                                                        <IconButton >
                                                            <img src={Red_X} style={{width: 20, height: 20}}/>
                                                        </IconButton>
                                                    </Stack>
                                                    <img src={Avatar} style={{width: 48, height: 48}}/>
                                                    <Typography variant="h3">Komisaris</Typography>
                                                    <Typography>Salies Apriliyanto</Typography>
                                                </Stack>
                                            </Box>
                                            <Box sx={{width: 135, height: 142, backgroundColor: '#FFFFFF', border: '1px solid #B1B5BA', padding: 1}}>
                                                <Stack alignItems='center' justifyContent='center'>
                                                    <img src={Avatar_Blank} style={{width: 48, height: 48}}/>
                                                    <Typography variant="h3" sx={{textAlign: 'center', color: '#5C5E61'}}>Tambah Delegasi Baru</Typography>
                                                    <IconButton>
                                                        <img src={Add_Grey} style={{width: 20, height: 20}}/>
                                                    </IconButton>
                                                </Stack>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </AppScrollbar>                                    
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{backgroundColor: '#FFFFFF', borderRadius: 1, padding: 7}}>
                        <Box sx={{backgroundColor: '#FFEFD2', border: '1px solid #FFB020', height: 40, width: 264,  display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 1, marginBottom: 5}} >
                            <Typography sx={{color: '#FFB020', fontSize: 13}}>
                                Tanggal Pembuatan: 15 Agustus 2021
                            </Typography>
                        </Box>
                        <Grid container spacing={4}>
                            <Grid item xs={2} >
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 5 }}>
                                    <img src={Profile} style={{width: 187, height: 187, marginLeft: 'auto', marginRight: 'auto'}}/>
                                </Box>
                                <Box sx={{backgroundColor: '#FFFFFF', border: '1px solid #E42313' , borderRadius: 1, padding: 2, cursor: 'pointer', '&:hover': {backgroundColor: '#D9DDE3'} }} flex={1}>
                                    <Stack direction='row' alignItems="center" justifyContent="center" spacing={2}>
                                        <Typography  sx={{color: '#E42313'}}>Hapus Delegasi</Typography>
                                        <img src={Trash} style={{height: 24, width: 24}}/>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack >
                                    <Typography variant="h2">Nama :</Typography>
                                    <Typography sx={{marginBottom: 7, fontSize: '16px'}}>Salies Apriliyanto</Typography>
                                    <Typography variant="h2">Jabatan :</Typography>
                                    <Typography sx={{marginBottom: 7, fontSize: '16px'}}>Kepala Research and Development</Typography>
                                    <Typography variant="h2">No :</Typography>
                                    <Typography sx={{fontSize: '16px'}}>8900001</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack spacing={2}>
                                    <Typography variant="h4">Tanggal Aktif</Typography>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            value={dateFrom}
                                            onChange={(dateFrom) => {
                                            setDateFrom(dateFrom);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                    <Typography variant="h4" sx={{marginTop: 7}}>Tanggal Berakhir</Typography>
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
                    </Box>
                    <Box sx={{backgroundColor: '#EBF0FF', borderRadius: 1, padding: 4, paddingY: 7, border: '2px solid #9DB5FF'}}>
                        <Stack spacing={2}>
                            <Stack direction="row" spacing={3}>
                                <Typography variant="h4" sx={{color: '#2952CC'}}>
                                    Catatan Penting
                                </Typography>
                                <img src={Warning} style={{width: 24, height: 24}}/>
                            </Stack>
                            <Typography sx={{color: '#2952CC'}}>
                                Personal Assistant adalah fitur yang mengubah role sekretaris antara lain :
                            </Typography>
                            <Stack>
                                <Typography sx={{color: '#2952CC'}}>
                                    1.Sekretaris tidak akan terlibat dalam pembuatan surat, tetapi dapat tracking surat melalui menu tracking
                                </Typography>
                                <Typography sx={{color: '#2952CC'}}>
                                    2.Sekretaris dan Pejabat yang mengaktifkan sekretaris akan menerima surat masuk
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}

export default Add_Delegasi;