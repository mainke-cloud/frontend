import React from 'react';
import PropTypes from 'prop-types';
import { Box, InputBase, Typography, IconButton } from '@mui/material';
import BucketMinibarWrapper from './BucketMinibarWrapper';
import BucketMinibarMenu from './BucketMinibarMenu';
import BucketMinibarItem from './BucketMinibarItem';
import logo1 from '../../../../../../assets/icon/logo1.svg';
import userProfile from '../../../../../../assets/icon/user-profile.svg';
import search from '../../../../../../assets/icon/search.svg';
import logo from '../../../../../../assets/icon/logo.svg';
import AppDashboard from '@crema/components/AppDashboard';
import { useDispatch, useSelector } from 'react-redux';
import { activateTab, addTab } from '../../../../../../redux/actions/tabActon';
import AppMail from '@crema/components/AppMail';
const BucketMinibar = (props) => {
  const { isHover, setHover } = props;

  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const id = useSelector((state) => state.tab.idCounter);

  const handleAddTab = (type) => {
    dispatch(addTab(id, tabs, type));
  };
  const handlePindah = (tabId) => {
    console.log(tabId);
    dispatch(activateTab(tabId, tabs));
  };

  return (
    <BucketMinibarWrapper isHover={isHover} setHover={setHover}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 1.5,
        }}
      >
        <Box
          sx={{
            flexDirection: 'column',
            border: 0,
            borderRadius: 0,
            my: 2.5,
            width: '90%',
          }}
          aria-label='show 17 new notifications'
        >
          <Box className='logo'>
            <img src={logo1} alt='logo1' />
            {isHover && (
              <Typography
                sx={{
                  color: '#262829',
                  fontWeight: '600',
                  fontSize: '18px',
                  lineHeight: '28px',
                }}
              >
                Coofis NDE
              </Typography>
            )}
          </Box>
          {isHover && (
            <Box className='user-profile'>
              <img src={userProfile} alt='user-profile' />
              <Box sx={{ color: '#262829' }}>
                <Typography sx={{ fontWeight: '700', fontSize: '16px' }}>
                  Samsul
                </Typography>
                <Typography sx={{ fontWeight: '600', fontSize: '10px' }}>
                  7400493247092348932
                </Typography>
              </Box>
            </Box>
          )}
          {isHover ? (
            <Box className='search'>
              <InputBase placeholder='Search' sx={{ width: '100%' }} />
              <IconButton aria-label='show 17 new notifications'>
                <img src={search} alt='search' />
              </IconButton>
            </Box>
          ) : (
            <BucketMinibarItem badge={0} icon='search' />
          )}
        </Box>

        <BucketMinibarMenu isHover={isHover} title='Menu'>
          <BucketMinibarItem
            isHover={isHover}
            badge={0}
            icon='home'
            text='Dashboard'
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={10}
            icon='inbox'
            text='Surat Masuk'
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={20}
            icon='disposisi'
            text='Disposisi'
            more={true}
            subMenu={[
              { name: 'Disposisi' },
              { name: 'Disposisi Saya' },
              { name: 'Todo' },
            ]}
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={12}
            icon='mail'
            text='Surat Keluar'
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={0}
            icon='folder'
            text='Folder'
            onAddTab={() => handleAddTab('Folder')}
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={0}
            icon='archive'
            text='Archive'
            more={true}
            subMenu={[
              { name: 'Surat Masuk' },
              { name: 'Surat Keluar' },
              { name: 'Surat Tertunda' },
              { name: 'Disposisi' },
              { name: 'Disposisi Saya' },
              { name: 'Todo' },
            ]}
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={0}
            icon='settings'
            text='Alat'
            more={true}
            subMenu={[{ name: 'Delegasi' }, { name: 'Sekretaris' }]}
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={0}
            icon='scan'
            text='Scan Surat'
            more={true}
            subMenu={[
              { name: 'Scan Surat Masuk' },
              { name: 'Log Scan Surat' },
              { name: 'Draft Scan Surat' },
            ]}
          />
        </BucketMinibarMenu>

        <BucketMinibarMenu isHover={isHover} title='Other Option' border={true}>
          <BucketMinibarItem
            isHover={isHover}
            badge={0}
            icon='security'
            text='Security'
            onAddTab={() => handleAddTab('Keamanan')}
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={0}
            icon='help'
            text='Help'
            onAddTab={() => handleAddTab('FAQ')}
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={0}
            icon='user'
            text='Profile'
            onAddTab={() => handleAddTab('Profile')}
          />
          <BucketMinibarItem
            isHover={isHover}
            badge={0}
            icon='logout'
            text='Logout'
          />
        </BucketMinibarMenu>
      </Box>
    </BucketMinibarWrapper>
  );
};

export default BucketMinibar;

BucketMinibar.propTypes = {
  isHover: PropTypes.bool,
  setHover: PropTypes.func,
};
