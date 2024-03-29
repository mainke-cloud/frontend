import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import BitBucketSidebarWrapper from './BitBucketSidebarWrapper';
import AppSidebarContainer from './AppSidebarContainer';
import BucketMinibar from './BucketMinibar';
import DisposisiSidebar from './Disposisi/Respon';
import MyDisposisiSidebar from './Disposisi/DisposisiSaya';
import TodoDisposisi from './Disposisi/Todo';
import LetterInDisposisi from './Surat/LetterInDisposisi';
import LetterOutDisposisi from './Surat/LetterOutDisposisi';
import ScannerDrafDisposisi from './ScanSurat/ScannerDrafDisposisi';
import ScannerLogScanDisposisi from './ScanSurat/ScannerLogScanDisposisi';

import { Typography, Drawer, Hidden, Box } from '@mui/material';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { useSelector } from 'react-redux';

const AppSidebar = (props) => {
  const {
    isCollapsed,
    setCollapsed,
    isNavCollapsed,
    toggleNavCollapsed,
    isHover,
    setHover,
    // routesConfig,
  } = props;

  const sidebar = useSelector((state) => state.sidebar.selectedSidebarName);

  const sideBarDisposisi = () => {
    switch (sidebar) {
      case 'Surat Masuk':
        return <LetterInDisposisi isCollapsed={props.isCollapsed} />;
      case 'Disposisi':
        return <DisposisiSidebar isCollapsed={props.isCollapsed} />;
      case 'Disposisi Saya':
        return <MyDisposisiSidebar isCollapsed={props.isCollapsed} />;
      case 'Todo':
        return <TodoDisposisi isCollapsed={props.isCollapsed} />;
      case 'Surat Keluar':
        return <LetterOutDisposisi isCollapsed={props.isCollapsed} />;
      case 'Log Scan Surat':
        return <ScannerLogScanDisposisi isCollapsed={props.isCollapsed} />;
      case 'Draft Scan Surat':
        return <ScannerDrafDisposisi isCollapsed={props.isCollapsed} />;
      default:
        return <DisposisiSidebar isCollapsed={props.isCollapsed} />;
    }
  };

  const sideBarComponent = () => {
    return (
      <BitBucketSidebarWrapper
        className={`bit-bucket-sidebar ${
          isCollapsed ? 'bit-bucket-btn-cls' : ''
        }`}
      >
        <Box className='bit-bucket-sidebar-fixed'>
          <Box
            className={`bit-bucket-btn ${
              isCollapsed ? 'bit-bucket-btn-cls' : ''
            }`}
            onClick={() => setCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <React.Fragment>
                <NavigateNextIcon />
                <Typography
                  variant='h6'
                  sx={{
                    writingMode: 'vertical-lr',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)',
                  }}
                >
                  Lihat Disposisi
                </Typography>
              </React.Fragment>
            ) : (
              <NavigateBeforeIcon />
            )}
          </Box>
          <BucketMinibar isHover={isHover} setHover={setHover} />
          <AppSidebarContainer className='app-sidebar-container'>
            {sideBarDisposisi()}
          </AppSidebarContainer>
        </Box>
      </BitBucketSidebarWrapper>
    );
  };
  return (
    <>
      <Hidden xlUp>
        <Drawer
          anchor={props.position}
          open={isNavCollapsed}
          onClose={toggleNavCollapsed}
          classes={{
            root: clsx(props.variant),
            paper: clsx(props.variant),
          }}
          style={{ position: 'absolute' }}
        >
          {sideBarComponent()}
        </Drawer>
      </Hidden>
      <Hidden lgDown>{sideBarComponent()}</Hidden>
    </>
  );
};
export default AppSidebar;

AppSidebar.defaultProps = {
  variant: '',
  position: 'left',
};

AppSidebar.propTypes = {
  position: PropTypes.string,
  variant: PropTypes.string,
  isCollapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
  isNavCollapsed: PropTypes.bool,
  toggleNavCollapsed: PropTypes.func,
  isHover: PropTypes.bool,
  setHover: PropTypes.func,
  routesConfig: PropTypes.array,
};
