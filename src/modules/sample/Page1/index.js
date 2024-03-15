import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTab,
  activateTab,
  closeTab,
  closeAllTabs,
  reorderTab,
} from '../../../redux/actions/tabActon';
import { Box } from '@mui/material';
import { Tabs } from '@sinm/react-chrome-tabs';
import Button from '@mui/material/Button';
import AppDashboard from '@crema/components/AppDashboard';
import '../Page2/cobain.css';
import React from 'react';
import { 
  Box,
  Container,
  Stack,
  Pagination, 
  Grid,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Avatar,
  AvatarGroup,
  Typography,
  Paper,
  OutlinedInput,
  InputLabel,
  MenuItem,
  NativeSelect,
  FormControl,
  Select,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  IconButton,
  InputBase,
  Chip
 } from '@mui/material';
 import { Fonts } from '@crema/constants/AppEnums';
import CachedIcon from '@mui/icons-material/Cached';
import DoneIcon from '@mui/icons-material/Done';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchIcon from '@mui/icons-material/Search';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Page1 = () => {
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

  const handleAddTab = () => {
    dispatch(addTab(id, tabs));
  };

  const handleCloseAllTabs = () => {
    dispatch(closeAllTabs());
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
      <Box 
      sx={{ pl: 4 , gap: 2 }}
      >
        <Box>{tabs.find((tab) => tab.active)?.content}</Box>
      </Box>
    </>
  );
    // <>
    //   <h2>Sample page 1</h2>
    //   <Box sx={{ my: 2 }}>Ini ada di folder sample</Box>
    // </>
  

    <Paper sx={{ overflow: 'hidden', width:'70%', margin: '20px', padding: '20px'}}>
      <Grid container 
          direction="row" 
          justifyContent="space-between" 
          alignItems="flex-end"
          spacing={2}
          padding={2}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography style={{fontWeight:Fonts.BOLD, fontSize:'20px'}}>Berikut adalah list to-do hari ini:</Typography>
              {/* <Button variant="filled" disableElevation style={{fontSize: "15px", backgroundColor:"#FFBDAD", color:"#E42313", padding:"1px 1px"}}>20</Button> */}
              {/* <Chip label="20" sx={{color:'#FFFFFF', backgroundColor:"#474D66"}} /> */}
              <Box
                sx={{
                  color:'#FFFFFF', backgroundColor:"#474D66",
                  width: 33,
                  height: 19,
                  borderRadius: 3,
                  fontSize: '12px',
                  lineHeight: '18px',
                  textAlign: 'center'}}>
                20
              </Box>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
            <FormControl sx={{ m: 1, minWidth: 50, minHeight:30 }}>
              <Select
                defaultValue="List"
                value={view}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="List">List View</MenuItem>
                <MenuItem value="Table">Table View</MenuItem>
              </Select>
            </FormControl>
              <Box sx={{borderRadius: 2, border: '0.5px solid grey'}}>
                <FilterAltOutlinedIcon fontSize='medium' />
              </Box>
              <Box sx={{ width:'50%', height:"30px", display: 'flex', border: '0.5px solid grey', borderRadius: 2 }}>
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

      <Stack direction="row" spacing={1} alignItems="center">
        <Typography style={{fontSize:"15px"}}>Urgensi : </Typography>
        <Box
          sx={{
            backgroundColor:"#FFBDAD", color:"#E42313",
            width: 53,
            height: 20,
            borderRadius: 1,
            fontSize: '12px',
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
            fontSize: '12px',
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
            fontSize: '12px',
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
            fontSize: '12px',
            lineHeight: '18px',
            textAlign: 'center'}}>
          Didisposisikan
        </Box>
        {/* <Button variant="contained" disableElevation style={{fontSize: "10px", backgroundColor:"#FFBDAD", color:"#E42313", padding:"2px 2px"}}>Tinggi</Button>
        <Button variant="contained" disableElevation style={{fontSize: "10px", backgroundColor:"#FFEFD2", color:"#FFB020", padding:"2px 2px"}}>Sedang</Button>
        <Button variant="contained" disableElevation style={{fontSize: "10px", backgroundColor:"#D6E0FF", color:"#3366FF", padding:"2px 2px"}}>Rendah</Button>
        <Button variant="contained" disableElevation style={{fontSize: "10px", backgroundColor:"#DCF2EA", color:"#429777", padding:"2px 5px"}}>Didisposisikan</Button> */}
      </Stack>
        {/* LIST */}
        <Accordion sx={{minWidth:"700px", height:"500px", marginTop:"20px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            August - 2021
          </AccordionSummary>
          <AccordionDetails>
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp"sx={{ bgcolor: "#E42313" }}>KW</Avatar>
                </ListItemAvatar>
                <Stack spacing={1}>
                  <Grid 
                  container 
                  direction="row" 
                  justifyContent="space-between" 
                  alignItems="flex-end">
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography style={{fontWeight:Fonts.BOLD, fontSize:"15px"}}>Komisaris</Typography>
                        <CachedIcon style={{fontSize:"20px"}}/>
                        <Typography style={{fontSize:"12px", color:"#5C5E61"}}>2</Typography>
                        {/* <Button variant="contained" disableElevation style={{fontSize: "10px", backgroundColor:"#FFEFD2", color:"#FFB020", alignItems:"center", padding:"2px 2px"}}>Sedang</Button> */}
                        <Box
                          sx={{
                            backgroundColor:"#FFEFD2", color:"#FFB020",
                            width: 57,
                            height: 20,
                            borderRadius: 1,
                            fontSize: '12px',
                            lineHeight: '18px',
                            textAlign: 'center'}}>
                          Sedang
                        </Box>
                      </Stack>
                      <Typography style={{fontSize:"12px"}}>10.30 . 22 Sep</Typography>
                  </Grid>
                  <Typography style={{fontSize: "13px"}} color="#5C5E61">
                    Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center
                  </Typography>
                    <Grid 
                    container 
                    direction="row" 
                    justifyContent="space-between" 
                    alignItems="flex-end">
                      <Stack direction="row">
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
                        <Avatar alt="Remy Sharp" sx={{ width: 15, height: 15,  bgcolor: "#E42313"}} >KW</Avatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 15, height: 15}}/>
                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" sx={{ width: 15, height: 15}}/>
                      </AvatarGroup>
                      </Stack>
                      {/* <Button variant="contained" disableElevation style={{fontSize: "11px", backgroundColor:"#DCF2EA", color:"#429777", padding:"5px 5px"}}>Tandai Selesai <DoneIcon style={{fontSize:"small"}} /></Button> */}
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
                    </Grid>
                </Stack>
              </ListItem>
              <Divider variant="inset" component="li" />
              
              {/* LIST KEDUA */}
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" sx={{bgcolor: "#E42313"}} >KW</Avatar>
                </ListItemAvatar>
                <Stack spacing={1}>
                  <Grid 
                  container 
                  direction="row" 
                  justifyContent="space-between" 
                  alignItems="flex-end">
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography style={{fontWeight:Fonts.BOLD, fontSize:"15px"}}>Komisaris</Typography>
                        <CachedIcon style={{fontSize:"20px"}}/>
                        <Typography style={{fontSize:"12px", color:"#5C5E61"}}>2</Typography>
                        {/* <Button variant="contained" disableElevation style={{fontSize: "10px", backgroundColor:"#FFBDAD", color:"#E42313", padding:"2px 2px"}}>Tinggi</Button> */}
                        <Box
                          sx={{
                            backgroundColor:"#FFBDAD", color:"#E42313",
                            width: 53,
                            height: 20,
                            borderRadius: 1,
                            fontSize: '12px',
                            lineHeight: '18px',
                            textAlign: 'center'}}>
                          Tinggi
                        </Box>
                      </Stack>
                      <Typography style={{fontSize:"12px"}}>10.30 . 22 Sep</Typography>
                  </Grid>
                  <Typography style={{fontSize: "13px"}} color="#5C5E61">
                    Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center
                  </Typography>
                    <Grid 
                    container 
                    direction="row" 
                    justifyContent="space-between" 
                    alignItems="flex-end">
                      <Stack direction="row">
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
                        <Avatar alt="Remy Sharp" sx={{ width: 15, height: 15,  bgcolor: "#E42313"}} >KW</Avatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 15, height: 15}}/>
                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" sx={{ width: 15, height: 15}}/>
                      </AvatarGroup>
                      </Stack>
                      {/* <Button variant="contained" disableElevation style={{fontSize: "11px", backgroundColor:"#DCF2EA", color:"#429777", padding:"5px 5px"}}>Tandai Selesai <DoneIcon style={{fontSize:"small"}}/></Button> */}
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
                    </Grid>
                </Stack>
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </AccordionDetails>
        </Accordion>
        
        <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Pagination count={10} shape="rounded" />
        </Stack>
    </Paper>

);
};

export default Page1;


// import React from 'react';
// import { Paper, List, ListItem, ListItemText, Button, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: '#f7f7f7',
//   },
//   item: {
//     marginBottom: '10px',
//   },
//   button: {
//     margin: '10px',
//   },
// });

// const tasks = [
//   {
//     id: 1,
//     title: 'Komisaris',
//     description: 'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
//     urgency: 'Sedang',
//   },
//   // Add more tasks here
// ];

// const TaskList = () => {
//   const classes = useStyles();
  
//   return (
//     <Paper className={classes.root}>
//       <Typography variant="h6" component="h3">
//         Here is the to-do list for today:
//       </Typography>
//       <List>
//         {tasks.map((task) => (
//           <ListItem key={task.id} className={classes.item}>
//             <ListItemText
//               primary={task.title}
//               secondary={task.description}
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               className={classes.button}
//             >
//               Mark as Completed
//             </Button>
//           </ListItem>
//         ))}
//       </List>
//     </Paper>
//   );
// };

// export default TaskList;

{/* <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Komisaris"
              secondary={
                <Stack>
                <React.Fragment>
                  {"Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center"}
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Didisposisikan kepada 50 orang lain
                  </Typography>
                </React.Fragment>
                </Stack>
              }
            />
          </ListItem> */}