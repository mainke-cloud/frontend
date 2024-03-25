import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

const Add_Delegasi = () => {
    return (
        <>
            <Grid container sx={{padding: 3}}>
                <Grid item xs={12} sx={{margin: 5, padding: 2, marginBottom: 2}}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography variant="h2">Delegasi Saya</Typography>
                        <Box sx={{backgroundColor: '#E42313', padding: 2, borderRadius: 2}}>
                            <Typography sx={{color: '#FFFFFF'}}>Tambah Delegasi Baru</Typography>
                            {/* <img src */}
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
            </Grid>
        </>
    )
}

export default Add_Delegasi;