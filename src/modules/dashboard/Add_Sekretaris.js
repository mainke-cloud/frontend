import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Add from '../../assets/Dashboard/Plus_icon.png'
import Filter from '../../assets/Dashboard/Filter_icon.png'
import Warning from '../../assets/Dashboard/Warning_icon_blue.png'

const Add_Sekretaris = () => {
    return (
        <>
            <Box sx={{backgroundColor: '#D9DDE3', padding: 5, height: '100vh'}} >
                <Stack spacing={5}>
                    <Box sx={{borderRadius: 1, backgroundColor: '#FFFFFF'}}>
                        <Grid container sx={{padding: 3}}>
                            <Grid item xs={12} sx={{margin: 5, paddingX: 2, marginBottom: 2}}>
                                <Stack direction="row" alignItems="center" justifyContent="space-between">
                                    <Typography variant="h2">Sekretaris Saya</Typography>
                                    <Stack direction="row" alignItems="center" spacing={3}>
                                        <Box sx={{backgroundColor: '#FFFFFF', border: '1px solid #E42313' , borderRadius: 2, padding: 2}}> 
                                            <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                                                <Typography sx={{color: '#E42313'}}>Urutkan</Typography>
                                                <img src={Filter} style={{height: 20, width: 20}}/>
                                            </Stack>
                                        </Box>
                                        <Box sx={{backgroundColor: '#E42313', padding: 2, borderRadius: 2}}>
                                            <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                                                <Typography sx={{color: '#FFFFFF'}}>Tambah Sekretaris Baru</Typography>
                                                <img src={Add} style={{width: 20, height: 20}}/>
                                            </Stack>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{backgroundColor: '#FFFFFF', borderRadius: 1, padding: 3}}>
                        <Box sx={{backgroundColor: '#FFEFD2', border: '1px solid #FFB020', height: 40, width: 264,  display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 1}} >
                            <Typography sx={{color: '#FFB020', fontSize: 13}}>
                                Tanggal Pembuatan: 15 Agustus 2021
                            </Typography>
                        </Box>
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

export default Add_Sekretaris;