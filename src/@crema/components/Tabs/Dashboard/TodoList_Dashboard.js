import React from 'react';
import {   Box,
  Container,
  Stack, 
  Grid,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemAvatar,
  Divider,
  Avatar,
  AvatarGroup,
  Typography,
  Paper,
  InputLabel,
  NativeSelect,
  FormControl} from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import CachedIcon from '@mui/icons-material/Cached';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TodoList_Dashboard = () => {
    return (
        <Paper sx={{ overflow: 'hidden', width:'70%', margin: '20px', padding: '20px'}}>
        <Grid container 
            direction="row" 
            justifyContent="space-between" 
            alignItems="flex-end"
            spacing={2}
            padding={2}
            >
              <Stack direction="row" spacing={2}>
                <Typography style={{fontWeight:Fonts.BOLD, fontSize:'15px'}}>Berikut adalah list to-do hari ini:</Typography>
                <Button variant="contained" disableElevation style={{fontSize: "10px", backgroundColor:"#FFBDAD", color:"#E42313"}}>20</Button>
              </Stack>

              <Stack direction="row" spacing={2}>
                <Typography >Test</Typography>
                <Typography >Test</Typography>
                <Typography >Test</Typography>
              </Stack>
        </Grid>

        <Stack direction="row" spacing={1}>
          <Typography style={{fontSize:"15px"}}>Urgensi : </Typography>
          <Button variant="contained" disableElevation style={{fontSize: "10px", backgroundColor:"#FFBDAD", color:"#E42313"}}>Tinggi</Button>
          <Button variant="contained" disableElevation style={{fontSize: "10px", backgroundColor:"#FFEFD2", color:"#FFB020"}}>Sedang</Button>
          <Button variant="contained" disableElevation style={{fontSize: "10px", backgroundColor:"#D6E0FF", color:"#3366FF"}}>Rendah</Button>
          <Button variant="contained" disableElevation style={{fontSize: "10px", backgroundColor:"#DCF2EA", color:"#429777"}}>Didisposisikan</Button>
        </Stack>

        <Box>
          <FormControl sx={{marginLeft:"20px", width:'70%'}}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
              }}
            >
              <option value={10}>June - 2021</option>
              <option value={20}>September - 2021</option>
              <option value={30}>August - 2021</option>
            </NativeSelect>
          </FormControl>

          {/* LIST */}
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start" >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <Stack spacing={1}>
                <Grid 
                container 
                direction="row" 
                justifyContent="space-between" 
                alignItems="flex-end">
                    <Stack direction="row" spacing={1}>
                      <Typography style={{fontWeight:Fonts.BOLD, fontSize:"15px"}}>Komisaris</Typography>
                      <CachedIcon style={{fontSize:"20px"}}/>
                      <Typography style={{fontSize:"12px", color:"#5C5E61"}}>2</Typography>
                      <Button variant="contained" disableElevation style={{fontSize: "10px", backgroundColor:"#FFEFD2", color:"#FFB020"}}>Sedang</Button>
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
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 15, height: 15}} />
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 15, height: 15}}/>
                      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" sx={{ width: 15, height: 15}}/>
                    </AvatarGroup>
                    </Stack>
                    <Button variant="contained" disableElevation style={{fontSize: "11px", backgroundColor:"#DCF2EA", color:"#429777"}}>Tandai Selesai <DoneIcon style={{fontSize:"small"}} /></Button>
                  </Grid>
              </Stack>
            </ListItem>
            <Divider variant="inset" component="li" />
            
            {/* LIST KEDUA */}
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <Stack spacing={1}>
                <Grid 
                container 
                direction="row" 
                justifyContent="space-between" 
                alignItems="flex-end">
                    <Stack direction="row" spacing={1}>
                      <Typography style={{fontWeight:Fonts.BOLD, fontSize:"15px"}}>Komisaris</Typography>
                      <CachedIcon style={{fontSize:"20px"}}/>
                      <Typography style={{fontSize:"12px", color:"#5C5E61"}}>2</Typography>
                      <Button variant="contained" disableElevation style={{fontSize: "10px", backgroundColor:"#FFBDAD", color:"#E42313"}}>Tinggi</Button>
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
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 15, height: 15}} />
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 15, height: 15}}/>
                      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" sx={{ width: 15, height: 15}}/>
                    </AvatarGroup>
                    </Stack>
                    <Button variant="contained" disableElevation style={{fontSize: "11px", backgroundColor:"#DCF2EA", color:"#429777"}}>Tandai Selesai <DoneIcon style={{fontSize:"small"}}/></Button>
                  </Grid>
              </Stack>
            </ListItem>
            <Divider variant="inset" component="li" />

          </List>
          <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonGroup variant="Text" aria-label="Basic button group">
              <Button><ArrowBackIosIcon style={{fontSize:"small"}}/></Button>
              <Button>1</Button>
              <Button>2</Button>
              <Button>...</Button>
              <Button>99</Button>
              <Button><ArrowForwardIosIcon style={{fontSize:"small"}}/></Button>
              <Button>Page : 1</Button>
            </ButtonGroup>
          </Container>
        </Box>
      </Paper>
    )
}

export default TodoList_Dashboard;