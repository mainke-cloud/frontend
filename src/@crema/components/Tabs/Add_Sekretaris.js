import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
// import Add from '../../../assets/'

const Add_Sekretaris = () => {
    return (
        <>
            <Grid container sx={{padding: 3}}>
                <Grid item xs={12} sx={{margin: 5, paddingX: 2, marginBottom: 2}}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography variant="h2">Sekretaris Saya</Typography>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Box sx={{backgroundColor: '#FFFFFF', border: '1px solid #E42313' , borderRadius: 2, padding: 2}}> 
                                <Typography sx={{color: '#E42313'}}>Urutkan</Typography>
                            </Box>
                            <Box sx={{backgroundColor: '#E42313', padding: 2, borderRadius: 2}}>
                                <Typography sx={{color: '#FFFFFF'}}>Tambah Sekretaris Baru</Typography>
                                {/* <img src */}
                            </Box>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
            </Grid>
        </>
    )
}

export default Add_Sekretaris;