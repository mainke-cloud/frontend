import React from 'react';
import FolderWrapper from './FolderWrapper';
import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { Stack, Typography, InputBase, IconButton } from '@mui/material';
import searchIcon from '../../assets/icon/search.svg';
import { Menu, Grid as IconGrid } from 'feather-icons-react';
import HeaderDetail from '@crema/components/HeaderDetail';
import { Fonts } from '@crema/constants/AppEnums';
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';
import { dFolder } from '../../@crema/services/dummy/content/dataFolder';
import { dataFile } from '../../@crema/services/dummy/content/datafile';
import ListFolder from './content/ListFolder';
import ListFile from './content/ListFile';
const Folder = () => {
  return (
    <FolderWrapper>
      <HeaderDetail nama='Folder' />
      <Box
        sx={{
          alignContent: 'center',
        }}
      >
        <Box sx={{ margin: '30px' }}>
          <Box sx={{ padding: '20px', bgcolor: 'white' }}>
            <ListFolder files={dFolder} />
          </Box>
        </Box>
        <Box>
          <Box sx={{ backgroundColor: '#F7F8F9', padding: '30px' }}>
            <ListFile files={dataFile} />
          </Box>
        </Box>
      </Box>
    </FolderWrapper>
  );
};

export default Folder;
