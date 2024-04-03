import React from 'react';
import HeaderDetail from '@crema/components/HeaderDetail';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { Table, TableBody, TableContainer, TableRow } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import MiniTab from '@crema/components/MiniTab';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

const SuratMasuk = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

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

  const Detail = [
    {
      name: 'No Agenda',
      keterangan: 'In.02/HK',
    },
    {
      name: 'Tanggal di kirim',
      keterangan: '26-07-2021',
    },
    {
      name: 'No Surat',
      keterangan: 'In.02/HK',
    },
    {
      name: 'Dari',
      keterangan: 'Jabatan Pegawai',
    },
    {
      name: 'Kepada',
      keterangan: 'Direktur Utama',
    },
    {
      name: 'Tembusan',
      keterangan: 'Direktur Utama',
    },
    {
      name: 'Perihal',
      keterangan: 'Undangan Workshop',
    },
    {
      name: 'Lampiran',
      keterangan: '3 Berkas',
    },
  ];

  const DetailScan = () => {
    return (
      <>
        <Grid
          container
          sx={{ border: '1px solid #A7A7A7', borderRadius: '10px' }}
        >
          <Grid item xs={6}>
            <TableContainer>
              <Table aria-label='customized table'>
                <TableBody>
                  {Detail.map((row) => (
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
                      <StyledTableCell style={{ paddingLeft: '8px' }}>
                        {row.keterangan}
                      </StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: '20px',
            width: '100vh',
          }}
        >
          <Document file={require('./Preview Surat.pdf')}>
            <Page pageNumber={1} width={930} />
          </Document>
        </Box>
      </>
    );
  };

  return (
    <Box backgroundColor='#F7F8F9' minHeight='100vh'>
      <HeaderDetail nama='Detail Surat Masuk' send />
      <Box sx={{ padding: 8 }}>
        <Box
          backgroundColor='#FFFFFF'
          sx={{ padding: 8, borderRadius: '10px' }}
        >
          <MiniTab
            tabs={[
              { name: 'Agenda Surat', content: DetailScan() },
              // { name: 'Lampiran', content: Lampiran() },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SuratMasuk;
