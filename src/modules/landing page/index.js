import { Box, Typography, Grid, Stack } from "@mui/material";
import React from "react";
import coofis from "../../assets/Landingpage/coofis 1.png"
import Art from "../../assets/Landingpage/Art 1.png"
import bg1 from "../../assets/Landingpage/bg image 1.png"
import dashimg from "../../assets/Landingpage/dash.png"

const Landing_page = () => {
    return (
        <>
            <Box sx={{height: 830, background: 'linear-gradient(to bottom, #FFFFFF 80%, #ff9494  )'}}>
                <Grid container >
                    <Grid item xs={2} sx={{paddingTop: 3, paddingX: 20}}>
                        <img src={coofis} style={{width: 118, height: 80}}/>
                    </Grid>
                    <Grid item xs={8} sx={{paddingTop: 12}}>
                        <Stack direction="row" justifyContent="center" spacing={7}>
                            <Typography>
                                Coofis
                            </Typography>
                            <Typography>
                                Nota Dinas
                            </Typography>
                            <Typography>
                                Careers
                            </Typography>
                            <Typography>
                                News
                            </Typography>
                            <Typography>
                                Contact
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={2} sx={{paddingTop: 8}}>
                        <Box sx={{backgroundColor: "#E42313", width: 166, height: 46, paddingY: 3, borderRadius: 5}}>
                            <Typography sx={{textAlign: "center", color: "#FFFFFF"}}>
                                Coba Demo
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{paddingTop: 15}}>
                        <Stack alignItems="center" justifyContent="center" spacing={2}>
                            <Typography variant="h1">
                                Mengurus Persuratan menjadi
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Typography variant="h1">
                                    Lebih
                                </Typography>
                                <Typography variant="h1"  sx={{color: "#E42313"}}>
                                    Cepat
                                </Typography>
                                <Typography variant="h1">
                                    &
                                </Typography>
                                <Typography variant="h1" sx={{color: "#E42313"}}>
                                    Efisien
                                </Typography>
                            </Stack>
                            <Stack sx={{paddingTop: 2}}>
                                <Typography>
                                    Dengan Mengubah Cara Kerja Manual Menjadi Elektronis
                                </Typography>
                                <Typography>
                                    Dapat Meningkatkan Derajat Kolaborasi Di Perusaan Anda
                                </Typography>
                            </Stack>
                            <Stack direction="row" spacing={8} sx={{paddingTop: 5}}>
                                <Box sx={{background: 'linear-gradient(to bottom, #F24B3E, #C11E11)', width: 236, height: 49, paddingTop: 3, borderRadius: 1}}>
                                    <Typography sx={{color: "#FFFFFF", textAlign: "center"}}>
                                        Trial 30 Hari 
                                    </Typography>
                                </Box>
                                <Box sx={{border: '1px solid #E42313', width: 236, height: 49, paddingTop: 3, borderRadius: 1}}>
                                    <Typography sx={{color: "#E42313", textAlign: "center"}}>
                                        Coba Demo
                                    </Typography>
                                </Box>
                            </Stack>
                            <img src={dashimg} style={{width: "750px", marginTop: 80}}/>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{height: 437, backgroundColor: "#E42313", backgroundImage: {bg1}}}>
                <Grid container sx={{paddingY: 15}}>
                    <Grid item xs={6} alignContent="center"  sx={{paddingX: 20}}>
                        <Stack spacing={8}>
                            <Typography variant="h1" sx={{color: "#FFFFFF"}}>
                                Proses Persuratan Kamu Lambat Dan Tidak Efisien?
                            </Typography>
                            <Typography variant="h4" sx={{color: "#FFFFFF"}}>
                                Dengan Menggunakan Coofis , Segala Proses Persuratan Bisa Ditangani Dengan Efisien Dan Cepat Dengan Digitalisasi
                            </Typography>
                            <Typography sx={{color: "#FFFFFF"}}>
                                Pelajari Selanjutnya
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack justifyContent="center" alignItems="center">
                            <img src={Art} style={{width: 478, height: 299}}/>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{height: 750, paddingTop: 10, paddingX: 20}}>
                <Stack  alignItems="center">
                    <img src={coofis} style={{width: 118, height: 80}}/>
                    <Typography variant="h1">
                        Fitur Unggulan Coofis
                    </Typography>
                </Stack>
                <Grid container spacing={10} sx={{marginTop: 4}}>
                    <Grid item xs={4}>
                        <Box sx={{backgroundColor: "#e0e0e0", height: 222}}>
                            <Stack  alignItems="center">
                                <Typography>
                                     Surat Digital
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={{backgroundColor: "#e0e0e0", height: 222}}>
                            <Stack alignItems="center">
                                <Typography>
                                    Disposisi   
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={{backgroundColor: "#e0e0e0", height: 222}}>
                            <Stack alignItems="center">
                                <Typography>
                                   Delegasi
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{backgroundColor: "#e0e0e0", height: 222}}>
                            <Stack alignItems="center">
                                <Typography>
                                    Digital Signature
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{backgroundColor: "#e0e0e0", height: 222}}>
                            <Stack alignItems="center">
                                <Typography>
                                    Proses Cepat
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{height: 700}}>

            </Box>
            <Box sx={{height: 700}}>

            </Box>
            <Box sx={{height: 350}}>

            </Box>
            <Box sx={{height: 700, backgroundColor: "#E42313"}}>

            </Box>
            <Box sx={{height: 370}}>

            </Box>
        </>
    )
}

export default Landing_page;