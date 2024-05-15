import React from "react";
import PropTypes from 'prop-types';
import { Button, Card, CardContent, Divider, Grid, IconButton, Popover, Stack, Typography } from '@mui/material';
import { X } from 'feather-icons-react';

export default function Filter_delegasi({ open, onClose }) {
    const [dateFilter, setDateFilter] = React.useState(null);

    const handleDateFilter = (value) => {
      setDateFilter(value);
    };
    return(
        <>
             <Popover
                open={open}
                onClose={onClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{
                    '& .MuiPopover-paper': {
                    width: 450,
                    },
                }}
                >
                    <Card>
                        <CardContent>
                            <Grid container alignItems='center'>
                                <Grid item xs={11}>
                                <Typography>Urut Berdasarkan</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                <IconButton onClick={onClose}>
                                    <X />
                                </IconButton>
                                </Grid>
                            </Grid>
                            <Divider />
                            <Stack alignItems='start' gap={4}>
                                <Typography>Tanggal Habis</Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Button
                                        variant={dateFilter === 'Terdekat' ? 'contained' : 'outlined'}
                                        onClick={() => handleDateFilter('Terdekat')}
                                        fullWidth
                                        >
                                        Terdekat
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                        variant={dateFilter === 'Terjauh' ? 'contained' : 'outlined'}
                                        onClick={() => handleDateFilter('Terjauh')}
                                        fullWidth
                                        >
                                        Terjauh
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Button variant="contained" fullWidth>Cari Delegasi</Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Popover>
        </>
    )
}

Filter_delegasi.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };
