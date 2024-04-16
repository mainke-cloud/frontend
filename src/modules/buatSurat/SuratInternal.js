import React from 'react';
import HeaderDetail from '@crema/components/HeaderDetail';
import { Box } from '@mui/material';
import '../../styles/button.css';
import SuratInternal_5 from '@crema/components/Tabs/BuatSurat/SuratInternal_5';

const SuratInternal = () => {
  return (
    <Box backgroundColor='#F7F8F9' minHeight='100vh'>
      <HeaderDetail nama='Buat Surat' save copy translate />
      <SuratInternal_5 />
    </Box>
  );
};

export default SuratInternal;
