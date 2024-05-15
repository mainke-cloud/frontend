import React from "react";
import { Grid, Stack, Typography, Box, Badge, Avatar, Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types'; 

const StyledBadgeSekretaris = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#0F6EB5',
      color: 'white',
    },
  }));

const Sekretaris = ({ Profile, JobDesk, ID }) => {
    return(
        <Grid container sx={{margin: 3}}>
            <Grid item xs={3} sx={{borderBottom: "1px solid #B1B5BA"}}>
                <StyledBadgeSekretaris
                    overlap='circular'
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent="S"
                >
                    <Avatar src={Profile} sx={{border: 2, borderColor: '#0F6EB5', width: 46, height: 46}}/>
                </StyledBadgeSekretaris>
            </Grid>
            <Grid item xs={8} sx={{borderBottom: "1px solid #B1B5BA"}}>
                <Stack direction='column' spacing={2}>
                    <Typography variant='h3'>{JobDesk}</Typography>
                        <Box
                            sx={{
                              backgroundColor: '#A3E6CD',
                              height: '22px',
                              width: '48px',
                              borderRadius: 2,
                            }}
                        >
                            <Typography 
                                sx={{ 
                                    height: '22px',  
                                    marginLeft: 2, 
                                    color:'#317159'}}>
                                Aktif
                            </Typography>
                        </Box>
                        <Typography>{ID}</Typography>
                </Stack>
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