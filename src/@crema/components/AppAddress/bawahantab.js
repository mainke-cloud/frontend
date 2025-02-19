import * as React from 'react';
import PropTypes from 'prop-types';
import AppScrollbar from '../AppScrollbar';

import {
  Button,
  Box,
  Typography,
  Stack,
  Table,
  TableHead,
  TableContainer,
  TableCell,
  Radio,
  TableRow,
  TableBody,
  Divider,
} from '@mui/material';

import { UserPlus } from 'feather-icons-react';

const BawahanTab = ({
  datas,
  multipleData,
  singleData,
  selectedRow,
  type,
  handleSelectItem,
  handleRadioChange,
  handleConfirmation,
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
              <TableContainer style={{ maxHeight: 300 }}>
                <AppScrollbar>
                  <Table stickyHeader aria-label='sticky table'>
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>Jabatan</TableCell>
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
                              <Typography variant='subtitle1'>
                                {row.jabatan}
                              </Typography>
                              <Typography variant='caption'>
                                {row.nama}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell>{row.nikg}</TableCell>
                          <TableCell>{row.departemen}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </AppScrollbar>
              </TableContainer>
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

BawahanTab.propTypes = {
  datas: PropTypes.array.isRequired,
  multipleData: PropTypes.array.isRequired,
  singleData: PropTypes.object.isRequired,
  selectedRow: PropTypes.oneOfType([PropTypes.number, PropTypes.array])
    .isRequired,
  type: PropTypes.string.isRequired,
  handleSelectItem: PropTypes.func.isRequired,
  handleRadioChange: PropTypes.func.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  StyledAccordion: PropTypes.elementType.isRequired,
  AccordionSummarys: PropTypes.elementType.isRequired,
  AccordionDetail: PropTypes.elementType.isRequired,
};

export default BawahanTab;
