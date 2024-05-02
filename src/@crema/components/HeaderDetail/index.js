import React, { useState } from 'react';
import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ComposeMail from '../AppAddress';
import { closeTab } from '../../../redux/actions/tabAction';
import { X, Send, Save } from 'feather-icons-react';
import {
  Edit,
  Printer,
  FileText,
  Copy,
  CornerDownLeft,
  RotateCcw,
  Check,
} from 'feather-icons-react';
import { Clipboard, Globe } from 'feather-icons-react';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import ShortcutTwoToneIcon from '@mui/icons-material/ShortcutTwoTone';
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';
import { handleEdit, handleClose } from '../../../redux/actions/headerAction';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { BsTranslate } from 'react-icons/bs';
import { addTab } from '../../../redux/actions/tabAction';
import AppTooltip from '../AppTooltip';

const HeaderDetail = ({
  nama,
  send,
  save,
  copy,
  copy2,
  translate,
  edit,
  printer,
  filetext,
  cornerdownleft,
  rotateccw,
  check,
  globe,
  clipboard,
  forward,
  IsEditing,
  disposisi,
  batas,
  folderup,
}) => {
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const tab = tabs.find((tab) => tab.active);
  const tabId = useSelector((state) => state.tab.idCounter);
  const isEdit = useSelector((state) => state.header.isEdit);
  const [isComposeMail, setComposeMail] = React.useState(false);
  const sidebar = useSelector((state) => state.sidebar.selectedSidebarName);

  const onOpenComposeMail = () => {
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setComposeMail(false);
  };

  const handleTabClose = () => {
    dispatch(closeTab(tab.id, tabs));
  };
  const handleEdits = () => {
    dispatch(handleEdit());
  };

  const handleClosed = () => {
    dispatch(handleClose());
  };

  const handleBuatDisposisi = (name) => {
    dispatch(addTab(tabId, tabs, name));
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
          {isEdit ? (
            <>
              <AppTooltip title='Save' placement='bottom'>
                <IconButton
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                >
                  <Save style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>

              <AppTooltip title='Check' placement='bottom'>
                <IconButton
                  sx={{
                    border: '1px solid #B1B5BA',
                    borderRadius: '3px',
                    color: 'white',
                    background: '#A3E6CD',
                  }}
                >
                  <Check style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>
              <AppTooltip title='Kembalikan' placement='bottom'>
                <IconButton
                  sx={{
                    border: '1px solid #B1B5BA',
                    borderRadius: '3px',
                    color: 'white',
                    background: '#FFD079',
                  }}
                >
                  <CornerDownLeft style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>

              <AppTooltip title='Kembalikan ke Komposer' placement='bottom'>
                <IconButton
                  sx={{
                    border: '1px solid #B1B5BA',
                    borderRadius: '3px',
                    color: 'white',
                    background: '#FFD079',
                  }}
                >
                  <RotateCcw style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>

              <AppTooltip title='Batal' placement='bottom'>
                <IconButton
                  sx={{
                    border: '1px solid #B1B5BA',
                    borderRadius: '3px',
                    color: 'white',
                    background: '#FF7452',
                  }}
                  onClick={handleClosed}
                >
                  <X style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>

              <AppTooltip title='Copy Ref' placement='bottom'>
                <IconButton
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                >
                  <FileText style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>

              <AppTooltip title='Translate' placement='bottom'>
                <IconButton
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                >
                  <BsTranslate style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>

              <AppTooltip title='Tutup Tab' placement='bottom'>
                <IconButton
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  onClick={() => handleTabClose()}
                >
                  <X style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>
            </>
          ) : (
            <>
              {save && (
                <AppTooltip title='Save' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <Save style={{ width: '28px', height: '28px' }} />
                  </IconButton>
                </AppTooltip>
              )}
              {send && (
                <AppTooltip title='Kirim' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <Send style={{ width: '28px', height: '28px' }} />
                  </IconButton>
                </AppTooltip>
              )}
              {clipboard && (
                <AppTooltip title='Kirim' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <Clipboard style={{ width: '28px', height: '28px' }} />
                  </IconButton>
                </AppTooltip>
              )}
              {globe && (
                <AppTooltip title='Kirim' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <Globe style={{ width: '28px', height: '28px' }} />
                  </IconButton>
                </AppTooltip>
              )}
              {copy && (
                <AppTooltip title='Kirim' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <AssignmentOutlinedIcon
                      style={{ width: '28px', height: '28px' }}
                    />
                  </IconButton>
                </AppTooltip>
              )}
              {translate && (
                <AppTooltip title='Kirim' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <BsTranslate style={{ width: '28px', height: '28px' }} />
                  </IconButton>
                </AppTooltip>
              )}
              {edit && (
                <AppTooltip title='Edit Surat' placement='bottom'>
                  <IconButton
                    onClick={handleEdits}
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <Edit style={{ width: '28px', height: '28px' }} />
                  </IconButton>
                </AppTooltip>
              )}
              {disposisi && (
                <AppTooltip title='Kirim' placement='bottom'>
                  <IconButton
                    onClick={() => handleBuatDisposisi('BuatDisposisi')}
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <AutorenewRoundedIcon
                      style={{ width: '28px', height: '28px' }}
                    />
                  </IconButton>
                </AppTooltip>
              )}
              {forward && (
                <AppTooltip title='Kirim' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <ShortcutTwoToneIcon
                      style={{ width: '28px', height: '28px' }}
                    />
                  </IconButton>
                </AppTooltip>
              )}
              {printer && (
                <AppTooltip title='Print Surat' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <Printer style={{ width: '28px', height: '28px' }} />
                  </IconButton>
                </AppTooltip>
              )}
              {batas && (
                <Box
                  style={{
                    height: '48px',
                    borderLeft: '3px solid #B1B5BA',
                  }}
                />
              )}
              {copy2 && (
                <AppTooltip title='Kirim' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <AssignmentOutlinedIcon
                      style={{ width: '28px', height: '28px' }}
                    />
                  </IconButton>
                </AppTooltip>
              )}
              {folderup && (
                <AppTooltip title='Kirim' placement='bottom'>
                  <IconButton
                    sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  >
                    <DriveFolderUploadRoundedIcon
                      style={{ width: '28px', height: '28px' }}
                    />
                  </IconButton>
                </AppTooltip>
              )}
              <AppTooltip title='Tutup Tab' placement='bottom'>
                <IconButton
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                  onClick={() => handleTabClose()}
                >
                  <X style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>
            </>
          )}
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
  copy: PropTypes.bool,
  copy2: PropTypes.bool,
  translate: PropTypes.bool,
  edit: PropTypes.bool,
  printer: PropTypes.bool,
  filetext: PropTypes.bool,
  cornerdownleft: PropTypes.bool,
  rotateccw: PropTypes.bool,
  check: PropTypes.bool,
  globe: PropTypes.bool,
  disposisi: PropTypes.bool,
  clipboard: PropTypes.bool,
  forward: PropTypes.bool,
  batas: PropTypes.bool,
  folderup: PropTypes.bool,
  IsEditing: PropTypes.bool,
};

export default HeaderDetail;
