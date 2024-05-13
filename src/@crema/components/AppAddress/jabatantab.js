import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { data } from '../../services/dummy/content/dataAddress';
import AppScrollbar from '../AppScrollbar';

import {
  Button,
  Modal,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  Typography,
  Stack,
  IconButton,
  Table,
  TableHead,
  TableContainer,
  Paper,
  TableCell,
  Radio,
  TableRow,
  TableBody,
  Checkbox,
  InputBase,
  Divider,
  Select,
  MenuItem,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosSharp from '@mui/icons-material/ArrowForwardIosSharp';

import { X, Trash2, UserPlus, XCircle } from 'feather-icons-react';

import { buttonClasses, TabsList, Tabs, Tab, tabClasses } from '@mui/base';
import {
  addDelegasi,
  addKepada,
  addJabatan,
  addNama,
  addSekretaris,
  addTembusan,
} from '../../../redux/actions/addressbookAction';

const JabatanTab = ({
  datas,
  multipleData,
  singleData,
  selectedRow,
  type,
  handleSelectItem,
  handleRadioChange,
  handleConfirmation,
  divisiCount,
  handleAccordionClick,
  uniqueDivisions,
  StyledTabsList,
  StyledTab,
  StyledAccordion,
  AccordionSummarys,
  AccordionDetail,
}) => {
  return (
    <>
      <Box sx={{ height: 300, overflowY: 'auto', marginTop: 5 }}>
        <AppScrollbar
          sx={{
            height: 300,
          }}
          scrollToTop={false}
        >
          <StyledAccordion>
            <AccordionSummarys>
              <Typography>Divisi</Typography>
            </AccordionSummarys>
            <AccordionDetail>
              {uniqueDivisions.map((divisi, index) => (
                <StyledAccordion key={index}>
                  <AccordionSummarys>
                    <Typography>{divisi}</Typography>
                  </AccordionSummarys>
                  <AccordionDetail>
                    {Object.entries(divisiCount[divisi]).map(
                      ([jabatan, count]) => (
                        <StyledAccordion
                          key={jabatan}
                          onClick={() => handleAccordionClick(divisi, jabatan)}
                        >
                          <AccordionSummarys>
                            <Stack alignItems='start'>
                              <Typography>{jabatan}</Typography>
                              <Typography
                                variant='caption'
                                sx={{
                                  ml: 2,
                                  color: 'text.secondary',
                                }}
                              >
                                Jumlah: {count}
                              </Typography>
                            </Stack>
                          </AccordionSummarys>
                          <AccordionDetail>
                            {datas
                              .filter(
                                (user) =>
                                  user.divisi === divisi &&
                                  user.jabatan === jabatan,
                              )
                              .map((user) => (
                                <StyledAccordion key={user.id}>
                                  <AccordionSummarys>
                                    <Stack alignItems='start'>
                                      <Typography>{user.nama}</Typography>
                                    </Stack>
                                  </AccordionSummarys>
                                  <AccordionDetail>
                                    <Typography variant='body1'>
                                      Alamat: {user.alamat}
                                    </Typography>
                                    <Typography variant='body1'>
                                      NIK: {user.nikg}
                                    </Typography>
                                    <Typography variant='body1'>
                                      Email: {user.email}
                                    </Typography>
                                  </AccordionDetail>
                                </StyledAccordion>
                              ))}
                          </AccordionDetail>
                        </StyledAccordion>
                      ),
                    )}
                  </AccordionDetail>
                </StyledAccordion>
              ))}
            </AccordionDetail>
          </StyledAccordion>
        </AppScrollbar>
      </Box>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 5,
        }}
      >
        <Button
          variant='contained'
          sx={{
            borderRadius: '50px',
            minWidth: '150px',
            border: '2px solid #8F95B2',
            bgcolor: 'transparent',
            color: '#8F95B2',
          }}
          endIcon={<UserPlus />}
        >
          Tambah Ke Personal
        </Button>
        {type === 'single' && (
          <Button
            variant='contained'
            color='secondary'
            style={{ marginLeft: '10px' }}
            onClick={() => handleConfirmation(singleData)}
            sx={{
              borderRadius: '50px',
              minWidth: '150px',
              bgcolor: '#52BD94',
            }}
          >
            Tambahkan
          </Button>
        )}
      </Box>
    </>
  );
};

JabatanTab.propTypes = {
  datas: PropTypes.array.isRequired,
  multipleData: PropTypes.array.isRequired,
  singleData: PropTypes.object.isRequired,
  selectedRow: PropTypes.oneOfType([PropTypes.number, PropTypes.array])
    .isRequired,
  type: PropTypes.string.isRequired,
  handleSelectItem: PropTypes.func.isRequired,
  handleRadioChange: PropTypes.func.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  divisiCount: PropTypes.object.isRequired,
  handleAccordionClick: PropTypes.func.isRequired,
  uniqueDivisions: PropTypes.array.isRequired,
  StyledTabsList: PropTypes.elementType.isRequired,
  StyledTab: PropTypes.elementType.isRequired,
  StyledAccordion: PropTypes.elementType.isRequired,
  AccordionSummarys: PropTypes.elementType.isRequired,
  AccordionDetail: PropTypes.elementType.isRequired,
};

export default JabatanTab;
