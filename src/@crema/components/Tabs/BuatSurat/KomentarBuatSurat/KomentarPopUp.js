import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Stack,
  Typography,
  Box,
  Button,
  Divider,
  InputBase,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AppScrollbar from '@crema/components/AppScrollbar';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import ListKomentarBuatSurat from '../../BuatSurat/KomentarBuatSurat/ListKomentarBuatSurat';

const KomentarPopUp = ({ komen }) => {
  return (
    <div>
      <Box
        sx={{
          marginTop: '50px',
          backgroundColor: '#ffffff',
          border: '1px solid #d8d8d8',
          borderRadius: '10px',
          paddingY: '16px',
          mb: 6,
        }}
      >
        <Stack rowGap='10px'>
          <Typography fontSize='16px' fontWeight='700' paddingX='18px'>
            Komentar <span style={{ color: '#E42313' }}>*</span>
          </Typography>
          <Divider sx={{ borderColor: '#B1B5BA', borderBottomWidth: '2px' }} />
          <AppScrollbar
            sx={{
              maxHeight: '455px',
              overflowY: 'auto',
              paddingBottom: '10px',
            }}
            scrollToTop={false}
          >
            <ListKomentarBuatSurat komen={komen} />
          </AppScrollbar>
        </Stack>
      </Box>
    </div>
  );
};

KomentarPopUp.propTypes = {
  komen: PropTypes.string.isRequired,
};

export default KomentarPopUp;
