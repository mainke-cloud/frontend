import React from 'react';
import {   Box,
  Stack, 
  Grid,
  Typography,
  FormControl,
  IconButton,
  Select,
  MenuItem,
  InputAdornment,
  InputBase,
  Pagination
 } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import ViewList from './ViewList';
import AppCard from '@crema/components/AppCard';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const TodoList_Dashboard = () => {

  const [view, setView] = React.useState('');

  const handleChange = (event) => {
    setView(event.target.value);
  };

    return (
      <AppCard sx={{ height: '500px'}}>
      <Stack height={'100%'} width={'100%'} position={'relative'}>
      
      <Grid container 
        direction="row" 
        >
          <Grid item xs={8}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography style={{fontWeight:Fonts.BOLD, fontSize:'16px'}}>Berikut adalah list to-do hari ini:</Typography>
              <Box
                sx={{
                  color:'#FFFFFF', backgroundColor:"#474D66",
                  width: 33,
                  height: 18,
                  borderRadius: 3,
                  fontSize: '11px',
                  lineHeight: '16px',
                  textAlign: 'center'}}>
                20
              </Box>
            </Stack>
          </Grid>
          
          <Grid item xs={4}>
            <Stack direction="row" spacing={2} alignItems="center">
            <FormControl sx={{ m: 1, minWidth: 70 }}>
              <Select
                defaultValue="List"
                value={view}
                onChange={handleChange}
                displayEmpty
                startAdornment={
                  <InputAdornment position="start">
                    <FormatListBulletedIcon fontSize='small' />
                  </InputAdornment>
                }
                sx={{height:"25px", fontSize:'11px'}}
              >
                <MenuItem value="List" >List View</MenuItem>
                <MenuItem value="Table">Table View</MenuItem>
              </Select>
            </FormControl>
              <Box sx={{borderRadius: 2, border: '0.5px solid grey'}}>
                <FilterAltOutlinedIcon fontSize='small' />
              </Box>
              <Box sx={{ width:'40%', height:"25px", display: 'flex', border: '0.5px solid grey', borderRadius: 2 }}>
                <InputBase
                  placeholder='Search'
                  sx={{padding:'10px'}}
                />
                <IconButton alignItems="center" aria-label="search">
                  <SearchIcon fontSize='small' />
                </IconButton>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      
      <Stack direction="row" spacing={1} alignItems="center" marginY="10px">
        <Typography style={{fontSize:"15px"}}>Urgensi : </Typography>
        <Box
          sx={{
            backgroundColor:"#FFBDAD", color:"#E42313",
            width: 53,
            height: 20,
            borderRadius: 1,
            fontSize: '11px',
            lineHeight: '18px',
            textAlign: 'center'}}>
          Tinggi
        </Box>
        <Box
          sx={{
            backgroundColor:"#FFEFD2", color:"#FFB020",
            width: 57,
            height: 20,
            borderRadius: 1,
            fontSize: '11px',
            lineHeight: '18px',
            textAlign: 'center'}}>
          Sedang
        </Box>
        <Box
          sx={{
            backgroundColor:"#D6E0FF", color:"#3366FF",
            width: 55,
            height: 20,
            borderRadius: 1,
            fontSize: '11px',
            lineHeight: '18px',
            textAlign: 'center'}}>
          Rendah
        </Box>
        <Box
          sx={{
            backgroundColor:"#DCF2EA", color:"#429777",
            width: 93,
            height: 20,
            borderRadius: 1,
            fontSize: '11px',
            lineHeight: '18px',
            textAlign: 'center'}}>
          Didisposisikan
        </Box>
      </Stack>
      
      {/* <ViewList/> */}
      <ViewList/>
      
      <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Pagination count={10} shape="rounded" />
        <Typography>Page: 1</Typography>
      </Stack>
      </Stack>
    </AppCard>
    )
}

export default TodoList_Dashboard;