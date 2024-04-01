import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import HeaderDetail from '@crema/components/HeaderDetail';
import { Table, TableBody, TableContainer, TableRow } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import AppScrollbar from '@crema/components/AppScrollbar';

import { Menu, Grid as IconGrid } from 'feather-icons-react';
import MiniTab from '@crema/components/MiniTab';

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

const DetailScanSurat = ({ props }) => {
  const DetailScan = () => {
    return (
      <Grid
        container
        sx={{ border: '1px solid #A7A7A7', borderRadius: '10px' }}
      >
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
    );
  };

  const Lampiran = () => {
    return (
      <Box
        paddingX='16px'
        paddingY='24px'
        borderRadius='10px'
        border='1px solid #E0E0E0'
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          paddingBottom='16px'
        >
          <Typography fontSize='16px' fontWeight='700'>
            Lampiran
          </Typography>
          <Stack direction='row' columnGap='24px'>
            <Typography color='#0F6EB5'>see more</Typography>
            <Menu />
            <IconGrid />
          </Stack>
        </Stack>
        <AppScrollbar
          sx={{
            height: '224px',
            overflowY: 'auto',
            border: '1px solid #E0E0E0',
          }}
          scrollToTop={false}
        ></AppScrollbar>
      </Box>
    );
  };

  return (
    <Box backgroundColor='#F7F8F9' minHeight='100vh'>
      <HeaderDetail nama='Detail Scan Surat' />
      <Box sx={{ padding: 8 }}>
        <Box
          backgroundColor='#FFFFFF'
          sx={{ padding: 8, borderRadius: '10px' }}
        >
          <MiniTab
            tabs={[
              { name: 'Detail Scan', content: DetailScan() },
              { name: 'Lampiran', content: Lampiran() },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

DetailScanSurat.propTypes = {
  props: PropTypes.shape({}),
};

export default DetailScanSurat;
