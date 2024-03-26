import React, { useState } from 'react';
import {
  Box,
  Stack,
  Grid,
  Typography,
  FormControl,
  IconButton,
  Select,
  MenuItem,
  InputAdornment,
  InputBase,
  Pagination,
} from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import ViewList from './ViewList';
import TableList from './TableList';
import AppCard from '@crema/components/AppCard';
import SearchIcon from '@mui/icons-material/Search';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Filter } from 'feather-icons-react';
import PropTypes from 'prop-types';
import AppScrollbar from '@crema/components/AppScrollbar';

const TodoList_Dashboard = (props) => {
  const { isCollapsed, setCollapsed } = props;
  const [selectedView, setSelectedView] = useState('List');

  const handleViewChange = (event) => {
    setSelectedView(event.target.value);
  };
  return (
    <AppCard sx={{ height: '500px' }}>
      <AppScrollbar>
        <Stack
        height={'100%'}
        width={'100%'}
        position={'relative'}
        >
          <Grid container direction='row'>
            <Grid item xs={8}>
              <Stack direction='row' spacing={2} alignItems='center'>
                <Typography
                  style={{ fontWeight: Fonts.BOLD, fontSize: '16px' }}
                >
                  Berikut adalah list to-do hari ini:
                </Typography>
                <Box
                  sx={{
                    color: '#FFFFFF',
                    backgroundColor: '#474D66',
                    width: 33,
                    height: 18,
                    borderRadius: 3,
                    fontSize: '11px',
                    lineHeight: '16px',
                    textAlign: 'center',
                  }}
                >
                  20
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={4}>
              <Stack direction='row' spacing={2} alignItems='center'>
                <FormControl sx={{ m: 1, minWidth: 70 }}>
                  <Select
                    value={selectedView}
                    onChange={handleViewChange}
                    displayEmpty
                    startAdornment={
                      <InputAdornment position='start'>
                        <FormatListBulletedIcon fontSize='small' />
                      </InputAdornment>
                    }
                    sx={{ height: '25px', fontSize: '11px' }}
                  >
                    <MenuItem value='List'>List View</MenuItem>
                    <MenuItem value='Table'>Table View</MenuItem>
                  </Select>
                </FormControl>
                <Box
                  sx={{
                    borderRadius: 2,
                    border: '0.5px solid grey',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2.5px',
                  }}
                >
                  <Filter size={20} />
                </Box>
                <Box
                  sx={{
                    width: '40%',
                    height: '25px',
                    display: 'flex',
                    border: '0.5px solid grey',
                    borderRadius: 2,
                  }}
                >
                  <InputBase placeholder='Search' sx={{ padding: '10px' }} />
                  <IconButton alignItems='center' aria-label='search'>
                    <SearchIcon fontSize='small' />
                  </IconButton>
                </Box>
              </Stack>
            </Grid>
          </Grid>
          <Stack direction='row' spacing={1} alignItems='center' marginY='10px'>
            <Typography style={{ fontSize: '15px' }}>Urgensi : </Typography>
            <Box
              sx={{
                backgroundColor: '#FFBDAD',
                color: '#E42313',
                width: 53,
                height: 20,
                borderRadius: 1,
                fontSize: '11px',
                lineHeight: '18px',
                textAlign: 'center',
              }}
            >
              Tinggi
            </Box>
            <Box
              sx={{
                backgroundColor: '#FFEFD2',
                color: '#FFB020',
                width: 57,
                height: 20,
                borderRadius: 1,
                fontSize: '11px',
                lineHeight: '18px',
                textAlign: 'center',
              }}
            >
              Sedang
            </Box>
            <Box
              sx={{
                backgroundColor: '#D6E0FF',
                color: '#3366FF',
                width: 55,
                height: 20,
                borderRadius: 1,
                fontSize: '11px',
                lineHeight: '18px',
                textAlign: 'center',
              }}
            >
              Rendah
            </Box>
            <Box
              sx={{
                backgroundColor: '#DCF2EA',
                color: '#429777',
                width: 93,
                height: 20,
                borderRadius: 1,
                fontSize: '11px',
                lineHeight: '18px',
                textAlign: 'center',
              }}
            >
              Didisposisikan
            </Box>
          </Stack>
          {selectedView === 'List' ? (
            <ViewList isCollapsed={isCollapsed} />
          ) : (
            <TableList isCollapsed={isCollapsed} />
          )}
          <Stack
            direction='row'
            spacing={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Pagination count={10} shape='rounded' />
            <Typography>Page: 1</Typography>
          </Stack>
        </Stack>
      </AppScrollbar>
    </AppCard>
  );
};

TodoList_Dashboard.propTypes = {
  isCollapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
};

export default TodoList_Dashboard;
