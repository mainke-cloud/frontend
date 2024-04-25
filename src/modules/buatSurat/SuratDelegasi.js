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

const SuratDelegasi = () => {
  const [showNext, setShowNext] = useState(0);
  const [showPage, setShowPage] = useState(false);

  const handleNext = () => {
    setShowNext(showNext + 1);
    if (showNext === 3) {
      setShowPage(true);
    }
  };

  const handlePrev = () => {
    setShowNext(showNext - 1);
  };

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
                  <SuratDelegasi_1 handleNext={handleNext} />
                ) : showNext === 1 ? (
                  <SuratDelegasi_2
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                  />
                ) : showNext === 2 ? (
                  <SuratDelegasi_3
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                  />
                ) : showNext === 3 ? (
                  <SuratDelegasi_4
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

export default SuratDelegasi;
