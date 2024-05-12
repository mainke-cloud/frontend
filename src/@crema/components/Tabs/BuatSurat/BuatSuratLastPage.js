import React from 'react';
import PreviewSuratImage from '../../../../assets/BuatSurat/Preview Surat.png';
import BuatSuratAlert from '@crema/components/Tabs/BuatSurat/BuatSuratAlert/BuatSuratAlert';

const BuatSuratLastPage = () => {
  return (
    <div>
      <BuatSuratAlert />
      <img
        src={PreviewSuratImage}
        alt='surat'
        style={{ paddingTop: '20px', maxWidth: '1305px' }}
      ></img>
    </div>
  );
};

export default BuatSuratLastPage;
