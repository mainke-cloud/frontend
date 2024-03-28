import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Stack, Tab, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import HeaderDetail from '@crema/components/HeaderDetail';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Table, TableBody, TableContainer, TableRow } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import AppScrollbar from '@crema/components/AppScrollbar';

import { Menu, Grid as IconGrid } from 'feather-icons-react';

const StyledTab = styled(Tab)(({ theme }) => ({
  borderRadius: '100px',
  backgroundColor: '#ffffff',
  color: '#5C5E61',
  indicatorColor: 'none',
  fontSize: '12px',
  textTransform: 'none',
  minHeight: 0,
  minWidth: 0,
  padding: '10px 26px',
  '&.MuiTabs-indicator': {
    display: 'none',
  },
  '&.Mui-selected': {
    backgroundColor: '#E42313',
    color: '#ffffff',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#EEF0F7',
    color: '#262829',
    fontSize: 16,
    fontWeight: 'bold',
    borderBottom: 'none',
  },
  [`&.${tableCellClasses.body}`]: {
    color: '#25282B',
    borderBottom: 'none',
  },
  '&.small': {
    fontSize: 14,
    fontWeight: 'regular',
  },
  '&.medium': {
    fontWeight: 'bold',
    fontSize: 16,
  },
}));

const pekerjaan = [
  {
    name: 'Tanggal Dikirim',
  },
  {
    name: 'No Surat',
  },
  {
    name: 'Dari',
  },
  {
    name: 'Kepada',
  },
  {
    name: 'Tembusan',
  },
];

const pekerjaan2 = [
  {
    name: 'Lampiran',
  },
  {
    name: 'Keterangan',
  },
  {
    name: 'Kode Unik',
  },
  {
    name: 'Scanner',
  },
];

const DetailScanSurat = ({props}) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box backgroundColor='#F7F8F9' minHeight='100vh' >
      <HeaderDetail nama='Detail Scan Surat' />
      <Box sx={{ padding: 8 }}>
        <Box
          backgroundColor='#FFFFFF'
          sx={{ padding: 8, borderRadius: '10px' }}
        >
          <TabContext value={value}>
            <Box
              sx={{
                border: '1px solid #D8D8D8',
                width: 'fit-content',
                borderRadius: '100px',
              }}
            >
              <TabList
                onChange={handleChange}
                indicatorColor='none'
                sx={{ minHeight: 0 }}
              >
                <StyledTab label='Detail Scan' value='1' />
                <StyledTab label='Lampiran' value='2' />
              </TabList>
            </Box>
            <TabPanel value='1' sx={{ paddingTop: '12px', paddingLeft: '0px' }}>
              <Grid container sx={{border:'1px solid #A7A7A7', borderRadius:'10px'}}>
                <Grid item xs={6}>
                  <TableContainer>
                    <Table aria-label='customized table'>
                      <TableBody>
                        {pekerjaan.map((row) => (
                          <TableRow key={row.name}>
                            <StyledTableCell
                              className='medium'
                              style={{ width: '40%' }}
                            >
                              {row.name}
                            </StyledTableCell>
                            <StyledTableCell
                              className='medium'
                              style={{ width: '2%', paddingRight: '0px' }}
                            >
                              :
                            </StyledTableCell>
                            <StyledTableCell
                              className='medium'
                              style={{ paddingLeft: '8px' }}
                            >
                              {row.name}
                            </StyledTableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
                <Grid item xs={6}>
                  <TableContainer>
                    <Table aria-label='customized table'>
                      <TableBody>
                        {pekerjaan2.map((row) => (
                          <TableRow key={row.name}>
                            <StyledTableCell
                              className='medium'
                              style={{ width: '40%' }}
                            >
                              {row.name}
                            </StyledTableCell>
                            <StyledTableCell
                              className='medium'
                              style={{ width: '2%', paddingRight: '0px' }}
                            >
                              :
                            </StyledTableCell>
                            <StyledTableCell
                              className='medium'
                              style={{ paddingLeft: '8px' }}
                            >
                              {row.name}
                            </StyledTableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel
              value='2'
              sx={{ paddingTop: '12px', paddingLeft: '0px' }}
            >
              <Box paddingX='16px' paddingY='24px' borderRadius='10px' border='1px solid #E0E0E0'>
                <Stack direction='row' justifyContent='space-between' paddingBottom='16px'>
                <Typography fontSize='16px' fontWeight='700'>
                  Lampiran
                </Typography>
                <Stack direction='row' columnGap='24px'>
                <Typography color='#0F6EB5'>
                  see more
                </Typography>
                <Menu/>
                <IconGrid/>
                </Stack>
                </Stack>
                <AppScrollbar
                            sx={{
                              height: '224px',
                              overflowY: 'auto',
                              border:'1px solid #E0E0E0',
                            }}
                            scrollToTop={false}
                          >

                          </AppScrollbar>
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Box>
  );
};

DetailScanSurat.propTypes = {
  props: PropTypes.shape({}),
};

export default DetailScanSurat;
