import React from 'react';
import PropTypes from 'prop-types';
import { alpha, Box } from '@mui/material';
import { useSidebarContext } from '@crema/context/AppContextProvider/SidebarContextProvider';
import { ThemeMode } from '@crema/constants/AppEnums';

const BucketMinibarWrapper = ({ children, isHover, setHover }) => {
  const { sidebarBgColor, mode, sidebarTextColor } = useSidebarContext();

  return (
    <Box
      className='bucketMinibar'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        width: isHover ? 280 : 80,
        height: 'auto',
        maxHeight: '100vh',
        backgroundColor: sidebarBgColor,
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
          backgroundColor: (theme) =>
            mode === ThemeMode.LIGHT
              ? alpha(theme.palette.common.white, 0.05)
              : alpha(theme.palette.common.black, 0.05),
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
          backgroundColor: (theme) => theme.palette.background.paper,
          border: '1px solid #D1D9E2',
          borderRadius: '5px',
          display: 'flex',
          padding: '8px 16px',
          gap: '12px',
        },
        '& .search': {
          backgroundColor: (theme) => theme.palette.background.paper,
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
          width: '100%',
          backgroundColor: (theme) => theme.palette.background.paper,
          color: sidebarTextColor,
          border: '0 none',
          borderRadius: 0,
          mt: '4px',
          padding: '11px',
          '&:hover, &:focus': {
            color: (theme) => theme.palette.text.primary,
            backgroundColor: (theme) =>
            alpha(theme.palette.background.default, 0.9),
            borderColor: (theme) => alpha(theme.palette.text.secondary, 0.25),
          },
        },
        '& .icon-btn': {
          width: '100%',
          display: 'flex',
          justifyContent: isHover ? 'start' : 'center',
          gap: '12px',
        },
        '& .menu-text': {
          color: '#4B4747',
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
            width: '20px',
          },
        },
        '& .menu-item-boundary': {
          backgroundColor: (theme) => theme.palette.background.paper,
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
        },
        '& .submenu-text': {
          color:'#4B4747',
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