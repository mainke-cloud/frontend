import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Divider, Stack, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import PdfCard from '@crema/components/Tabs/SuratKeluar/PdfCard';
import HeaderDetail from '@crema/components/HeaderDetail';
import { useSelector, useDispatch } from 'react-redux';
import { addInfo } from '../../../redux/actions/suratAction';
import BuatSuratLastPage from '@crema/components/Tabs/BuatSurat/BuatSuratLastPage';
import CustomizedStepper from '@crema/components/Tabs/BuatSurat/CustomizedStepper/CustomizedStepper';
import '../../../styles/button.css';
import SuratInternal_5 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_5';
import SuratInternal_4 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_4';
import SuratInternal_3 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_3';
import SuratInternal_2 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_2';
import SuratInternal_1 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_1';
import KomentarSection from '@crema/components/Tabs/BuatSurat/KomentarSection/KomentarSection';
import PdfCardEdit from '@crema/components/Tabs/SuratKeluar/PdfCardEdit';
import {
  listData1,
  listData2,
  listData3,
} from '../../../@crema/services/dummy/sidebar/listDataSuratKeluar';
import { diteruskan } from '@crema/services/dummy/content/dataTerusan';
import Info from './content/info';
import Lainnya from './content/lainnya';
import AgendaSurat from './content/agendaSurat';
import TemplateWrapper from './TemplateWrapper';

const Template = ({props}) => {
  const dispatch = useDispatch();
  const [showNext, setShowNext] = useState(0);
  const [showPage, setShowPage] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const kepada = useSelector((state) => state.addressbook.kepada);
  const tembusan = useSelector((state) => state.addressbook.tembusan);
  const pengirim = useSelector((state) => state.addressbook.pengirim);
  const [formData, setFormData] = useState({
    perihal: '',
    klasifikasi: '',
    prioritas: '1',
    jenis: '1',
    lampiran: 1,
  });

  const isTemplate = useSelector((state) => state.header.isTemplate);
  const values = useSelector((state) => state.header.value);

  const handleNext = () => {
    setActiveStep(activeStep + 1);

    if (activeStep === 4) {
      setShowPage(true);
    }
    dispatch(addInfo(formData));
  };
  const handleChangeForm = (formData) => {
    setFormData(formData);
  };
  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  const files = [listData1, listData2, listData3];
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const step = ['Info', 'Penerima', 'Pengirim', 'Pemeriksa', 'Lainnya'];

  const steps = [
    <SuratInternal_1
      key={1}
      handleNext={handleNext}
      onStateChange={handleChangeForm}
      templateData={props}
    />,
    <SuratInternal_2 key={2} handleNext={handleNext} handlePrev={handlePrev} templateData={props} />,
    <SuratInternal_3 key={3} handleNext={handleNext} handlePrev={handlePrev} templateData={props} />,
    <SuratInternal_4 key={4} handleNext={handleNext} handlePrev={handlePrev} templateData={props}/>,
    <SuratInternal_5 key={5} handleNext={handleNext} handlePrev={handlePrev} />,
  ];

  return (
    <Box backgroundColor='#F7F8F9'>
      <HeaderDetail
        nama={isTemplate ? 'Edit Template' : 'Detail Template'}
        buatSuratdariTemplate
        editTemplate
        hapus
      />
      <Divider sx={{ borderColor: '#B1B5BA', borderBottomWidth: '2px' }} />
      <Box sx={{ padding: 8 }}>
        <Box backgroundColor='#FFFFFF' sx={{ padding: 8 }}>
          <>
            {isTemplate ? (
              <>
                {showPage ? (
                  <BuatSuratLastPage />
                ) : (
                  <>
                    <CustomizedStepper activeStep={activeStep} step={step} />

                    <Grid container spacing={5} marginTop={'20px'}>
                      <Grid item xs={8}>
                        {steps[activeStep]}
                      </Grid>

                      <Grid item xs={4}>
                        <KomentarSection />
                      </Grid>
                    </Grid>
                  </>
                )}
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
                  <PdfCardEdit
                    kepada={kepada}
                    tembusan={tembusan}
                    pengirim={pengirim}
                    info={formData}
                  />
                </Stack>
              </>
            ) : (
              <>
                <TemplateWrapper>
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
                          <Tab
                            className='content-styled-tab'
                            label='Info'
                            value='2'
                          />
                          <Tab
                            className='content-styled-tab'
                            label='Lainnya'
                            value='3'
                          />
                        </TabList>
                      </Box>
                      <TabPanel className='content-styled-panel' value='1'>
                        <AgendaSurat data={props} />
                      </TabPanel>
                      <TabPanel className='content-styled-panel' value='2'>
                        <Info data={diteruskan} />
                      </TabPanel>
                      <TabPanel className='content-styled-panel' value='3'>
                        <Lainnya files={files} />
                      </TabPanel>
                    </TabContext>
                  <PdfCard />
                  </Box>
                </TemplateWrapper>
              </>
            )}
          </>
        </Box>
      </Box>
    </Box>
  );
};

Template.propTypes = {
  props: PropTypes.shape({}),
  avatarSrc: PropTypes.string,
  date: PropTypes.string,
  priority: PropTypes.string,
  primary: PropTypes.string,
  file: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Template;

