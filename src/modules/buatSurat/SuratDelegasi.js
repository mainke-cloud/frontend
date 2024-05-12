import React, { useState } from 'react';
import HeaderDetail from '@crema/components/HeaderDetail';
import SuratDelegasi_1 from '@crema/components/Tabs/BuatSurat/SuratDelegasiTabs/Suratdelegasi_1';
import SuratDelegasi_2 from '@crema/components/Tabs/BuatSurat/SuratDelegasiTabs/Suratdelegasi_2';
import SuratDelegasi_3 from '@crema/components/Tabs/BuatSurat/SuratDelegasiTabs/Suratdelegasi_3';
import SuratDelegasi_4 from '@crema/components/Tabs/BuatSurat/SuratDelegasiTabs/Suratdelegasi_4';
import { Box, Grid } from '@mui/material';
import StepImage from '../../assets/BuatSurat/Prgoress bar buat surat 1.png';
import PreviewSuratImage from '../../assets/BuatSurat/Preview Surat.png';
import '../../styles/button.css';
import KomentarSection from '@crema/components/Tabs/BuatSurat/KomentarSection/KomentarSection';
import BuatSuratLastPage from '@crema/components/Tabs/BuatSurat/BuatSuratLastPage';
import CustomizedSteppers from '@crema/components/Tabs/BuatSurat/CustomizedStepper/CustomizedStepper';

const SuratDelegasi = () => {
  const [showNext, setShowNext] = useState(0);
  const [showPage, setShowPage] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);

    if (activeStep === 3) {
      setShowPage(true);
    }
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  const step = ['Info', 'Penerima', 'Pengirim', 'Lainnya'];

  const steps = [
    <SuratDelegasi_1 key={1} handleNext={handleNext} />,
    <SuratDelegasi_2 key={2} handleNext={handleNext} handlePrev={handlePrev} />,
    <SuratDelegasi_3 key={3} handleNext={handleNext} handlePrev={handlePrev} />,
    <SuratDelegasi_4 key={4} handleNext={handleNext} handlePrev={handlePrev} />,
  ];

  return (
    <Box backgroundColor='#F7F8F9' minHeight='100vh'>
      <HeaderDetail nama='Buat Surat Delegasi' save copy translate />
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
            <CustomizedSteppers activeStep={activeStep} step={step} />

            <Grid container spacing={5} marginTop='20px'>
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
    </Box>
  );
};

export default SuratDelegasi;
