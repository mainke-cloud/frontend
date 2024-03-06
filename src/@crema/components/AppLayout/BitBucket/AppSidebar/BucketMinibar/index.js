import React from 'react';
import BucketMinibarWrapper from './BucketMinibarWrapper';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AppLngSwitcher from '../../../../AppLngSwitcher';
import AppMessages from '../../../../AppMessages';
import AppNotifications from '../../../../AppNotifications';
import UserInfo from '../UserInfo';
import { allowMultiLanguage } from '../../../../../constants/AppConst';
import logo from '../../../../../../assets/icon/logo.svg';
import AppDashboard from '@crema/components/AppDashboard';
import { useDispatch, useSelector } from 'react-redux';
import { activateTab, addTab } from '../../../../../../redux/actions/tabActon';
import AppMail from '@crema/components/AppMail';
const BucketMinibar = () => {
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
    <BucketMinibarWrapper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 1.5,
        }}
      >
        <IconButton
          sx={{
            flexDirection: 'column',
            color: 'white',
            mb: 2.5,
          }}
          aria-label='show 17 new notifications'
        >
          <img src={logo} alt='Logo' />
        </IconButton>
        <IconButton
          className='search-icon-btn'
          aria-label='show 17 new notifications'
        >
          <SearchIcon />
        </IconButton>
        {allowMultiLanguage && (
          <AppLngSwitcher iconOnly={true} tooltipPosition='right' />
        )}
        <AppNotifications
          drawerPosition='left'
          tooltipPosition='right'
          sxNotificationContentStyle={{ width: 320 }}
        />
        <AppMessages
          drawerPosition='left'
          tooltipPosition='right'
          sxMessageContentStyle={{ width: 320 }}
        />
        <AppDashboard onMoveTab={() => handlePindah('dashboard')} />
        <AppMail onAddTab={() => handleAddTab('Folder')} />
        <AppMail onAddTab={() => handleAddTab('Keamanan')} />
        <AppMail onAddTab={() => handleAddTab('Bantuan')} />
        <AppMail onAddTab={() => handleAddTab('Profile')} />
      </Box>
      <Box
        sx={{
          mt: 'auto',
        }}
      >
        <UserInfo />
      </Box>
    </BucketMinibarWrapper>
  );
};

export default BucketMinibar;
