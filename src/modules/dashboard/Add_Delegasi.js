import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Add from '../../assets/Dashboard/Plus_icon.png'

const Add_Delegasi = () => {
    return (
        <>
            <Box sx={{backgroundColor: '#D9DDE3', padding: 5, height: '100vh'}}>
                <Box sx={{borderRadius: 1, backgroundColor: '#FFFFFF'}}>
                    <Grid container sx={{padding: 3}}>
                        <Grid item xs={12} sx={{margin: 5, paddingX: 2, marginBottom: 2}}>
                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                                <Typography variant="h2">Delegasi Saya</Typography>
                                <Box sx={{backgroundColor: '#E42313', padding: 2, borderRadius: 2}}>
                                    <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                                        <Typography sx={{color: '#FFFFFF'}}>Tambah Delegasi Baru</Typography>
                                        <img src={Add} style={{width: 20, height: 20}}/>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Add_Delegasi;