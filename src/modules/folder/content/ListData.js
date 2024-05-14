import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from '@mui/material';
import { ArrowForwardIosSharp } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import FolderWrapper from '../FolderWrapper';
import HeaderDetail from '@crema/components/HeaderDetail';
import { Fonts } from '@crema/constants/AppEnums';
import { dataFile } from '../../../@crema/services/dummy/content/datafile';
import ListFileContent from './ListFileContent';

const StyledAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  backgroundColor: 'white',
}));
const AccordionSummarys = styled((props) => (
  <AccordionSummary
    expandIcon={
      <ArrowForwardIosSharp
        sx={{
          fontWeight: 'bold',
          color: 'black',
          paddingLeft: '8px',
          transform: 'rotate(180deg)',
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(-90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));
const ListData = ({ files }) => {
  return (
    <FolderWrapper>
      <HeaderDetail nama='Folder Saya' />
      <Box sx={{ margin: '16px' }}>
        <StyledAccordion>
          <Stack direction='row' justifyContent='space-between'>
            <Typography
              sx={{ pl: '15px', fontSize: '16px', fontWeight: Fonts.BOLD }}
            >
              Folder Saya / {files.name}
            </Typography>
            <AccordionSummarys>
              <Typography
                pr='10px'
                sx={{ fontSize: '16px', fontWeight: Fonts.BOLD }}
              >
                Terbaru
              </Typography>
            </AccordionSummarys>
          </Stack>
          <AccordionDetails>
            <ListFileContent files={dataFile} />
          </AccordionDetails>
        </StyledAccordion>
      </Box>
    </FolderWrapper>
  );
};

ListData.propTypes = {
  files: PropTypes.object,
};

export default ListData;
