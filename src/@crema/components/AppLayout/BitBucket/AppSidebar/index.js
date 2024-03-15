import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import AppScrollbar from '../../../AppScrollbar';
import MainSidebar from '../../components/MainSidebar';
import BitBucketSidebarWrapper from './BitBucketSidebarWrapper';
import AppSidebarContainer from './AppSidebarContainer';
import BucketMinibar from './BucketMinibar';
import TodoDisposisi from './TodoDisposisi';
import LetterDisposisi from './LetterDisposisi';
import ScannerDisposisi from './ScannerDisposisi';
import DisposisiSidebar from './DisposisiSidebar';

import {
  Grid,
  Typography,
  ButtonGroup,
  IconButton,
  Drawer,
  Hidden,
  Box,
} from '@mui/material';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Plus, Filter, Search } from 'feather-icons-react';

import { Fonts } from '@crema/constants/AppEnums';

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
                  sx={{ writingMode: 'vertical-lr', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
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
            <MainSidebar>
              <Box sx={{ py: 2.5, px: 3.5 }}>
                <Grid
                  container
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Grid item xs={7}>
                    <Typography
                      sx={{ fontSize: 18, fontWeight: Fonts.BOLD }}
                      component='h2'
                    >
                      Disposisi
                    </Typography>
                    <Typography
                      sx={{ fontSize: 12, fontWeight: Fonts.LIGHT }}
                      component='h2'
                    >
                      My Disposisi
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <ButtonGroup>
                      <IconButton>
                        <Search />
                      </IconButton>
                      <IconButton>
                        <Filter />
                      </IconButton>
                      <IconButton>
                        <Plus />
                      </IconButton>
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </Box>
              <AppScrollbar
                sx={{
                  height: 'calc(100vh - 70px) !important',
                }}
                scrollToTop={false}
              >
                <DisposisiSidebar isCollapsed={isCollapsed} />
                <TodoDisposisi isCollapsed={isCollapsed} />
                <LetterDisposisi isCollapsed={isCollapsed} />
                <ScannerDisposisi isCollapsed={isCollapsed} />
              </AppScrollbar>
            </MainSidebar>
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
