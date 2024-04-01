import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const ComposeMail = ({ isComposeMail, onCloseComposeMail }) => {
  return (
    <Modal
      open={isComposeMail}
      onClose={onCloseComposeMail}
      aria-labelledby='compose-mail-modal'
      aria-describedby='compose-mail-form'
    >
      <Grid
        container
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          
          borderRadius: 8,
          outline: 'none',
        }}
      >
        <Grid item xs={10}>
          <Box
            style={{
              backgroundColor: 'white',
              padding: 20, // Perbesar padding untuk memperbesar box
              border: '2px solid #000',
              borderRadius: 8,
              outline: 'none',
            }}
          >
            <h2 id='compose-mail-modal'>Compose Mail</h2>
            <List>
              <ListItem>
                <ListItemText primary='Item 1' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Item 2' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Item 3' />
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            style={{
              backgroundColor: 'white',
              padding: 20, // Perbesar padding untuk memperbesar box
              border: '2px solid #000',
              borderRadius: 8,
              outline: 'none',
            }}
          >
            <h2 id='compose-mail-modal'>Compose Mail</h2>
            <List>
              <ListItem>
                <ListItemText primary='Item 1' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Item 2' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Item 3' />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default ComposeMail;

ComposeMail.defaultProps = {
  connection: null,
};

ComposeMail.propTypes = {
  isComposeMail: PropTypes.bool.isRequired,
  onCloseComposeMail: PropTypes.func.isRequired,
};
