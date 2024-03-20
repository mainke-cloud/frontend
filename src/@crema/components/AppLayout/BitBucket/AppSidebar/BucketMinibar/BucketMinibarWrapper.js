import React from 'react';
import PropTypes from 'prop-types';
import { alpha, Box } from '@mui/material';
// import { ThemeMode } from '@crema/constants/AppEnums';
// import { useSidebarContext } from '@crema/context/AppContextProvider/SidebarContextProvider';

const BucketMinibarWrapper = ({ children, isHover, setHover }) => {
  // const { sidebarBgColor, mode, sidebarTextColor } = useSidebarContext();

  return (
    <Box
      className='bucketMinibar'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        width: isHover ? 280 : 80,
        height: 'auto',
        maxHeight: '100vh',
        backgroundColor: '#fff',
        // backgroundColor: sidebarBgColor,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'width 0.5s ease',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          background: 'transparent',
          width: 0,
        },
        '&:before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          // backgroundColor: (theme) =>
          //   mode === ThemeMode.LIGHT
          //     ? alpha(theme.palette.common.white, 0.05)
          //     : alpha(theme.palette.common.black, 0.05),
        },
        '& > *': {
          position: 'relative',
          zIndex: 3,
        },
        '& .logo': {
          cursor: 'pointer',
          display: 'flex',
          justifyContent: isHover ? 'start' : 'center',
          padding: isHover ? '12px 5px' : '25px 5px',
          gap: '14px',
        },
        '& .user-profile': {
          backgroundColor: '#fff',
          border: '1px solid #D1D9E2',
          borderRadius: '5px',
          display: 'flex',
          padding: '8px 16px',
          gap: '12px',
        },
        '& .search': {
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          border: '1px solid #D9DDE3',
          borderRadius: '6px',
          marginTop: '12px',
          marginBottom: '20px',
          padding: '0 6px',
          height: '30px',
          '& img': {
            width: '20px',
          },
        },
        '& .menu-icon-btn': {
          backgroundColor: '#fff',
          // color: isHover ? 'red' : '#fff',
          // color: sidebarTextColor,
          color: '#4B4747',
          width: '100%',
          border: '0 none',
          borderRadius: 0,
          padding: '4px 11px',
          '&:hover': {
            backgroundColor: '#F4F4F4',
            color: '#E42313',
            borderColor: (theme) => alpha(theme.palette.text.secondary, 0.25),
            // color: (theme) => theme.palette.text.primary,
            // backgroundColor: (theme) =>
            // alpha(theme.palette.background.default, 0.9),
          },
        },
        '& .icon-btn': {
          width: '100%',
          display: 'flex',
          justifyContent: isHover ? 'start' : 'center',
          alignItems: 'center',
          // backgroundColor: 'blue',
          gap: '12px',
        },
        '& .icon-img': {
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'blue',
          '& img': {
            // width: '20px',
            // backgroundColor: 'red',
          }
        },
        '& .menu-text': {
          fontWeight: '700',
          fontSize: '14px',
          lineHeight: '21px',
        },
        '& .menu-item-sidebar': {
          width: '100%',
          height: 'auto',
          paddingBottom: 1.5,
          textAlign: isHover ? 'none' : 'center',
          '& img': {
            // width: '20px',
            // backgroundColor: 'red',
          },
        },
        '& .menu-item-boundary': {
          backgroundColor: '#fff',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '24px',
          padding: '5px 12px',
        },
        '& .submenu-icon-btn': {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        },
        '& .submenu-item': {
          width: '100%',
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          borderRadius: 0,
          padding: '11px 24px',
          gap: '12px',
          '&:hover': {
            backgroundColor: '#F4F4F4',
            color: '#E42313',
          },
        },
        '& .submenu-text': {
          fontWeight:'700',
          fontSize:'14px',
          lineHeight:'21px',
        },
      }}
    >
      {children}
    </Box>
  );
};

BucketMinibarWrapper.propTypes = {
  children: PropTypes.node,
  isHover: PropTypes.bool.isRequired,
  setHover: PropTypes.func.isRequired,
};

export default BucketMinibarWrapper;