import React from 'react';
import { Box, Grid, Stack } from '@mui/material';

import pdf from '../../../assets/icon/pdf.svg';
import CustomMoreMenu from '@crema/components/Tabs/Disposisi/TabPanel/CustomMoreMenu';
import CustomMoreItem from '@crema/components/Tabs/Disposisi/TabPanel/CustomMoreItem';
import AppScrollbar from '@crema/components/AppScrollbar';

const Lainnya = () => {
  return (
    <Box className='content-styled-box'>
      <Stack rowGap='16px'>
        <CustomMoreMenu name='Lampiran'>
          <Box className='content-styled-box' sx={{ height: '182px' }}>
            <AppScrollbar>
              <Grid container columnSpacing={'16px'} rowSpacing={'16px'}>
                <Grid item xs={2}>
                  <CustomMoreItem
                    image={pdf}
                    name='Penunjukan Satgas Project Enhancem'
                    size='0.16 MB'
                  />
                </Grid>
                <Grid item xs={2}>
                  <CustomMoreItem
                    image={pdf}
                    name='Penunjukan Satgas Project Enhancem'
                    size='2.32 MB'
                  />
                </Grid>
                <Grid item xs={2}>
                  <CustomMoreItem
                    image={pdf}
                    name='Penunjukan Satgas Project Enhancem'
                    size='4.64 MB'
                  />
                </Grid>
                <Grid item xs={2}>
                  <CustomMoreItem
                    image={pdf}
                    name='Penunjukan Satgas Project Enhancem'
                    size='9.28 MB'
                  />
                </Grid>
                <Grid item xs={2}>
                  <CustomMoreItem
                    image={pdf}
                    name='Penunjukan Satgas Project Enhancem'
                    size='18.56 MB'
                  />
                </Grid>
                <Grid item xs={2}>
                  <CustomMoreItem
                    image={pdf}
                    name='Penunjukan Satgas Project Enhancem'
                    size='37.12 MB'
                  />
                </Grid>
                <Grid item xs={2}>
                  <CustomMoreItem
                    image={pdf}
                    name='Penunjukan Satgas Project Enhancem'
                    size='74.24 MB'
                  />
                </Grid>
              </Grid>
            </AppScrollbar>
          </Box>
        </CustomMoreMenu>

        <CustomMoreMenu name='Referensi'>
          <Box className='content-styled-box'>
            <AppScrollbar>
              <Grid container columnSpacing={'16px'} rowSpacing={'16px'}>
                <Grid item xs={2}>
                  <CustomMoreItem
                    image={pdf}
                    name='Penunjukan Satgas Project Enhancem'
                  />
                </Grid>
                <Grid item xs={2}>
                  <CustomMoreItem
                    image={pdf}
                    name='Penunjukan Satgas Project Enhancem'
                  />
                </Grid>
                <Grid item xs={2}>
                  <CustomMoreItem
                    image={pdf}
                    name='Penunjukan Satgas Project Enhancem'
                  />
                </Grid>
              </Grid>
            </AppScrollbar>
          </Box>
        </CustomMoreMenu>
      </Stack>
    </Box>
  );
};

export default Lainnya;
