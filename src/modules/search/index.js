import React from 'react';
import {
  Box,
  Stack,
  Grid,
  IconButton,
  InputBase,
  Divider,
  TextField,
  Typography,
  Paper,
  Chip,
  Button
} from '@mui/material';
import PersonPinCircle from '@mui/icons-material/PersonPinCircle';
import AppScrollbar from '@crema/components/AppScrollbar';
import AppCard from '@crema/components/AppCard';
import SearchIcon from '@mui/icons-material/Search';
import TableList from './TableList';
import { Filter } from 'feather-icons-react';
// import Search from 'feather-icons-react';

function SearchPage() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#F7F8F9',
          height: 250,
          display: 'flex',
          justifyContent: 'center',
          borderBottom: '1px solid #B1B5BA',
        }}
      >
        <Stack spacing={6} sx={{ width: '60%', marginTop: 20 }}>
          <Box
            sx={{
              height: '40px',
              border: '1px solid #B1B5BA',
              display: 'flex',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor: 'white',
            }}
          >
            <InputBase
              placeholder='Cari...'
              sx={{ padding: '20px', width: '100%' }}
            />
            <IconButton>
              <SearchIcon fontSize='medium' />
            </IconButton>
          </Box>
          <Box
            sx={{
              height: '40px',
              border: '1px solid #D8D8D8',
              display: 'flex',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor: 'white',
            }}
          >
            <Grid container>
              <Grid item xs={2.4}>
                {/* <Box backgroundColor='blue' sx={{alignItems:'center'}}> */}
                  <Typography sx={{ textAlign: 'center', color:'#5C5E61'}}>Semua</Typography>
                {/* </Box> */}
              </Grid>
              <Grid item xs={2.4}>
                <Typography sx={{ textAlign: 'center', color:'#5C5E61'}}>Surat Masuk</Typography>

              </Grid>
              <Grid item xs={2.4}>
                <Typography sx={{ textAlign: 'center', color:'#5C5E61'}}>Perlu Tindakan Lanjut</Typography>

              </Grid>
              <Grid item xs={2.4}>
                <Typography sx={{ textAlign: 'center', color:'#5C5E61'}}>Disposisi</Typography>

              </Grid>
              <Grid item xs={2.4}>
                <Typography sx={{ textAlign: 'center', color:'#5C5E61'}}>Surat Terkirim</Typography>

              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Box>
      <Box sx={{padding:10}}>
        <Grid container justifyContent='space-between'marginBottom={5}>
          <Typography>Semua (200 Hasil)</Typography>
          {/* <Chip label="Filter" endIcon={<Filter />}/> */}
          {/* <Button
                endIcon={<Filter />}
                backgroundColor ="#E42313"
              >Filter</Button> */}
          <Box
            sx={{
              backgroundColor: '#E42313',
              color:"#FFFFFF",
              cursor: 'pointer',
              width: '90px',
              height: '30px',
              textAlign: 'center',
              borderRadius: 5,
              lineHeight:'28px'
            }}
            >
            Filter <Filter size={16}/>
          </Box>
        </Grid>
        <TableList/>
      </Box>
      {/* <TableList/> */}
    </>
  );
}

export default SearchPage;
