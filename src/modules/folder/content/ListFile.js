import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { ArrowForwardIosSharp } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Fonts } from '@crema/constants/AppEnums';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import { useDispatch, useSelector } from 'react-redux';
import { addTab } from '../../../redux/actions/tabAction';

const StyledAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  backgroundColor: '#F7F8F9',
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
const ListFile = ({ files }) => {
  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #d8d8d8',
    padding: '16px',
    justifyContent: 'space-around',
  }));

  const [listType, setListType] = useState(0);
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const id = useSelector((state) => state.tab.idCounter);

  const handleDetailList = () => {
    setListType(1);
  };

  const handleImageList = () => {
    setListType(0);
  };

  const handleOpenFile = () => {
    dispatch(addTab(id, tabs, 'surat masuk'));
  };

  return (
    <>
      <StyledAccordion>
        <Stack direction='row' justifyContent='space-between'>
          <Typography
            sx={{ fontSize: '16px', fontWeight: Fonts.BOLD, pl: '10px' }}
          >
            File Terakhir Disimpan
          </Typography>

          <AccordionSummarys
            aria-controls='panel1-content'
            id='panel1-header'
            sx={{ pr: '30px' }}
          >
            <Typography
              pr='10px'
              sx={{ fontSize: '16px', fontWeight: Fonts.BOLD }}
            >
              Terbaru
            </Typography>
          </AccordionSummarys>
        </Stack>
        <AccordionDetails>
          <Box mt='16px'>
            <StyledBox
              sx={{
                border: 'none',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: (theme) => theme.palette.gray[300],
                  cursor: 'pointer',
                },
              }}
            >
              <Stack
                direction='row'
                alignItems='center'
                justifyContent='space-between'
              >
                <Typography
                  pl='20px'
                  fontSize='12px'
                  color='#262829'
                  sx={{ fontWeight: Fonts.BOLD }}
                >
                  Nama Folder
                </Typography>
                <Stack direction='row'>
                  <Typography
                    pr='100px'
                    fontSize='12px'
                    color='#262829'
                    sx={{ fontWeight: Fonts.BOLD }}
                  >
                    Tipe Surat
                  </Typography>
                  <Typography
                    pr='20px'
                    fontSize='12px'
                    color='#262829'
                    sx={{ fontWeight: Fonts.BOLD }}
                  >
                    Tanggal dibuat
                  </Typography>
                </Stack>
              </Stack>
            </StyledBox>
            <Divider />
            <Stack>
              {files.slice(0, 6).map((file, index) => (
                <React.Fragment key={index}>
                  <StyledBox
                    sx={{
                      border: 'none',
                      transition: 'background-color 0.3s ease',
                      '&:hover': {
                        backgroundColor: (theme) => theme.palette.gray[300],
                        cursor: 'pointer',
                      },
                    }}
                    onClick={() => handleOpenFile(file)}
                  >
                    <Stack
                      direction='row'
                      alignItems='center'
                      justifyContent='space-between'
                      spacing={2}
                    >
                      <Stack direction='row' spacing={2} alignItems='center'>
                        <InsertDriveFileRoundedIcon
                          sx={{ color: '#F4CACA', width: 27, height: 30 }}
                        />
                        <Typography fontSize='12px' color='#5C5E61'>
                          {file.perihal}
                        </Typography>
                      </Stack>
                      <Stack direction='row' spacing={2} alignItems='center'>
                        <Stack direction='row ' sx={{ pr: '70px' }}>
                          <Avatar
                            src={file.icon}
                            alt='icon'
                            sx={{ width: '19px', height: '19px' }}
                          />
                          <Typography
                            fontSize='12px'
                            color='#5C5E61'
                            sx={{ pl: '15px' }}
                          >
                            {file.tipe}
                          </Typography>
                        </Stack>
                        <Typography
                          fontSize='12px'
                          color='#5C5E61'
                          sx={{ pr: '35px' }}
                        >
                          {file.tanggal}
                        </Typography>
                      </Stack>
                    </Stack>
                  </StyledBox>
                  <Divider />
                </React.Fragment>
              ))}
            </Stack>
          </Box>
        </AccordionDetails>
      </StyledAccordion>
    </>
  );
};
ListFile.propTypes = {
  files: PropTypes.arrayOf().isRequired,
};

export default ListFile;
