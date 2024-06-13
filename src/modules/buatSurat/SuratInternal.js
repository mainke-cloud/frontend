import React, { useState } from 'react';
import HeaderDetail from '@crema/components/HeaderDetail';
import { Box, Grid, Stack } from '@mui/material';
import '../../styles/button.css';
import SuratInternal_5 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_5';
import SuratInternal_4 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_4';
import SuratInternal_3 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_3';
import SuratInternal_2 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_2';
import SuratInternal_1 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_1';
import KomentarSection from '@crema/components/Tabs/BuatSurat/KomentarBuatSurat/KomentarSection';
import PdfCardEdit from '@crema/components/Tabs/SuratKeluar/PdfCardEdit';
import { useSelector, useDispatch } from 'react-redux';
import { addInfo } from '../../redux/actions/suratAction';
import BuatSuratLastPage from '@crema/components/Tabs/BuatSurat/BuatSuratLastPage';
import CustomizedStepper from '@crema/components/Tabs/BuatSurat/CustomizedStepper/CustomizedStepper';
import KomentarPopUp from '@crema/components/Tabs/BuatSurat/KomentarBuatSurat/KomentarPopUp';

const SuratInternal = () => {
  const dispatch = useDispatch();

  const [showPage, setShowPage] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [komen, setKomen] = useState('');
  const [showKomen, setShowKomen] = useState(false);

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

  const onCreate = (data) => {
    setKomen(data.komen);
  };

  const step = ['Info', 'Penerima', 'Pengirim', 'Pemeriksa', 'Lainnya'];

  const steps = [
    <SuratInternal_1
      key={1}
      handleNext={handleNext}
      onStateChange={handleChangeForm}
    />,
    <SuratInternal_2 key={2} handleNext={handleNext} handlePrev={handlePrev} />,
    <SuratInternal_3 key={3} handleNext={handleNext} handlePrev={handlePrev} />,
    <SuratInternal_4 key={4} handleNext={handleNext} handlePrev={handlePrev} />,
    <SuratInternal_5
      key={5}
      handleNext={handleNext}
      handlePrev={handlePrev}
      text='Kirim'
    />,
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
                <Stack>
                  <KomentarSection
                    onCreate={onCreate}
                    setShowKomen={setShowKomen}
                  />
                  {showKomen ? <KomentarPopUp komen={komen} /> : null}
                </Stack>
              </Grid>
            </Grid>
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
          borderRadius: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
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
