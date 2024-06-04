import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Grid,
  Stack,
  Typography,
  IconButton,
  InputBase,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Modal,
  Button,
} from '@mui/material';
import { ArrowForwardIosSharp } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import searchIcon from '../../../assets/icon/search.svg';
import Divider from '@mui/material/Divider';
import { Grid as IconGrid } from 'feather-icons-react';
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';
import FolderIcon from '@mui/icons-material/Folder';
import { Fonts } from '@crema/constants/AppEnums';
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';
import { useDispatch, useSelector } from 'react-redux';
import { childTab } from '../../../redux/actions/tabAction';
import ModalUp from './ModalUp';
import { X } from 'feather-icons-react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const StyledAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));
const AccordionSummarys = styled((props) => (
  <AccordionSummary
    expandIcon={
      <ArrowForwardIosSharp
        sx={{
          fontWeight: 'bold',
          color: 'black',
          paddingLeft: '8px',
          transform: 'rotate(180deg)',
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(-90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));
const ListFolder = ({ files }) => {
  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #d8d8d8',
    borderRadius: '10px',
    padding: '8px',
    justifyContent: 'space-around',
  }));

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    bgcolor: 'background.paper',
    borderRadius: '8px',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const [listType, setListType] = useState(0);
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const id = useSelector((state) => state.tab.idCounter);
  const [open, setOpen] = React.useState(false);
  const [openRe, setOpenRe] = React.useState(false);

  const handleDetailList = () => {
    setListType(1);
  };

  const handleImageList = () => {
    setListType(0);
  };

  const handleOpenFile = (file) => {
    dispatch(childTab(id, tabs, 'Buka Folder', file));
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const handleContoh = () => {
  //   setOpen(!open)
  // }

  const handleOpenRe = () => setOpenRe(true);
  const handleCloseRe = () => setOpenRe(false);

  return (
    <>
      <Stack container direction='row' spacing={11}>
        <Box
          sx={{
            height: '40px',
            border: '1px solid #B1B5BA',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            width: '80%',
          }}
        >
          <InputBase
            placeholder='Cari...'
            sx={{ padding: '20px', width: '100%' }}
          />
          <IconButton>
            <img src={searchIcon} alt='Search' />
          </IconButton>
        </Box>

        <IconButton onClick={handleImageList}>
          <IconGrid />
        </IconButton>
        <IconButton onClick={handleDetailList}>
          <ListIcon />
        </IconButton>
        <IconButton onClick={handleOpen}>
          <DriveFolderUploadRoundedIcon />
        </IconButton>
      </Stack>
      <StyledAccordion>
        <Stack pt='14px' direction='row' justifyContent='space-between'>
          <Typography sx={{ fontSize: '16px', fontWeight: Fonts.BOLD }}>
            Aktivitas Terakhir
          </Typography>

          <AccordionSummarys aria-controls='panel1-content' id='panel1-header'>
            <Typography
              pr='10px'
              pb='5px'
              sx={{ fontSize: '16px', fontWeight: Fonts.BOLD }}
            >
              Terbaru
            </Typography>
          </AccordionSummarys>
        </Stack>
        <AccordionDetails>
          <Box mt='10px'>
            {listType == 0 ? (
              <Grid container columns={12} spacing={3}>
                {files.map((file, index) => (
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={4}
                    lg={3}
                    key={index}
                    alignItems={'center'}
                  >
                    <Stack
                      direction='row'
                      spacing={3}
                      height='56px'
                      alignItems='center'
                      sx={{
                        border: '1px solid #E0E0E0',
                        borderRadius: 2,

                        padding: 2,
                        transition: 'background-color 0.3s ease',
                        '&:hover': {
                          backgroundColor: (theme) => theme.palette.gray[300],
                        },
                      }}
                    >
                      <Box
                        pt='5px'
                        onClick={() => handleOpenFile(file)}
                        sx={{
                          height: '100%',
                          width: '100%',
                        }}
                      >
                        <Stack direction='row' spacing={2}>
                          <FolderIcon
                            sx={{ color: '#FFC10A', width: 28, height: 25 }}
                          />
                          <Typography
                            sx={{
                              pr: '10 px',
                              fontSize: '16px',
                            }}
                          >
                            {file.name}
                          </Typography>
                        </Stack>
                      </Box>

                      <Stack>
                        <IconButton onClick={handleOpenRe}>
                          <MenuIcon sx={{ width: 20, height: 20 }} />
                        </IconButton>
                      </Stack>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Stack spacing={1}>
                <Stack
                  direction='row'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Typography
                    pl='39px'
                    fontSize='12px'
                    color='#262829'
                    sx={{ fontWeight: Fonts.BOLD }}
                  >
                    Nama Folder
                  </Typography>
                  <Typography
                    pr='60px'
                    fontSize='12px'
                    color='#262829'
                    sx={{ fontWeight: Fonts.BOLD }}
                  >
                    Tanggal dibuat
                  </Typography>
                </Stack>
                <Divider />
                <Stack>
                  {files.slice(0, 3).map((file, index) => (
                    <React.Fragment key={index}>
                      <StyledBox
                        sx={{
                          border: 'none',
                          transition: 'background-color 0.3s ease',
                          '&:hover': {
                            backgroundColor: (theme) => theme.palette.gray[300],
                            cursor: 'pointer',
                          },
                        }}
                      >
                        <Stack direction='row' justifyContent='space-between'>
                          <Box
                            pt='12px'
                            onClick={() => handleOpenFile(file)}
                            sx={{
                              height: '100%',
                              width: '87%',
                            }}
                          >
                            <Stack
                              direction='row'
                              spacing={2}
                              alignItems='center'
                            >
                              <FolderIcon
                                sx={{
                                  color: '#FFC10A',
                                  width: 28,
                                  height: 25,
                                }}
                              />
                              <Typography fontSize='16px' color='#5C5E61'>
                                {file.name}
                              </Typography>
                            </Stack>
                          </Box>
                          <Stack direction='row' spacing={2} pb='20px'>
                            <Typography
                              fontSize='12px'
                              color='#5C5E61'
                              pt='12px'
                            >
                              {file.tanggal}
                            </Typography>
                            <IconButton onClick={handleOpenRe}>
                              <MenuIcon sx={{ width: 20, height: 20 }} />
                            </IconButton>
                          </Stack>
                        </Stack>
                      </StyledBox>
                      <Divider />
                    </React.Fragment>
                  ))}
                </Stack>
              </Stack>
            )}
          </Box>
        </AccordionDetails>
      </StyledAccordion>

      <ModalUp
        title='Create Folder'
        openState={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />

      <ModalUp
        title='Rename Folder'
        openState={openRe}
        handleClose={handleCloseRe}
        handleOpen={handleOpenRe}
      />
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Box
            p='5px'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            sx={{
              bgcolor: '#383838',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
            }}
          >
            <Box pl='20px'>
              <Typography
                fontSize='16px'
                sx={{ color: 'white', fontWeight: Fonts.BOLD }}
              >
                Create Folder
              </Typography>
            </Box>
            <IconButton pr='16px' onClick={handleClose}>
              <X style={{ width: '24px', height: '24px' }} />
            </IconButton>
          </Box>
          <Box alignItems='center'>
            <Box p='24px'>
              <Box>
                <Typography
                  pt='20px'
                  fontSize='18px'
                  sx={{ fontWeight: Fonts.BOLD }}
                >
                  Nama Folder
                </Typography>
                <Box pt='10px'>
                  <TextField sx={{ width: 710 }} />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box pt='20px'>
            <Divider />
          </Box>
          <Stack direction='row' justifyContent='space-between' p='10px'>
            <Box></Box>
            <Box display='flex'>
              <Box pr='10px'>
                <Button
                  variant='contained'
                  sx={{
                    borderRadius: '10px',
                    bgcolor: '#429777',
                    minWidth: '55px',
                    minHeight: '31px',
                  }}
                  onClick={handleOpen}
                >
                  Oke
                </Button>
              </Box>
              <Box>
                <Button
                  variant='contained'
                  sx={{
                    borderRadius: '10px',
                    bgcolor: '#BF2600',
                    minWidth: '55px',
                    minHeight: '31px',
                  }}
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Modal> */}

      {/* <Modal
        open={openRe}
        onClose={handleCloseRe}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Box
            p='5px'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            sx={{
              bgcolor: '#383838',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
            }}
          >
            <Box pl='20px'>
              <Typography
                fontSize='16px'
                sx={{ color: 'white', fontWeight: Fonts.BOLD }}
              >
                Rename Folder
              </Typography>
            </Box>
            <IconButton pr='16px' onClick={handleCloseRe}>
              <X style={{ width: '24px', height: '24px' }} />
            </IconButton>
          </Box>
          <Box alignItems='center'>
            <Box p='24px'>
              <Box>
                <Typography
                  pt='20px'
                  fontSize='18px'
                  sx={{ fontWeight: Fonts.BOLD }}
                >
                  Nama Folder
                </Typography>
                <Box pt='10px'>
                  <TextField sx={{ width: 710 }} />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box pt='20px'>
            <Divider />
          </Box>
          <Stack direction='row' justifyContent='space-between' p='10px'>
            <Box></Box>
            <Box display='flex'>
              <Box pr='10px'>
                <Button
                  variant='contained'
                  sx={{
                    borderRadius: '10px',
                    bgcolor: '#429777',
                    minWidth: '55px',
                    minHeight: '31px',
                  }}
                  onClick={handleOpenRe}
                >
                  Oke
                </Button>
              </Box>
              <Box>
                <Button
                  variant='contained'
                  sx={{
                    borderRadius: '10px',
                    bgcolor: '#BF2600',
                    minWidth: '55px',
                    minHeight: '31px',
                  }}
                  onClick={handleCloseRe}
                >
                  Close
                </Button>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Modal> */}
    </>
  );
};
ListFolder.propTypes = {
  files: PropTypes.arrayOf().isRequired,
};

export default ListFolder;
