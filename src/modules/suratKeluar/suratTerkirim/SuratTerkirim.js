import React, { useState } from 'react';
import HeaderDetail from '@crema/components/HeaderDetail';
import { Box, Stack, Tab } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import AgendaSurat from './content/agendaSurat';
import { sMasuk } from '../../../@crema/services/dummy/content/dataSm';
import Info from './content/info';
import { diteruskan } from '@crema/services/dummy/content/dataTerusan';
import SuratTerkirimWrapper from './SuratTerkirimWrapper';
import Lainnya from './content/lainnya';
import PropTypes from 'prop-types';
import {
  listData1,
  listData2,
  listData3,
} from '../../../@crema/services/dummy/sidebar/listDataSuratKeluar';
import DigitalSignature from '../digitalSignature.js/DigitalSignature';
import PdfCardEdit from '@crema/components/Tabs/SuratKeluar/PdfCardEdit';

const SuratTerkirim = () => {
  const files = [listData1, listData2, listData3];
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <SuratTerkirimWrapper>
      <HeaderDetail
        nama='Detail Surat yang Dikirimkan'
        disposisi
        forward
        sign
        printer
        copy3
        template_surat
        masukan_folder
      />
      <Box sx={{ padding: 8 }}>
        <Box
          backgroundColor='#FFFFFF'
          sx={{ padding: 8, borderRadius: '10px' }}
        >
          <TabContext value={value}>
            <Box
              className='content-tabs'
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
                <Tab
                  className='content-styled-tab'
                  label='Agenda Surat'
                  value='1'
                />
                <Tab className='content-styled-tab' label='Info' value='2' />
                <Tab className='content-styled-tab' label='Lainnya' value='3' />
              </TabList>
            </Box>
            <TabPanel className='content-styled-panel' value='1'>
              <AgendaSurat data={sMasuk} />
            </TabPanel>
            <TabPanel className='content-styled-panel' value='2'>
              <Info data={diteruskan} />
            </TabPanel>
            <TabPanel className='content-styled-panel' value='3'>
              <Lainnya files={files} />
            </TabPanel>
          </TabContext>

          {/* <Box
            sx={{
              mt: '20px',
              width: '100vh',
            }}
          >
            <PdfCardEdit/>
          </Box> */}
        </Box>
      </Box>
      <Stack
        sx={{
          backgroundColor: 'white',
          minHeight: '1009px',
          width: '921px',
          mx: 'auto',
          display: 'flex',
          borderRadius: '10px', // Mengatur border radius
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Menambahkan efek bayangan
          mb: '30px',
        }}
      >
        <PdfCardEdit />
      </Stack>
    </SuratTerkirimWrapper>
  );
};
SuratTerkirim.propTypes = {
  props: PropTypes.shape({}),
  file: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default SuratTerkirim;
