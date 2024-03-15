import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  activateTab,
  closeTab,
  reorderTab,
} from '../../../redux/actions/tabActon';
import { Box } from '@mui/material';
import { Tabs } from '@sinm/react-chrome-tabs';
import '../Page2/cobain.css';
import React from 'react';
import { Box, Stack, Grid, IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Divider,
  Avatar,
  AvatarGroup,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Pagination,
  MenuItem,
  FormControl,
  InputBase,
  InputAdornment,
  Select } from '@mui/material';
import AppCard from '@crema/components/AppCard';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import { Fonts } from '@crema/constants/AppEnums';
import CachedIcon from '@mui/icons-material/Cached';
import DoneIcon from '@mui/icons-material/Done';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Page2 = () => {
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const id = useSelector((state) => state.tab.idCounter);

  const handleTabClose = (tabId) => {
    dispatch(closeTab(tabId, tabs));
  };

  const handleTabReorder = (tabId, fromIndex, toIndex) => {
    dispatch(reorderTab(tabId, fromIndex, toIndex, tabs));
  };

  const handleTabActive = (tabId) => {
    dispatch(activateTab(tabId, tabs));
  };


  const [view, setView] = React.useState('');

  const handleChange = (event) => {
    setView(event.target.value);
  };

  return (
    <>
      <Box>
        <Tabs
          darkMode={false}
          onTabClose={handleTabClose}
          onTabReorder={handleTabReorder}
          onTabActive={handleTabActive}
          tabs={tabs}
        />
      </Box>
      <Box>
        <Box>{tabs.find((tab) => tab.active)?.content}</Box>
      </Box>
    </>
    <Grid container columnSpacing={5} height={'100vh'}>
      <Grid item xs={9}>
        <Stack spacing={5}>
          {/* Card 1 */}
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={5} alignItems={'center'}>
            <Stack flex={1}>
              <AppCard sx={{ backgroundColor: 'grey' }}>content 1</AppCard>
            </Stack>
            <Stack flex={1}>
              <AppCard sx={{ backgroundColor: 'grey' }}>content 2</AppCard>
            </Stack>
            <Stack flex={1}>
              <AppCard sx={{ backgroundColor: 'grey' }}>content 3</AppCard>
            </Stack>
            <Stack spacing={2}>
              <IconButton sx={{ backgroundColor: 'grey', width: 20, height: 20 }}>
                <PersonPinCircleIcon />
              </IconButton>
              <IconButton sx={{ backgroundColor: 'grey', width: 20, height: 20 }}>
                <PersonPinCircleIcon />
              </IconButton>
            </Stack>
          </Stack>

          {/* Card 2 */}
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <AppCard>1</AppCard>
            <AppCard>2</AppCard>
            <AppCard>3</AppCard>
          </Stack>

          {/* Card 3 */}
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
            <Accordion sx={{minWidth:"700px", height:"500px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                August - 2021
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp"sx={{ bgcolor: "#E42313" }}>KW</Avatar>
                    </ListItemAvatar>
                      <Grid 
                      container 
                      direction="row" 
                      >
                        <Grid item xs={10}>
                          <Stack direction="row" spacing={1} alignItems="center">
                            <Typography style={{fontWeight:Fonts.BOLD, fontSize:"15px"}}>Komisaris</Typography>
                            <CachedIcon style={{fontSize:"20px"}}/>
                            <Typography style={{fontSize:"12px", color:"#5C5E61"}}>2</Typography>
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
                          </Stack>
                          <Typography style={{fontSize: "13px"}} color="#5C5E61">
                            Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center
                          </Typography>

                          <Stack direction="row" alignItems="center" marginTop={4}>
                            <Typography
                              sx={{ 
                              display: 'inline', 
                              fontSize: "11px"}}
                              component="span"
                              color="text.primary"
                            >
                              Didisposisikan kepada 50 orang lain
                            </Typography>
                            <AvatarGroup max={4}>
                              <Avatar alt="Remy Sharp" sx={{ width: 15, height: 15,  bgcolor: "#E42313", fontSize:"7px"}} >KW</Avatar>
                              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 15, height: 15}}/>
                              <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" sx={{ width: 15, height: 15}}/>
                            </AvatarGroup>
                          </Stack>
                        </Grid>
                        <Grid item xs={2} >
                          <Stack spacing={9}>
                            <Typography style={{fontSize:"12px"}}>10.30 . 22 Sep</Typography>
                            <Box
                              sx={{
                                backgroundColor:"#DCF2EA", color:"#429777",
                                width: 112,
                                height: 22,
                                borderRadius: 1,
                                fontSize: '12px',
                                lineHeight: '20px',
                                textAlign: 'center',}}>
                              Tandai Selesai <DoneIcon style={{fontSize:"small"}}/>
                            </Box>
                          </Stack>
                        </Grid>
                      </Grid>
                  </ListItem>
                  <Divider component="li" />
                  
                  {/* LIST KEDUA */}
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp"sx={{ bgcolor: "#E42313" }}>KW</Avatar>
                    </ListItemAvatar>
                      <Grid 
                      container 
                      direction="row" 
                      >
                        <Grid item xs={10}>
                          <Stack direction="row" spacing={1} alignItems="center">
                            <Typography style={{fontWeight:Fonts.BOLD, fontSize:"15px"}}>Komisaris</Typography>
                            <CachedIcon style={{fontSize:"20px"}}/>
                            <Typography style={{fontSize:"12px", color:"#5C5E61"}}>2</Typography>
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
                          </Stack>
                          <Typography style={{fontSize: "13px"}} color="#5C5E61">
                            Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center
                          </Typography>

                          <Stack direction="row" alignItems="center" marginTop={4}>
                            <Typography
                              sx={{ 
                              display: 'inline', 
                              fontSize: "11px"}}
                              component="span"
                              color="text.primary"
                            >
                              Didisposisikan kepada 50 orang lain
                            </Typography>
                            <AvatarGroup max={4}>
                              <Avatar alt="Remy Sharp" sx={{ width: 15, height: 15,  bgcolor: "#E42313", fontSize:"7px"}} >KW</Avatar>
                              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 15, height: 15}}/>
                              <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" sx={{ width: 15, height: 15}}/>
                            </AvatarGroup>
                          </Stack>
                        </Grid>
                        <Grid item xs={2} >
                          <Stack spacing={9}>
                            <Typography style={{fontSize:"12px"}}>10.30 . 22 Sep</Typography>
                            <Box
                              sx={{
                                backgroundColor:"#DCF2EA", color:"#429777",
                                width: 112,
                                height: 22,
                                borderRadius: 1,
                                fontSize: '12px',
                                lineHeight: '20px',
                                textAlign: 'center',}}>
                              Tandai Selesai <DoneIcon style={{fontSize:"small"}}/>
                            </Box>
                          </Stack>
                        </Grid>
                      </Grid>
                  </ListItem>
                  <Divider component="li" />
                </List>
              </AccordionDetails>
            </Accordion>
            
            <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Pagination count={10} shape="rounded" />
              <Typography>Page: 1</Typography>
            </Stack>
            </Stack>
          </AppCard>
        </Stack>
      </Grid>
      <Grid item xs={3} height={'100%'}>
        <Stack height={'100%'} spacing={5}>
          <AppCard sx={{ height: '50%', backgroundColor: 'grey' }}></AppCard>
          <AppCard sx={{ height: '50%', backgroundColor: 'grey' }}></AppCard>
        </Stack>
      </Grid>
  </Grid>
  );
};

export default Page2;
