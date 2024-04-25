import React, { useState } from 'react';
import HeaderDetail from '@crema/components/HeaderDetail';
import { Box, Grid } from '@mui/material';
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

const SuratInternal = () => {
  const [showNext, setShowNext] = useState(0);
  const [showPage, setShowPage] = useState(false);

  const handleNext = () => {
    setShowNext(showNext + 1);
    if (showNext === 4) {
      setShowPage(true);
    }
  };

  const handlePrev = () => {
    setShowNext(showNext - 1);
  };

  return (
    <Box backgroundColor='#F7F8F9' minHeight='100vh'>
      <HeaderDetail nama='Buat Surat Internal' save copy translate />
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
            <img
              src={StepImage}
              alt='gambar step'
              style={{
                maxHeight: '120px',
              }}
            />

            <Grid container spacing={5}>
              <Grid item xs={8}>
                {showNext === 0 ? (
                  <SuratInternal_1 handleNext={handleNext} />
                ) : showNext === 1 ? (
                  <SuratInternal_2
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                  />
                ) : showNext === 2 ? (
                  <SuratInternal_3
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                  />
                ) : showNext === 3 ? (
                  <SuratInternal_4
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                  />
                ) : showNext === 4 ? (
                  <SuratInternal_5
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                  />
                ) : null}
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

export default SuratInternal;
