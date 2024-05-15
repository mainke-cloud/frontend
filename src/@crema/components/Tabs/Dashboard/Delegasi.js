import React from "react";
import { Grid, Box, Avatar, Badge, Stack, Typography, Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const StyledBadgeDelegasi = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#FFB068',
      color: 'white',
    },
  }));

const Delegasi = ({ Profile, JobDesk, ID, EndDate }) => {
    return(
        <Grid container sx={{margin: 3}}>
            <Grid item xs={3} sx={{borderBottom: "1px solid #B1B5BA"}}>
                <StyledBadgeDelegasi
                    overlap='circular'
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent="D"
                >
                    <Avatar src={Profile} sx={{border: 2, borderColor: '#FFB068', width: 46, height: 46}} />
                </StyledBadgeDelegasi>
                </Grid>
            <Grid item xs={7} sx={{borderBottom: "1px solid #B1B5BA"}}>
                <Stack direction='column' spacing={2}>
                    <Typography variant='h3'>{JobDesk}</Typography>
                    <Box
                        sx={{
                          backgroundColor: '#A3E6CD',
                          height: '22px',
                          width: '150px',
                          borderRadius: 2,
                        }}
                    >
                        <Typography sx={{ height: '18px', marginLeft: 2, color: '#317159' }}>
                            {"Aktif Sampai "+EndDate}
                        </Typography>
                    </Box>
                    <Typography>{ID}</Typography>
                </Stack>               
            </Grid>
            <Divider variant="middle" sx={{ mb: 4 }} />
        </Grid>
    )
};

Delegasi.propTypes = {
    Profile: PropTypes.string.isRequired,
    JobDesk: PropTypes.string.isRequired,
    ID: PropTypes.string.isRequired,
    EndDate: PropTypes.string.isRequired,
  };

export default Delegasi;