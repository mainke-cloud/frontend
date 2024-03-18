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
    } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AtributeList from './AtributeList';

const ViewList = () => {
  return (
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
                      <AtributeList/>
                  </ListItem>
                  <Divider component="li" />
                  
                  {/* LIST KEDUA */}
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp"sx={{ bgcolor: "#E42313" }}>KW</Avatar>
                    </ListItemAvatar>
                      <AtributeList/>
                  </ListItem>
                  <Divider component="li" />
                </List>
              </AccordionDetails>
            </Accordion>
  )
}

export default ViewList;
