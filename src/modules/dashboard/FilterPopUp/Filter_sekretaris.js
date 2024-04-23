import React from "react";
import PropTypes from 'prop-types';
import { Button, Card, CardContent, Divider, Grid, IconButton, Popover, Stack, Typography } from '@mui/material';
import { X } from 'feather-icons-react';

export default function Filter_sekretaris({ open, onClose }) {

    const [statusFilter, setStatusFilter] = React.useState(null);

    const handleStatusFilter = (value) => {
      setStatusFilter(value);
    };
    return(
        <>
             <Popover
                open={open}
                // anchorEl={openFilter}
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
                                <Typography>Keaktifan</Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Button
                                        variant={statusFilter === 'Aktif' ? 'contained' : 'outlined'}
                                        onClick={() => handleStatusFilter('Aktif')}
                                        fullWidth
                                        >
                                        Aktif
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                        variant={statusFilter === 'Nonaktif' ? 'contained' : 'outlined'}
                                        onClick={() => handleStatusFilter('Nonaktif')}
                                        fullWidth
                                        >
                                        Nonaktif
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Button variant="contained" fullWidth>Cari Sekretaris</Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Popover>
        </>
    )
}

Filter_sekretaris.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };
