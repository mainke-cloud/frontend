import React, { useState } from 'react';
import HeaderDetail from '@crema/components/HeaderDetail';
import SuratDelegasi_1 from '@crema/components/Tabs/BuatSurat/Suratdelegasi_1';
import { Box } from '@mui/material';

const SuratDelegasi = () => {
  const [showNext, setShowNext] = useState(0);

  const handleNext = () => {
    setShowNext(showNext + 1);
  };

  const handlePrev = () => {
    setShowNext(showNext - 1);
  };
  return (
    <Box backgroundColor='#F7F8F9' minHeight='100vh'>
      <HeaderDetail nama='Buat Surat Delegasi' save copy translate />
      {showNext === 0 ? <SuratDelegasi_1 handleNext={handleNext} /> : null}
    </Box>
  );
};

export default SuratDelegasi;
