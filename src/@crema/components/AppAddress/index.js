import React from 'react';
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
  Checkbox as MuiICheckbox,
} from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { DataGrid } from '@mui/x-data-grid';

import { buttonClasses, TabsList, Tabs, Tab, tabClasses } from '@mui/base';

const ComposeMail = ({ isComposeMail, onCloseComposeMail }) => {
  function createData(name, calories, fat, carbs, protein) {
    return { id: name, name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const CircularCheckbox = styled(MuiICheckbox)`
    .MuiIconButton-root {
      border-radius: 50%;
      width: 20px;
      height: 20px;
    }
  `;
  // const columns = [
  //   { field: 'id', headerName: 'ID', width: 70 },
  //   { field: 'firstName', headerName: 'First name', width: 130 },
  //   { field: 'lastName', headerName: 'Last name', width: 130 },
  //   {
  //     field: 'age',
  //     headerName: 'Age',
  //     type: 'number',
  //     width: 90,
  //   },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   },
  // ];

  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ];

  const StyledTab = styled(Tab)`
    color: #fff;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    background-color: transparent;
    width: 100%;
    padding: 10px 12px;
    margin: 6px 6px;
    border: none;
    border-radius: 50px;
    display: flex;
    justify-content: center;

    &.${tabClasses.selected} {
      background-color: #fff;
      color: blue;
    }

    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  const StyledTabsList = styled(TabsList)(
    ({ theme }) => `
    min-width: 400px;
    background-color: blue;
    border-radius: 50px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    `,
  );
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
            <h2 id='compose-mail-modal'>Compose Mail</h2>
            <Tabs defaultValue={0}>
              <StyledTabsList>
                <StyledTab value={0}>My account</StyledTab>
                <StyledTab value={1}>Profile</StyledTab>
                <StyledTab value={2}>Language</StyledTab>
              </StyledTabsList>
            </Tabs>
            {/* <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                // initialState={{
                //   pagination: {
                //     paginationModel: { page: 0, pageSize: 5 },
                //   },
                // }}
                // pageSizeOptions={[5, 10]}
                //     checkboxSelection
              />
            </div> */}
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={[
                  {
                    field: 'id',
                    headerName: 'ID',
                    width: 70,
                    sortable: false,
                    hide: true,
                  },
                  {
                    field: 'name',
                    headerName: 'Dessert (100g serving)',
                    width: 200,
                  },
                  { field: 'calories', headerName: 'Calories', width: 130 },
                  { field: 'fat', headerName: 'Fat (g)', width: 130 },
                  { field: 'carbs', headerName: 'Carbs (g)', width: 130 },
                  { field: 'protein', headerName: 'Protein (g)', width: 130 },
                ]}
                checkboxSelection
                components={{
                  Checkbox: CircularCheckbox,
                }}
              />
            </div>
            <Button onClick={onCloseComposeMail}>Close</Button>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            style={{
              padding: 20,
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
            <Button onClick={onCloseComposeMail}>Close</Button>
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
