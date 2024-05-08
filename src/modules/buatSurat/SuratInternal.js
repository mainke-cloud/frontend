import React, { useState } from 'react';
import HeaderDetail from '@crema/components/HeaderDetail';
import { Box, Grid, Stack } from '@mui/material';
import '../../styles/button.css';
import SuratInternal_5 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_5';
import SuratInternal_4 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_4';
import SuratInternal_3 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_3';
import SuratInternal_2 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_2';
import SuratInternal_1 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_1';
import KomentarSection from '@crema/components/Tabs/BuatSurat/KomentarSection/KomentarSection';
import StepImage from '../../assets/BuatSurat/Prgoress bar buat surat 1.png';
import PreviewSuratImage from '../../assets/BuatSurat/Preview Surat.png';
import BuatSuratLastPage from '@crema/components/Tabs/BuatSurat/BuatSuratLastPage';
import CustomizedStepper from '@crema/components/Tabs/BuatSurat/CustomizedStepper/CustomizedStepper';
import { handleNextStep } from '@crema/components/Tabs/BuatSurat/CustomizedStepper/CustomizedStepper';

const SuratInternal = () => {
  const dispatch = useDispatch();
  const [showNext, setShowNext] = useState(0);
  const [showPage, setShowPage] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);

    if (activeStep === 4) {
      setShowPage(true);
    }
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  const step = ['Info', 'Penerima', 'Pengirim', 'Pemeriksa', 'Lainnya'];

  const steps = [
    <SuratInternal_1 key={1} handleNext={handleNext} />,
    <SuratInternal_2 key={2} handleNext={handleNext} handlePrev={handlePrev} />,
    <SuratInternal_3 key={3} handleNext={handleNext} handlePrev={handlePrev} />,
    <SuratInternal_4 key={4} handleNext={handleNext} handlePrev={handlePrev} />,
    <SuratInternal_5 key={5} handleNext={handleNext} handlePrev={handlePrev} />,
  ];

  return (
    <Box backgroundColor='#F7F8F9' minHeight='100vh'>
      <HeaderDetail nama='Buat Surat Internal' translate save copy send />
      <Box
        sx={{
          margin: '26px',
          bgcolor: '#FFFFFF',
          borderRadius: '12px',
          boxShadow: '0px 1px 4px 1px #42424233',
          padding: '20px',
        }}
      >
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

            <img
              src={PreviewSuratImage}
              alt='surat'
              style={{ paddingTop: '20px', maxWidth: '1305px' }}
            />
          </>
        )}
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
        <PdfCardEdit
          kepada={kepada}
          tembusan={tembusan}
          pengirim={pengirim}
          info={formData}
        />
      </Stack>
    </Box>
  );
};

export default SuratInternal;
