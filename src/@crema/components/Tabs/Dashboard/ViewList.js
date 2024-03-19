import React from 'react'
import { 
  List,
  ListItem,
  ListItemAvatar,
  Divider,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Stack,
  Typography,
  Box,
  AvatarGroup,
    } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import AtributeList from './AtributeList';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';
import CachedIcon from '@mui/icons-material/Cached';
import DoneIcon from '@mui/icons-material/Done';

const ViewList = ({isCollapsed}) => {

  const listData = [
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Komisaris',
      secondary:
        "Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center",
      date: '20 September 2024',
      status: 'Sedang',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Manager',
      secondary:
        "Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center",
      date: '10 September 2024',
      status: 'Tinggi',
    },
    // {
    //   avatarSrc: '/static/images/avatar/1.jpg',
    //   primary: 'Sekretaris',
    //   secondary:
    //     "Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center",
    //   date: '13 Oktober 2024',
    //   status: 'Sedang',
    // },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Bisnis Development',
      secondary:
        "Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center",
      date: '11 Januari 2024',
      status: 'Rendah',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Tinggi':
        return ['#E42313', '#FFBDAD'];
      case 'Sedang':
        return ['#FFB020', '#FFEFD2'];
      case 'Rendah':
        return ['#3366FF', '#D6E0FF'];
      default:
        return ['lightgrey', 'lightgrey'];
    }
  };

  return (
    <Accordion sx={{minWidth:"650px", height:"500px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                August - 2021
              </AccordionSummary>
              <AccordionDetails>
                {/* <List>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp"sx={{ bgcolor: "#E42313" }}>KW</Avatar>
                    </ListItemAvatar>
                      <AtributeList/>
                  </ListItem>
                  <Divider component="li" />
              
                  {/* LIST KEDUA *
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp"sx={{ bgcolor: "#E42313" }}>KW</Avatar>
                    </ListItemAvatar>
                      <AtributeList/>
                  </ListItem>
                  <Divider component="li" />
                </List> */}

                  <List>
                    {listData.map((item, index) => (
                      <React.Fragment key={index}>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar alt="Remy Sharp" sx={{ bgcolor: getStatusColor(item.status)[0] }}>{item.primary.substring(0, 2)}</Avatar>
                          </ListItemAvatar>
                          {/* <AtributeList {...item} /> */}

                          <Grid container direction="row"  >
                            <Grid item xs={10}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Typography style={{fontWeight:Fonts.BOLD, fontSize:"15px"}}>{item.primary}</Typography>
                                    <CachedIcon style={{fontSize:"20px"}}/>
                                    <Typography style={{fontSize:"12px", color:"#5C5E61"}}>2</Typography>
                                    <Box
                                      sx={{
                                      backgroundColor:getStatusColor(
                                          item.status,
                                        )[1], 
                                      color:getStatusColor(item.status)[0],
                                      width: 57,
                                      height: 20,
                                      borderRadius: 1,
                                      fontSize: '11px',
                                      lineHeight: '18px',
                                      textAlign: 'center'}}>
                                      {item.status}
                                    </Box>
                                </Stack>
                                <Typography style={{fontSize: "13px"}} color="#5C5E61">
                                    {item.secondary}
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
                      </React.Fragment>
                    ))}
                  </List>
              </AccordionDetails>
            </Accordion>
  )
}

export default ViewList;

ViewList.propTypes = {
  isCollapsed: PropTypes.bool,
};
