import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';

import {
  Button,
  Modal,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Stack,
  IconButton,
  Table,
  TableHead,
  TableContainer,
  Paper,
  TableCell,
  Radio,
  TableRow,
  TableBody,
  Checkbox,
  TableFooter,
  Divider,
} from '@mui/material';

import { X } from 'feather-icons-react';

import { buttonClasses, TabsList, Tabs, Tab, tabClasses } from '@mui/base';

const ComposeMail = ({ isComposeMail, onCloseComposeMail }) => {
  const StyledTabsList = styled(TabsList)(
    ({ theme }) => `
    min-width: 400px;
    border-radius: 50px;
    border: 1px solid #D8D8D8;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    `,
  );

  const StyledTab = styled(Tab)`
    color: #5c5e61;
    cursor: pointer;
    background-color: transparent;
    width: 100%;
    padding: 10px;
    margin: 6px;
    border: none;
    border-radius: 50px;
    display: flex;
    justify-content: center;

    &.${tabClasses.selected} {
      background-color: #e42313;
      color: #ffffff;
    }

    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  const [selectedRow, setSelectedRow] = useState([]);
  const [isGridVisible, setIsGridVisible] = useState(false);

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    const updatedSelectedRow = checked ? data.map((_, index) => index) : [];
    setSelectedRow(updatedSelectedRow);
    setIsGridVisible(checked && updatedSelectedRow.length > 0);

    const selectedItems = checked ? data : [];

    setSelectedData(selectedItems);
  };

  const [selectedData, setSelectedData] = useState([]);

  const handleRadioChange = (index) => {
    let updatedSelectedRow;
    if (selectedRow.includes(index)) {
      updatedSelectedRow = selectedRow.filter((item) => item !== index);
    } else {
      updatedSelectedRow = [...selectedRow, index];
    }
    setSelectedRow(updatedSelectedRow);
    setIsGridVisible(updatedSelectedRow.length > 0);

    const selectedItem = data[index];

    setSelectedData((prevSelectedData) => [...prevSelectedData, selectedItem]);
  };

  const data = [
    { column1: 'Data 1 Column 1', column2: 'Data 1 Column 2' },
    { column1: 'Data 2 Column 1', column2: 'Data 2 Column 2' },
    { column1: 'Data 1 Column 1', column2: 'Data 1 Column 2' },
    { column1: 'Data 2 Column 1', column2: 'Data 2 Column 2' },
    { column1: 'Data 1 Column 1', column2: 'Data 1 Column 2' },
    { column1: 'Data 2 Column 1', column2: 'Data 2 Column 2' },
    { column1: 'Data 1 Column 1', column2: 'Data 1 Column 2' },
    { column1: 'Data 2 Column 1', column2: 'Data 2 Column 2' },
    { column1: 'Data 1 Column 1', column2: 'Data 1 Column 2' },
    { column1: 'Data 2 Column 1', column2: 'Data 2 Column 2' },
    { column1: 'Data 1 Column 1', column2: 'Data 1 Column 2' },
    { column1: 'Data 2 Column 1', column2: 'Data 2 Column 2' },
  ];

  return (
    <Modal
      open={isComposeMail}
      onClose={onCloseComposeMail}
      aria-labelledby='compose-mail-modal'
      aria-describedby='compose-mail-form'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        sx={{
          backgroundColor: 'white',
          maxWidth: 1200,
          maxHeight: 800,
          overflow: 'auto',
          bgcolor: 'background.paper',
          borderRadius: 8,
        }}
      >
        <Grid item xs={9}>
          <Box
            style={{
              padding: 20,
              border: '2px solid #000',
              borderRadius: 8,
              outline: 'none',
            }}
          >
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
            >
              <Typography variant='h2' id='compose-mail-modal'>
                Compose Mail
              </Typography>
              <IconButton onClick={onCloseComposeMail}>
                <X />
              </IconButton>
            </Stack>
            <Tabs defaultValue={0}>
              <StyledTabsList>
                <StyledTab value={0}>Jabatan</StyledTab>
                <StyledTab value={1}>Karyawan</StyledTab>
                <StyledTab value={2}>Bawahan</StyledTab>
                <StyledTab value={3}>Personal</StyledTab>
              </StyledTabsList>
            </Tabs>
            <Box sx={{ marginTop: 2 }}>
              <Checkbox onChange={handleCheckboxChange} /> Pilih Semua
            </Box>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer style={{ maxHeight: 400 }}>
                <Table stickyHeader aria-label='sticky table'>
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>Column 1</TableCell>
                      <TableCell>Column 2</TableCell>
                      <TableCell>Column 1</TableCell>
                      <TableCell>Column 2</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Radio
                            checked={selectedRow.includes(index)}
                            onClick={() => handleRadioChange(index)}
                          />
                        </TableCell>
                        <TableCell>{row.column1}</TableCell>
                        <TableCell>{row.column2}</TableCell>
                        <TableCell>{row.column1}</TableCell>
                        <TableCell>{row.column2}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Divider />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  padding: 2,
                }}
              >
                <Button variant='contained' color='primary'>
                  Action 1
                </Button>
                <Button
                  variant='contained'
                  color='secondary'
                  style={{ marginLeft: '10px' }}
                >
                  Action 2
                </Button>
              </Box>
            </Paper>
          </Box>
        </Grid>
        {isGridVisible && (
          <Grid item xs={3}>
            <Box
              style={{
                padding: 20,
                border: '2px solid #000',
                borderRadius: 8,
                outline: 'none',
              }}
            >
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
              >
                <Typography variant='h2' id='compose-mail-modal'>
                  Compose Mail
                </Typography>
                <Button onClick={onCloseComposeMail}>Close</Button>
              </Stack>
              <List>
                {selectedData.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={item.column1}
                      secondary={item.column2}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        )}
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
