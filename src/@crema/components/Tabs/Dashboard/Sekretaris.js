import React from "react";
import { Grid, Stack, Typography, Box, Button, Badge, Avatar, Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types'; // Import PropTypes
import AppCard2 from "@crema/components/AppCard/AppCard2";

const StyledBadgeSekretaris = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#0F6EB5',
      color: 'white',
    },
  }));

const Sekretaris = ({ Profile, JobDesk, ID }) => {
    return(
        <Grid container sx={{margin: 3}}>
            <Grid item xs={3}>
                <StyledBadgeSekretaris
                    overlap='circular'
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent="S"
                >
                    <Avatar src={Profile} sx={{border: 2, borderColor: '#0F6EB5', width: 46, height: 46}}/>
                </StyledBadgeSekretaris>
            </Grid>
            <Grid item xs={6}>
                <Stack direction='column' spacing={2}>
                    <Typography variant='h3'>{JobDesk}</Typography>
                        <Box
                            sx={{
                              backgroundColor: '#A3E6CD',
                              height: '22px',
                              weight: '44px',
                            }}
                        >
                            <Typography sx={{ height: '22px', weight: '44px', marginLeft: 2 }}>
                                Aktif
                            </Typography>
                        </Box>
                        <Typography>{ID}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={11}>
                <AppCard2
                    sx={{ backgroundColor: '#FFEFD2', color: 'black', padding: 2 }}

                >
                    <Typography>Atur Keaktifan</Typography>
                </AppCard2>
            </Grid>
            <Divider variant="middle" sx={{ mb: 4 }} />
        </Grid>
    )
}

Sekretaris.propTypes = {
    Profile: PropTypes.string.isRequired,
    JobDesk: PropTypes.string.isRequired,
    ID: PropTypes.string.isRequired,
  };

export default Sekretaris;