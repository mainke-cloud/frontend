import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Divider, Stack } from '@mui/material';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import TabContentInfo from '../../../@crema/components/Tabs/SuratKeluar/TabContentInfo';
import TabContentPenerima from '../../../@crema/components/Tabs/SuratKeluar/TabContentPenerima';
import TabContentPengirim from '../../../@crema/components/Tabs/SuratKeluar/TabContentPengirim';
import TabContentPenyetuju from '../../../@crema/components/Tabs/SuratKeluar/TabContentPenyetuju';
import TabContentLainnya from '../../../@crema/components/Tabs/SuratKeluar/TabContentLainnya';
import Komentar from '../../../@crema/components/Tabs/SuratKeluar/Komentar';
import TabContentEditPenerima from '../../../@crema/components/Tabs/SuratKeluar/TabContentEditPenerima';
import TabContentEditPengirim from '../../../@crema/components/Tabs/SuratKeluar/TabContentEditPengirim';
import KomentarEdit from '../../../@crema/components/Tabs/SuratKeluar/KomentarEdit';
import TabContentEditPenyetuju from '../../../@crema/components/Tabs/SuratKeluar/TabContentEditPenyetuju';
import TabContentEditLainnya from '../../../@crema/components/Tabs/SuratKeluar/TabContentEditLainnya';
import PdfCard from '@crema/components/Tabs/SuratKeluar/PdfCard';
import HeaderDetail from '@crema/components/HeaderDetail';
import MiniTab from '@crema/components/MiniTab';
import { useSelector, useDispatch } from 'react-redux';
import { addInfo } from '../../../redux/actions/suratAction';
import BuatSuratLastPage from '@crema/components/Tabs/BuatSurat/BuatSuratLastPage';
import CustomizedStepper from '@crema/components/Tabs/BuatSurat/CustomizedStepper/CustomizedStepper';
import BuatSurat from '../../buatSurat/SuratInternal';
import '../../../styles/button.css';
import SuratInternal_5 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_5';
import SuratInternal_4 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_4';
import SuratInternal_3 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_3';
import SuratInternal_2 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_2';
import SuratInternal_1 from '@crema/components/Tabs/BuatSurat/SuratInternalTabs/SuratInternal_1';
import KomentarSection from '@crema/components/Tabs/BuatSurat/KomentarSection/KomentarSection';
import StepImage from '../../../assets/BuatSurat/Prgoress bar buat surat 1.png';
import PreviewSuratImage from '../../../assets/BuatSurat/Preview Surat.png';
import PdfCardEdit from '@crema/components/Tabs/SuratKeluar/PdfCardEdit';

const Template = () => {
  const dispatch = useDispatch();
  const [showNext, setShowNext] = useState(0);
  const [showPage, setShowPage] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
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

  const isEdit = useSelector((state) => state.header.isEdit);
  const value = useSelector((state) => state.header.value);

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
    <SuratInternal_5 key={5} handleNext={handleNext} handlePrev={handlePrev} />,
  ];

  return (
    <Box backgroundColor='#F7F8F9'>
      <HeaderDetail nama='Detail Template' addFile edit hapus />
      <Divider sx={{ borderColor: '#B1B5BA', borderBottomWidth: '2px' }} />
      <Box sx={{ padding: 8 }}>
        <Box backgroundColor='#FFFFFF' sx={{ padding: 8 }}>
          {/* <>
            {isEdit ? (
              <>
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
                        <KomentarSection />
                      </Grid>
                    </Grid>
                  </>
                )}
                <Stack
                  sx={{
                    backgroundColor: 'white',
                    minHeight: '1009px',
                    width: '921px',
                    mx: 'auto',
                    display: 'flex',
                    borderRadius: '10px', // Mengatur border radius
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Menambahkan efek bayangan
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
              </>
            ) : (
              <>
                <Grid container>
                  <Grid item xs={8}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                      <MiniTab
                        tabs={[
                          {
                            name: 'Info',
                            content: <TabContentInfo />,
                          },
                          {
                            name: 'Penerima',
                            content: <TabContentPenerima />,
                          },
                          {
                            name: 'Pengirim',
                            content: <TabContentPengirim />,
                          },
                          {
                            name: 'Penyetuju',
                            content: <TabContentPenyetuju />,
                          },
                          {
                            name: 'Lainnya',
                            content: <TabContentLainnya />,
                          },
                        ]}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    {value === 2 || value === 4 ? (
                      <KomentarEdit />
                    ) : (
                      <Komentar />
                    )}
                  </Grid>
                </Grid>
                <PdfCard />
              </>
            )}
          </> */}
          <Grid container>
            <Grid item xs={8}>
              <Box sx={{ width: '100%', typography: 'body1' }}>

                <MiniTab
                  tabs={[
                    {
                      name: 'Info',
                      content: <>{isEdit ? '' : <TabContentInfo />}</>,
                    },
                    {
                      name: 'Penerima',
                      content: (
                        <>
                          {isEdit ? (
                            <TabContentEditPenerima />
                          ) : (
                            <TabContentPenerima />
                          )}
                        </>
                      ),
                    },
                    {
                      name: 'Pengirim',
                      content: (
                        <>
                          {isEdit ? (
                            <TabContentEditPengirim />
                          ) : (
                            <TabContentPengirim />
                          )}
                        </>
                      ),
                    },
                    {
                      name: 'Penyetuju',
                      content: (
                        <>
                          {isEdit ? (
                            <TabContentEditPenyetuju />
                          ) : (
                            <TabContentPenyetuju />
                          )}
                        </>
                      ),
                    },
                    {
                      name: 'Lainnya',
                      content: (
                        <>
                          {isEdit ? (
                            <TabContentEditLainnya />
                          ) : (
                            <TabContentLainnya />
                          )}
                        </>
                      ),
                    },
                  ]}
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              {isEdit && value === 0 ? (
                ''
              ) : isEdit && (value === 2 || value === 4) ? (
                <KomentarEdit />
              ) : (
                <Komentar />
              )}
            </Grid>
          </Grid>
          <PdfCard />
        </Box>
      </Box>
    </Box>
  );
};

Template.propTypes = {
  props: PropTypes.shape({}),
  avatarSrc: PropTypes.string,
  date: PropTypes.string,
  priority: PropTypes.string,
  primary: PropTypes.string,
};
export default Template;

// import PdfCardEdit from '@crema/components/Tabs/SuratKeluar/PdfCardEdit';
