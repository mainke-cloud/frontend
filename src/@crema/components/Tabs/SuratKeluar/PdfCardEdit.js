import React, { useRef } from 'react';
import { Box, Typography, Stack, List, ListItem } from '@mui/material';
import PropTypes from 'prop-types';
import TinyMce from './TinyMce';
import jsPDF from 'jspdf';
const PdfCardEdit = ({ kepada, tembusan, pengirim }) => {
  const cardRef = useRef(null);

  const exportToPDF = () => {
    const cardElement = cardRef.current;
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [cardElement.offsetWidth, cardElement.offsetHeight],
    });
    pdf.html(cardElement, {
      callback: () => {
        pdf.save('card.pdf');
      },
    });
  };
  let kepadas = kepada;
  if (!kepadas || !Array.isArray(kepadas)) {
    kepadas = [];
  }
  let tembusans = tembusan;
  if (!tembusans || !Array.isArray(tembusans)) {
    tembusans = [];
  }
  let pengirims = pengirim;
  if (!pengirim || !Array.isArray(pengirim)) {
    pengirim = [];
  }
  return (
    <Stack padding={'20px'}>
      <Typography variant='subtitle1' sx={{ mb: 2, fontWeight:'bold' }}>
        Nomor:
      </Typography>
      <br />
      <Typography variant='subtitle1' sx={{ mb: 2, fontWeight:'bold' }}>
        Jakarta, 29 Juli 2023
      </Typography>
      <br />
      <Typography variant='subtitle1' sx={{ mb: 2, fontWeight:'bold' }}>
        Kepada: 
        <List>
          {kepadas.map((item, index) => (
            <ListItem key={index}>{index+1}. Sdr. {item.nama}</ListItem>
          ))}
        </List>
      </Typography>
      <Typography variant='subtitle1' sx={{ mb: 2, fontWeight:'bold' }}>
        Dari:
      </Typography>
      <Typography variant='subtitle1' sx={{ mb: 2, fontWeight:'bold' }}>
        Lampiran:
      </Typography>
      <Typography variant='subtitle1' sx={{ mb: 2, fontWeight:'bold' }}>
        Hal:
      </Typography>
      <Typography variant='subtitle1' sx={{ mb: 2, fontWeight:'bold' }}>
        Tanggal:
      </Typography>
      <br />
      <br />
      <Stack spacing={2}>
        <Typography variant='body2'>Isi Surat:</Typography>
        <TinyMce />
      </Stack>
      <br />
      <Typography
        variant='subtitle1'
        sx={{ paddingLeft: '75%', mb: 2, pr: 15 }}
      >
        {}
      </Typography>
      <br />
      <br />
      <br />
      <Typography
        variant='subtitle1'
        sx={{
          paddingLeft: '75%',
          fontWeight: 'bold',
          textDecoration: 'underline',
        }}
      >
        {pengirims.nama}
      </Typography>
      <Typography
        variant='subtitle1'
        sx={{
          paddingLeft: '75%',
          mb: 2,
          fontWeight: 'bold',
          pr: 25,
        }}
      >
        {pengirims.nikl}
      </Typography>
      <br />
      <Typography variant='subtitle1' sx={{ mb: 2, fontWeight:'bold' }}>
        Tembusan: 
        <List>
          {tembusans.map((item, index) => (
            <ListItem key={index}>{index+1}. Sdr. {item.nama}</ListItem>
          ))}
        </List>
      </Typography>
      {/* <button onClick={exportToPDF}>Export to PDF</button> */}
    </Stack>
  );
};
PdfCardEdit.propTypes = {
  kepada: PropTypes.any,
  tembusan: PropTypes.any,
  pengirim: PropTypes.any,
};
export default PdfCardEdit;
