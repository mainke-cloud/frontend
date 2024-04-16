import React from 'react';
import { Divider, IconButton, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { closeTab } from '../../../redux/actions/tabActon';

import { X, Send, Save } from 'feather-icons-react';

const HeaderDetail = ({ nama, send, save }) => {
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const tab = tabs.find((tab) => tab.active);

  const handleTabClose = () => {
    dispatch(closeTab(tab.id, tabs));
  };

  return (
    <>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ paddingX: 8, paddingTop: 12, paddingBottom: 4 }}
      >
        <Typography fontSize='20px' fontWeight='700'>
          {nama}
        </Typography>
        <Stack direction='row' columnGap='24px'>
          {save && (
            <IconButton
              sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
            >
              <Save style={{ width: '28px', height: '28px' }} />
            </IconButton>
          )}
          {send && (
            <IconButton
              sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
            >
              <Send style={{ width: '28px', height: '28px' }} />
            </IconButton>
          )}
          <IconButton
            sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
            onClick={() => handleTabClose()}
          >
            <X style={{ width: '28px', height: '28px' }} />
          </IconButton>
        </Stack>
      </Stack>
      <Divider sx={{ borderColor: '#B1B5BA', borderBottomWidth: '2px' }} />
    </>
  );
};

HeaderDetail.propTypes = {
  nama: PropTypes.string,
  save: PropTypes.bool,
  send: PropTypes.bool,
};

export default HeaderDetail;
