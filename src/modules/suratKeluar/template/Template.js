import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Divider, } from '@mui/material';
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
import { useSelector } from 'react-redux';
import BuatSurat from '../../buatSurat/SuratInternal'
import '../../../styles/button.css';
import SuratInternal_5 from '@crema/components/Tabs/BuatSurat/SuratInternal_5';
import SuratInternal_4 from '@crema/components/Tabs/BuatSurat/SuratInternal_4';
import SuratInternal_3 from '@crema/components/Tabs/BuatSurat/SuratInternal_3';
import SuratInternal_2 from '@crema/components/Tabs/BuatSurat/SuratInternal_2';
import SuratInternal_1 from '@crema/components/Tabs/BuatSurat/SuratInternal_1';
import KomentarSection from '@crema/components/Tabs/BuatSurat/KomentarSection/KomentarSection';
import StepImage from '../../../assets/BuatSurat/Prgoress bar buat surat 1.png';
import PreviewSuratImage from '../../../assets/BuatSurat/Preview Surat.png';

const Template = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();
  const isEdit = useSelector((state) => state.header.isEdit);
  const value = useSelector((state) => state.header.value);
  
  const [showNext, setShowNext] = useState(0);

  const handleNext = () => {
    setShowNext(showNext + 1);
  };

  const handlePrev = () => {
    setShowNext(showNext - 1);
  };

  return (
    <Box backgroundColor='#F7F8F9'>
      <HeaderDetail nama='Detail Template' addFile edit hapus />
      <Divider sx={{ borderColor: '#B1B5BA', borderBottomWidth: '2px' }} />
      <Box sx={{ padding: 8 }}>
        <Box backgroundColor='#FFFFFF' sx={{ padding: 8 }}>
          <>
            {isEdit ? (
              <>
              {/* <BuatSurat/> */}
              <Box
        sx={{
          // margin: '26px',
          bgcolor: '#FFFFFF',
          borderRadius: '12px',
          boxShadow: '0px 1px 4px 1px #42424233',
          // padding: '20px',
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
        <PdfCard />

        {/* <img
          src={PreviewSuratImage}
          alt='surat'
          style={{ paddingTop: '20px', maxWidth: '1305px' }}
        /> */}
      </Box>
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
                      content:  <TabContentInfo />,
                    },
                    {
                      name: 'Penerima',
                      content: <TabContentPenerima />
                    },
                    {
                      name: 'Pengirim',
                      content: <TabContentPengirim />
                    },
                    {
                      name: 'Penyetuju',
                      content: <TabContentPenyetuju />
                    },
                    {
                      name: 'Lainnya',
                      content: <TabContentLainnya />
                    },
                  ]}
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              { value === 2 || value === 4 ? (
                <KomentarEdit />
              ) : (
                <Komentar />
              )}
            </Grid>
          </Grid>
          <PdfCard />
              </>  
            )}
          </>
          {/* <Grid container>
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
          </Grid> */}
          {/* <PdfCard /> */}
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