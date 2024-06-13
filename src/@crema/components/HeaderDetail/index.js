import React from 'react';
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { childTab, closeTab } from '../../../redux/actions/tabAction';
import { X, Send, Save } from 'feather-icons-react';
import {
  Edit,
  Printer,
  FileText,
  // Copy,
  CornerDownLeft,
  RotateCcw,
  Check,
  FilePlus,
  Trash2,
} from 'feather-icons-react';
import { Clipboard, Globe } from 'feather-icons-react';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import ShortcutTwoToneIcon from '@mui/icons-material/ShortcutTwoTone';
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';
import {
  handleEdit,
  handleClose,
  handleTemplate,
} from '../../../redux/actions/headerAction';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { BsTranslate } from 'react-icons/bs';
import { addTab } from '../../../redux/actions/tabAction';
import AppTooltip from '../AppTooltip';
import MasukanFolder from '../../../assets/icon/MasukanFolder.svg';
import TemplateSurat from '../../../assets/icon/TemplateSurat.svg';
import BuatSuratdariTemplate from '../../../assets/icon/BuatSuratdariTemplate.svg';
import Copy2Paper from '../../../assets/icon/copy.svg';
import SignIcon from '../../../assets/icon/TandaTangan.svg';
import Hapus from '../../../assets/icon/Trash.svg';
import FormDialog from '../Tabs/FormDialog';
import FormDialogOtp from '../Tabs/FormDialogOtp';
import NotifDialogSign from '../Tabs/NotifDialogSign';
import ModalConfirmation2 from '../Tabs/BuatSurat/ModalConfirmation/ModalConfirmation2';
const HeaderDetail = ({
  nama,
  send,
  save,
  copy,
  copy2,
  copyFile,
  translate,
  edit,
  editTemplate,
  edit2,
  buatSuratdariTemplate,
  printer,
  // filetext,
  // cornerdownleft,
  // rotateccw,
  // check,
  globe,
  clipboard,
  forward,
  // IsEditing,
  disposisi,
  batas,
  folderup,
  masukan_folder,
  template_surat,
  copy3,
  sign,
  hapus,
  templateData,
}) => {
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const tab = tabs.find((tab) => tab.active);
  const tabId = useSelector((state) => state.tab.idCounter);
  const isEdit = useSelector((state) => state.header.isEdit);
  const isTemplate = useSelector((state) => state.header.isTemplate);
  const [openModal, setOpenModal] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);
  const [openModal3, setOpenModal3] = React.useState(false);
  const [openModal4, setOpenModal4] = React.useState(false);
  const [openModal5, setOpenModal5] = React.useState(false);
  const [openModal6, setOpenModal6] = React.useState(false);
  const [openModal7, setOpenModal7] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);
  const handleNextModal = () => {
    setOpenModal(false);
    dispatch(handleClose());
  };

  const handleOpenModal2 = () => {
    setOpenModal2(true);
  };

  const handleCloseModal2 = () => setOpenModal2(false);
  const handleNextModal2 = () => {
    setOpenModal2(false);
    dispatch(handleClose());
  };

  const handleOpenModal3 = () => {
    setOpenModal3(true);
  };

  const handleCloseModal3 = () => setOpenModal3(false);
  const handleNextModal3 = () => {
    setOpenModal3(false);
    dispatch(handleClose());
  };

  const handleOpenModal4 = () => {
    setOpenModal4(true);
  };

  const handleCloseModal4 = () => setOpenModal4(false);
  const handleNextModal4 = () => {
    setOpenModal4(false);
    dispatch(handleClose());
  };

  const handleOpenModal5 = () => {
    setOpenModal5(true);
  };

  const handleCloseModal5 = () => setOpenModal5(false);
  const handleNextModal5 = () => {
    setOpenModal5(false);
    dispatch(handleClose());
  };
  const handleOpenModal6 = () => {
    setOpenModal6(true);
  };
  const handleCloseModal6 = () => setOpenModal6(false);
  const handleNextModal6 = () => {
    setOpenModal6(false);
    dispatch(handleClose());
  };

  const handleOpenModal7 = () => {
    setOpenModal7(true);
  };
  const handleCloseModal7 = () => setOpenModal7(false);
  const handleNextModal7 = () => {
    setOpenModal7(false);
    dispatch(closeTab(tab.id, tabs));
  };

  const handleTabClose = () => {
    dispatch(closeTab(tab.id, tabs));
  };
  const handleEdits = () => {
    dispatch(handleEdit());
  };

  const handleTemplates = () => {
    dispatch(handleTemplate());
  };

  const handleClosed = () => {
    dispatch(handleClose());
  };

  const handleAddTab = (name) => {
    dispatch(addTab(tabId, tabs, name));
  };

  const handleCreateTemplate = (name) => {
    dispatch(childTab(templateData.id, tabs, name, templateData));
  };

  const [openformsign, setOpenFormSign] = React.useState(false);
  const [openformotp, setOpenFormOtp] = React.useState(false);
  const [opennotif, setOpenNotif] = React.useState(false);
  const handleGetEmail = (email) => {
    console.log(email);
    if (email) {
      handleOpenOtp();
    }
  };
  const handleGetOtp = (otp) => {
    console.log(otp);
    if (otp) {
      handleOpenNotif();
    }
  };
  const handleOpenSign = () => {
    setOpenFormSign(true);
  };
  const handleCloseSign = () => {
    setOpenFormSign(false);
  };
  const handleOpenOtp = () => {
    setOpenFormOtp(true);
  };
  const handleCloseOtp = () => {
    setOpenFormOtp(false);
  };
  const handleOpenNotif = () => {
    setOpenNotif(true);
  };
  const handleCloseNotif = () => {
    setOpenNotif(false);
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
                  onClick={handleOpenModal5}
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                >
                  <Save style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>

              <AppTooltip title='Check' placement='bottom'>
                <IconButton
                  onClick={handleOpenModal}
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
                  onClick={handleOpenModal2}
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
                  onClick={handleOpenModal3}
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
                  onClick={handleOpenModal4}
                  sx={{
                    border: '1px solid #B1B5BA',
                    borderRadius: '3px',
                    color: 'white',
                    background: '#FF7452',
                  }}
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
                  onClick={handleOpenModal6}
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                >
                  <BsTranslate style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>

              <AppTooltip title='Tutup Tab' placement='bottom'>
                <IconButton
                  onClick={handleOpenModal7}
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                >
                  <X style={{ width: '28px', height: '28px' }} />
                </IconButton>
              </AppTooltip>
            </>
          ) : (
            <>
              {isTemplate ? (
                <>
                  <AppTooltip title='Save' placement='bottom'>
                    <IconButton
                      sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                    >
                      <Save style={{ width: '28px', height: '28px' }} />
                    </IconButton>
                  </AppTooltip>
                  <AppTooltip title='Terjemahkan' placement='bottom'>
                    <IconButton
                      sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                    >
                      <BsTranslate style={{ width: '28px', height: '28px' }} />
                    </IconButton>
                  </AppTooltip>
                  <AppTooltip title='Tutup Tab' placement='bottom'>
                    <IconButton
                      onClick={handleOpenModal7}
                      sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
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
                        sx={{
                          border: '1px solid #B1B5BA',
                          borderRadius: '3px',
                        }}
                      >
                        <Save style={{ width: '28px', height: '28px' }} />
                      </IconButton>
                    </AppTooltip>
                  )}
                  {send && (
                    <AppTooltip title='Kirim' placement='bottom'>
                      <IconButton
                        sx={{
                          border: '1px solid #B1B5BA',
                          borderRadius: '3px',
                        }}
                      >
                        <Send style={{ width: '28px', height: '28px' }} />
                      </IconButton>
                    </AppTooltip>
                  )}
                  {clipboard && (
                    <AppTooltip title='Kirim' placement='bottom'>
                      <IconButton
                        sx={{
                          border: '1px solid #B1B5BA',
                          borderRadius: '3px',
                        }}
                      >
                        <Clipboard style={{ width: '28px', height: '28px' }} />
                      </IconButton>
                    </AppTooltip>
                  )}
                  {globe && (
                    <IconButton
                      onClick={() => handleAddTab('BuatDisposisi')}
                      sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                    >
                      <Globe style={{ width: '28px', height: '28px' }} />
                    </IconButton>
                  )}
                  {copy && (
                    <AppTooltip title='Kirim' placement='bottom'>
                      <IconButton
                        sx={{
                          border: '1px solid #B1B5BA',
                          borderRadius: '3px',
                        }}
                      >
                        <AssignmentOutlinedIcon
                          style={{ width: '28px', height: '28px' }}
                        />
                      </IconButton>
                    </AppTooltip>
                  )}
                  {translate && (
                    <AppTooltip title='Terjemahkan' placement='bottom'>
                      <IconButton
                        sx={{
                          border: '1px solid #B1B5BA',
                          borderRadius: '3px',
                        }}
                      >
                        <BsTranslate
                          style={{ width: '28px', height: '28px' }}
                        />
                      </IconButton>
                    </AppTooltip>
                  )}
                  {buatSuratdariTemplate && (
                    <AppTooltip
                      title='Buat Dokumen dari Template ini'
                      placement='bottom'
                    >
                      <IconButton
                        sx={{
                          border: '1px solid #B1B5BA',
                          borderRadius: '3px',
                        }}
                      >
                        <img
                          src={BuatSuratdariTemplate}
                          alt='BuatSuratdariTemplate'
                          style={{ width: '28px', height: '28px' }}
                        />
                      </IconButton>
                    </AppTooltip>
                  )}
                  {edit && (
                    <AppTooltip title='Edit Surat' placement='bottom'>
                      <IconButton
                        onClick={handleEdits}
                        sx={{
                          border: '1px solid #B1B5BA',
                          borderRadius: '3px',
                        }}
                      >
                        <Edit style={{ width: '28px', height: '28px' }} />
                      </IconButton>
                    </AppTooltip>
                  )}
                  {editTemplate && (
                    <AppTooltip title='Edit Template Surat' placement='bottom'>
                      <IconButton
                        onClick={handleTemplates}
                        sx={{
                          border: '1px solid #B1B5BA',
                          borderRadius: '3px',
                        }}
                      >
                        <Edit style={{ width: '28px', height: '28px' }} />
                      </IconButton>
                    </AppTooltip>
                  )}
                  {disposisi && (
                    <AppTooltip title='Disposisi' placement='bottom'>
                      <IconButton
                        onClick={() => handleAddTab('BuatDisposisi')}
                        sx={{
                          border: '1px solid #B1B5BA',
                          borderRadius: '3px',
                        }}
                      >
                        <AutorenewRoundedIcon
                          style={{ width: '28px', height: '28px' }}
                        />
                      </IconButton>
                    </AppTooltip>
                  )}
                  {forward && (
                    <AppTooltip title='Teruskan' placement='bottom'>
                      <IconButton
                        sx={{
                          border: '1px solid #B1B5BA',
                          borderRadius: '3px',
                        }}
                        onClick={() => handleAddTab('Forward')}
                      >
                        <ShortcutTwoToneIcon
                          style={{ width: '28px', height: '28px' }}
                        />
                      </IconButton>
                    </AppTooltip>
                  )}
                  {sign && (
                    <>
                      <AppTooltip title='Tanda Tangan' placement='bottom'>
                        <IconButton
                          sx={{
                            border: '1px solid #B1B5BA',
                            borderRadius: '3px',
                          }}
                          onClick={handleOpenSign}
                        >
                          <img
                            src={SignIcon}
                            alt='SignIcon'
                            style={{ width: '28px', height: '28px' }}
                          />
                        </IconButton>
                      </AppTooltip>
                    </>
                  )}
                  {printer && (
                    <AppTooltip title='Print Surat' placement='bottom'>
                      <IconButton
                        sx={{
                          border: '1px solid #B1B5BA',
                          borderRadius: '3px',
                        }}
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
                        sx={{
                          border: '1px solid #B1B5BA',
                          borderRadius: '3px',
                        }}
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
                        sx={{
                          border: '1px solid #B1B5BA',
                          borderRadius: '3px',
                        }}
                      >
                        <DriveFolderUploadRoundedIcon
                          style={{ width: '28px', height: '28px' }}
                        />
                      </IconButton>
                    </AppTooltip>
                  )}
                  {copy3 && (
                    <AppTooltip title='Salin' placement='bottom'>
                      <IconButton
                        sx={{
                          border: '1px solid #B1B5BA',
                          borderRadius: '3px',
                        }}
                      >
                        <img
                          src={Copy2Paper}
                          alt='Copy2Paper'
                          style={{ width: '28px', height: '28px' }}
                        />
                      </IconButton>
                    </AppTooltip>
                  )}
                  {template_surat && (
                    <AppTooltip title='Template Surat' placement='bottom'>
                      <IconButton
                        onClick={() => handleCreateTemplate('Buat Template')}
                        sx={{
                          border: '1px solid #B1B5BA',
                          borderRadius: '3px',
                        }}
                      >
                        <img
                          src={TemplateSurat}
                          alt='TemplateSurat'
                          style={{ width: '28px', height: '28px' }}
                        />
                      </IconButton>
                    </AppTooltip>
                  )}
                  {hapus && (
                    <AppTooltip title='Hapus' placement='bottom'>
                      <IconButton
                        sx={{
                          border: '1px solid #B1B5BA',
                          borderRadius: '3px',
                        }}
                      >
                        <img
                          src={Hapus}
                          alt='Hapus'
                          style={{ width: '28px', height: '28px' }}
                        />
                      </IconButton>
                    </AppTooltip>
                  )}
                  {masukan_folder && (
                    <AppTooltip title='Masukan ke Folder' placement='bottom'>
                      <IconButton
                        sx={{
                          border: '1px solid #B1B5BA',
                          borderRadius: '3px',
                        }}
                      >
                        <img
                          src={MasukanFolder}
                          alt='MasukanFolder'
                          style={{ width: '28px', height: '28px' }}
                        />
                      </IconButton>
                    </AppTooltip>
                  )}
                  <AppTooltip title='Tutup Tab' placement='bottom'>
                    <IconButton
                      sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                      onClick={handleOpenModal7}
                    >
                      <X style={{ width: '28px', height: '28px' }} />
                    </IconButton>
                  </AppTooltip>
                </>
              )}
            </>
          )}
        </Stack>
      </Stack>
      <Divider sx={{ borderColor: '#B1B5BA', borderBottomWidth: '2px' }} />
      {openformsign && (
        <>
          <FormDialog
            open={openformsign}
            handleCloseSign={handleCloseSign}
            handleSendEmail={handleGetEmail}
          />
        </>
      )}
      {openformotp && (
        <>
          <FormDialogOtp
            open={openformotp}
            handleClose={handleCloseOtp}
            handleSendOtp={handleGetOtp}
          />
        </>
      )}
      {opennotif && (
        <>
          <NotifDialogSign open={opennotif} handleClose={handleCloseNotif} />
        </>
      )}
      <ModalConfirmation2
        title='Apakah anda yakin menyetujui dokumen ini?'
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        handleNextModal={handleNextModal}
      />

      <ModalConfirmation2
        title='Apakah anda yakin untuk mengembalikan dokumen ini?'
        openModal={openModal2}
        handleCloseModal={handleCloseModal2}
        handleNextModal={handleNextModal2}
      />

      <ModalConfirmation2
        title='Apakah anda yakin untuk mengembalikan dokumen ini pada komposer awal?'
        openModal={openModal3}
        handleCloseModal={handleCloseModal3}
        handleNextModal={handleNextModal3}
      />

      <ModalConfirmation2
        title='Apakah anda yakin untuk menolak dokumen ini?'
        openModal={openModal4}
        handleCloseModal={handleCloseModal4}
        handleNextModal={handleNextModal4}
      />
      <ModalConfirmation2
        title='Apakah anda yakin untuk menyimpan dokumen ini?'
        openModal={openModal5}
        handleCloseModal={handleCloseModal5}
        handleNextModal={handleNextModal5}
      />

      <ModalConfirmation2
        title='Perubahan ini akan mempengaruhi format tata naskah surat secara keseluruhan menjadi bahasa inggris'
        openModal={openModal6}
        handleCloseModal={handleCloseModal6}
        handleNextModal={handleNextModal6}
      />
      <ModalConfirmation2
        title='Apakah anda yakin untuk menutup halaman ini?'
        openModal={openModal7}
        handleCloseModal={handleCloseModal7}
        handleNextModal={handleNextModal7}
      />
    </>
  );
};

HeaderDetail.propTypes = {
  nama: PropTypes.string,
  save: PropTypes.bool,
  send: PropTypes.bool,
  copy: PropTypes.bool,
  copy2: PropTypes.bool,
  copyFile: PropTypes.bool,
  translate: PropTypes.bool,
  edit: PropTypes.bool,
  editTemplate: PropTypes.bool,
  edit2: PropTypes.bool,
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
  copy3: PropTypes.bool,
  sign: PropTypes.bool,
  masukan_folder: PropTypes.bool,
  template_surat: PropTypes.bool,
  folderup: PropTypes.bool,
  IsEditing: PropTypes.bool,
  buatSuratdariTemplate: PropTypes.bool,
  hapus: PropTypes.bool,
  templateData: PropTypes.object,
};

export default HeaderDetail;
