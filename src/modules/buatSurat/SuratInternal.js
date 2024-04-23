import React, { useState } from 'react';
import HeaderDetail from '@crema/components/HeaderDetail';
import { Box, Grid } from '@mui/material';
import '../../styles/button.css';
import SuratInternal_5 from '@crema/components/Tabs/BuatSurat/SuratInternal_5';
import SuratInternal_4 from '@crema/components/Tabs/BuatSurat/SuratInternal_4';
import SuratInternal_3 from '@crema/components/Tabs/BuatSurat/SuratInternal_3';
import SuratInternal_2 from '@crema/components/Tabs/BuatSurat/SuratInternal_2';
import SuratInternal_1 from '@crema/components/Tabs/BuatSurat/SuratInternal_1';
import KomentarSection from '@crema/components/Tabs/BuatSurat/KomentarSection/KomentarSection';
import StepImage from '../../assets/BuatSurat/Prgoress bar buat surat 1.png';

const SuratInternal = () => {
  const [showNext, setShowNext] = useState(0);

  const handleNext = () => {
    setShowNext(showNext + 1);
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
      </Box>
    </Box>
  );
};

export default SuratInternal;
