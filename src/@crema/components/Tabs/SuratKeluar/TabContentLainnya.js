import React from 'react';
import { Stack, Typography } from '@mui/material';
import gridIcon from '../../../../assets/icon/grid.svg';
import menuIcon from '../../../../assets/icon/menu.svg';
import AppScrollbar from '@crema/components/AppScrollbar';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { styled } from '@mui/material/styles';
import DropZone from './DropZone';
import TabWrapper from '../../../../modules/suratKeluar/TabWrapper';
const TabContentLainnya = () => {
  const Judul = styled(Typography)({
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '20px',
    padding: '16px 16px 0px 16px',
  });
  return (
    <>
      <TabWrapper sx={{ height: '575px' }}>
        <Stack rowGap='10px'>
          <Stack direction='row' justifyContent='space-between'>
            <Judul>Lampiran</Judul>
            <Stack direction='row'>
              <Judul>
                <a style={{ textDecoration: 'none' }} href='#'>
                  See More
                </a>
              </Judul>
              <Judul>
                <img src={menuIcon} />
              </Judul>
              <Judul>
                <img src={gridIcon} />
              </Judul>
            </Stack>
          </Stack>
          <AppScrollbar
            sx={{
              height: '210px',
              overflowY: 'auto',
              border: '1px solid #B1B5BA',
              width: '97%',
              ml: 3,
              borderRadius: 2,
              borderStyle: 'dashed',
              borderColor: 'black',
              borderWidth: '1px',
              cursor: 'pointer',
            }}
            scrollToTop={false}
          >
            <DropZone></DropZone>
          </AppScrollbar>
        </Stack>
        <Stack rowGap='10px'>
          <Stack direction='row' justifyContent='space-between' sx={{ mt: 5 }}>
            <Judul>Lampiran</Judul>
            <Stack direction='row'>
              <Judul>
                <a style={{ textDecoration: 'none' }} href='#'>
                  See More
                </a>
              </Judul>
              <Judul>
                <img src={menuIcon} />
              </Judul>
              <Judul>
                <img src={gridIcon} />
              </Judul>
            </Stack>
          </Stack>
          <AppScrollbar
            sx={{
              height: '210px',
              overflowY: 'auto',
              border: '1px solid #B1B5BA',
              width: '97%',
              ml: 3,
              borderRadius: 2,
              borderStyle: 'dashed',
              borderColor: 'black',
              borderWidth: '1px',
              cursor: 'pointer',
            }}
            scrollToTop={false}
          >
            <DropZone></DropZone>
          </AppScrollbar>
        </Stack>
      </TabWrapper>
    </>
  );
};

export default TabContentLainnya;
