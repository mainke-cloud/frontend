import React, { useState } from 'react';
import HeaderDetail from '@crema/components/HeaderDetail';
import SuratDelegasi_1 from '@crema/components/Tabs/BuatSurat/SuratDelegasiTabs/Suratdelegasi_1';
import SuratDelegasi_2 from '@crema/components/Tabs/BuatSurat/SuratDelegasiTabs/Suratdelegasi_2';
import SuratDelegasi_3 from '@crema/components/Tabs/BuatSurat/SuratDelegasiTabs/Suratdelegasi_3';
import SuratDelegasi_4 from '@crema/components/Tabs/BuatSurat/SuratDelegasiTabs/Suratdelegasi_4';
import { Box, Grid, Stack } from '@mui/material';
import '../../styles/button.css';
import KomentarSection from '@crema/components/Tabs/BuatSurat/KomentarBuatSurat/KomentarSection';
import BuatSuratLastPage from '@crema/components/Tabs/BuatSurat/BuatSuratLastPage';
import CustomizedSteppers from '@crema/components/Tabs/BuatSurat/CustomizedStepper/CustomizedStepper';
import PdfCardEdit from '@crema/components/Tabs/SuratKeluar/PdfCardEdit';
import { useSelector, useDispatch } from 'react-redux';
import { addInfo } from '../../redux/actions/suratAction';
import KomentarPopUp from '@crema/components/Tabs/BuatSurat/KomentarBuatSurat/KomentarPopUp';

const SuratDelegasi = () => {
  const dispatch = useDispatch();

  const [showPage, setShowPage] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [komen, setKomen] = useState('');
  const [showKomen, setShowKomen] = useState(false);
  const [formData, setFormData] = useState({
    perihal: '',
    klasifikasi: '',
    prioritas: '1',
    jenis: '1',
    lampiran: 1,
  });

  const kepada = useSelector((state) => state.addressbook.kepada);
  const tembusan = useSelector((state) => state.addressbook.tembusan);
  const pengirim = useSelector((state) => state.addressbook.pengirim);

  const handleNext = () => {
    setActiveStep(activeStep + 1);

    if (activeStep === 3) {
      setShowPage(true);
    }

    dispatch(addInfo(formData));
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChangeForm = (formData) => {
    setFormData(formData);
  };

  const onCreate = (data) => {
    setKomen(data.komen);
  };

  const step = ['Info', 'Penerima', 'Pengirim', 'Lainnya'];

  const steps = [
    <SuratDelegasi_1
      key={1}
      handleNext={handleNext}
      onStateChange={handleChangeForm}
    />,
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

export default SuratDelegasi;
