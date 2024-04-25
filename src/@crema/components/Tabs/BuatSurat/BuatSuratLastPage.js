import React from 'react';
import PreviewSuratImage from '../../../../assets/BuatSurat/Preview Surat.png';

const BuatSuratLastPage = () => {
  return (
    <div>
      <img
        src={PreviewSuratImage}
        alt='surat'
        style={{ paddingTop: '20px', maxWidth: '1305px' }}
      />
    </div>
  );
};

export default BuatSuratLastPage;
