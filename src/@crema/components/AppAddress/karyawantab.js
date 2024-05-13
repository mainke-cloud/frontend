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

const KaryawanTab = ({
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
      <TableContainer style={{ maxHeight: 300 }}>
        <AppScrollbar>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>Jabatan</TableCell>
                <TableCell>PGS</TableCell>
                <TableCell>NIK</TableCell>
                <TableCell>Departemen</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datas.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: multipleData.some(
                      (data) => data.id === datas[index].id,
                    )
                      ? '#52BD94'
                      : 'transparent',
                  }}
                >
                  <TableCell>
                    {type !== 'single' ? (
                      <Radio
                        checked={multipleData.some(
                          (data) => data.id === datas[index].id,
                        )}
                        onClick={() => handleSelectItem(index)}
                      />
                    ) : (
                      <Radio
                        checked={selectedRow === index}
                        onClick={() => handleRadioChange(index)}
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    <img
                      src={row.profil}
                      alt='Profil'
                      style={{ width: '50px' }}
                    />
                  </TableCell>
                  <TableCell>
                    <Stack direction='column'>
                      <Typography variant='subtitle1'>{row.jabatan}</Typography>
                      <Typography variant='caption'>{row.nama}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{row.pgs}</TableCell>
                  <TableCell>{row.nikg}</TableCell>
                  <TableCell>{row.departemen}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AppScrollbar>
      </TableContainer>
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

KaryawanTab.propTypes = {
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

export default KaryawanTab;
