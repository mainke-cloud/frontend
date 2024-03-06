import React from 'react';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import AppTooltip from '../AppTooltip';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const AppDashboard = ({
  onAddTab,
  isMenu,
  tooltipPosition,
}) => {
  const handleAddTab = () => {
    if (onAddTab) {
      onAddTab();
    }
  };

  return (
    <>
      {isMenu ? (
        <span onClick={handleAddTab}>
          Gimank
        </span>
      ) : (
        <AppTooltip title='Dashboard' placement={tooltipPosition}>
          <IconButton
            className='icon-btn'
            onClick={handleAddTab}
            size='large'
          >
            <HomeOutlinedIcon className='icon' />
          </IconButton>
        </AppTooltip>
      )}
    </>
  );
};

AppDashboard.defaultProps = {
  tooltipPosition: 'bottom',
};

AppDashboard.propTypes = {
  onAddTab: PropTypes.func,
  isMenu: PropTypes.bool,
  tooltipPosition: PropTypes.string,
};

export default AppDashboard;
