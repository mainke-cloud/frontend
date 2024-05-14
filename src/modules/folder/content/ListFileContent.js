import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Fonts } from '@crema/constants/AppEnums';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';

import { useDispatch, useSelector } from 'react-redux';
import { addTab } from '../../../redux/actions/tabAction';

const ListFileContent = ({ files }) => {
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
      <Box pb='20px'>
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
              pl='10px'
              fontSize='14px'
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
    </>
  );
};
ListFileContent.propTypes = {
  files: PropTypes.arrayOf().isRequired,
};

export default ListFileContent;
