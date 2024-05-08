import React, { useState } from 'react';
import HeaderDetail from '@crema/components/HeaderDetail';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import DigitalSignatureWrapper from './DigitalSignatureWrapper';
import PropTypes from 'prop-types';
import {
  listData1,
  listData2,
  listData3,
} from '../../../@crema/services/dummy/sidebar/listDataSuratKeluar';

const DigitalSignature = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <DigitalSignatureWrapper>
      <HeaderDetail
        nama='Digital Signature NotaDinas'
        // disposisi
        // forward
        // sign
        // printer
        // copy3
        // template_surat
        // masukan_folder
      />
      <Box sx={{ padding: 8 }}>
        <Box
          backgroundColor='#FFFFFF'
          sx={{ padding: 8, borderRadius: '10px' }}
        >
          <Stack direction={'column'}>
            <Typography fontWeight={'bold'} fontSize={'20px'}>
              Alasan
            </Typography>
            <TextField
              multiline
              rows={4}
              placeholder='Isi Alasan ...'
            />
          </Stack>
          <Box
            sx={{
              mt: '20px',
              width: '100vh',
            }}
          >
            <Document file={require('./Preview Surat.pdf')}>
              <Page pageNumber={1} width={910} />
            </Document>
          </Box>
        </Box>
      </Box>
    </DigitalSignatureWrapper>
  );
};
DigitalSignature.propTypes = {
  props: PropTypes.shape({}),
  file: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default DigitalSignature;
