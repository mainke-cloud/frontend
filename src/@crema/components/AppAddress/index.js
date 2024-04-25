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
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';

import { X, Trash2, UserPlus, XCircle } from 'feather-icons-react';

import { buttonClasses, TabsList, Tabs, Tab, tabClasses } from '@mui/base';
import {
  addKepada,
  addTembusan,
  addKlasifikasi,
  addPemeriksa,
  addPemohon,
} from '../../../redux/actions/addressbookAction';

const ComposeMail = (props) => {
  const { isComposeMail, onCloseComposeMail, datas, type } = props;

  const StyledTabsList = styled(TabsList)(
    ({ theme }) => `
    min-width: 400px;
    border-radius: 50px;
    border: 1px solid #D8D8D8;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    margin-bottom: 30px;
    `,
  );

  const StyledTab = styled(Tab)`
    color: #5c5e61;
    cursor: pointer;
    background-color: transparent;
    width: 100%;
    padding: 10px;
    margin: 6px;
    border: none;
    border-radius: 50px;
    display: flex;
    justify-content: center;

    &.${tabClasses.selected} {
      background-color: #e42313;
      color: #ffffff;
    }

    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;
  const dispatch = useDispatch();
  const [movedData, setMovedData] = useState([]);
  const [selectedRow, setSelectedRow] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    const updatedSelectedRow = checked ? datas.map((_, index) => index) : [];
    setSelectedRow(updatedSelectedRow);
    const selectedItems = checked ? datas : [];

    setMovedData(selectedItems);
  };

  const handleRadioChange = (index) => {
    let updatedSelectedRow;
    if (selectedRow.includes(index)) {
      updatedSelectedRow = selectedRow.filter((item) => item !== index);
    } else {
      updatedSelectedRow = [...selectedRow, index];
    }
    setSelectedRow(updatedSelectedRow);

    const selectedItems = datas.filter((_, i) =>
      updatedSelectedRow.includes(i),
    );
    setMovedData(selectedItems);
  };

  const handleRemoveAll = () => {
    setSelectedRow([]);
    setMovedData([]);
  };

  const handleRemoveItem = (indexToRemove) => {
    const updatedMovedData = movedData.filter(
      (_, index) => index !== indexToRemove,
    );
    setMovedData(updatedMovedData);

    const updatedSelectedRow = selectedRow.filter(
      (item) => item !== indexToRemove,
    );
    setSelectedRow(updatedSelectedRow);
  };

  const handleConfirmation = (movedData) => {
    if (type === 'Kepada') {
      dispatch(addKepada(movedData));
    } else if (type === 'Tembusan') {
      dispatch(addTembusan(movedData));
    } else if (type === 'Klasifikasi Masalah') {
      dispatch(addKlasifikasi(movedData));
    } else if (type === 'Pemeriksa') {
      dispatch(addPemeriksa(movedData));
    } else if (type === 'Pemohon') {
      dispatch(addPemohon(movedData));
    }
  };

  return (
    <Modal
      open={isComposeMail}
      onClose={onCloseComposeMail}
      aria-labelledby='compose-mail-modal'
      aria-describedby='compose-mail-form'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        sx={{
          maxWidth: 1200,
          maxHeight: 800,
          overflow: 'auto',
          bgcolor: 'background.paper',
          borderRadius: 8,
        }}
      >
        <Grid item xs={selectedRow.length > 0 ? 9 : 12}>
          <Box
            style={{
              padding: 20,
              outline: 'none',
            }}
          >
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              marginBottom={5}
            >
              <Typography variant='h1' id='compose-mail-modal'>
                Address Book {type}
              </Typography>
              <IconButton onClick={onCloseComposeMail}>
                <X />
              </IconButton>
            </Stack>
            <Tabs defaultValue={0}>
              <StyledTabsList>
                <StyledTab value={0}>Jabatan</StyledTab>
                <StyledTab value={1}>Karyawan</StyledTab>
                <StyledTab value={2}>Bawahan</StyledTab>
                <StyledTab value={3}>Personal</StyledTab>
              </StyledTabsList>
            </Tabs>
            <Stack
              direction='row'
              spacing={2}
              alignItems='center'
              justifyContent='space-between'
              marginBottom={5}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '0.5px solid grey',
                  borderRadius: 1,
                }}
              >
                <InputBase
                  placeholder='Cari Jabatan'
                  sx={{ flexGrow: 1, padding: '10px' }}
                />
                <IconButton aria-label='search'>
                  <SearchIcon fontSize='small' />
                </IconButton>
              </Box>
              <Select
                value={selectedOption1}
                onChange={handleOption1Change}
                displayEmpty
                sx={{
                  flexGrow: 1,
                  border: '0.5px solid grey',
                  borderRadius: 1,
                }}
              >
                <MenuItem value='' disabled>
                  Pilih opsi 1
                </MenuItem>
                <MenuItem value={1}>Opsi 1</MenuItem>
                <MenuItem value={2}>Opsi 2</MenuItem>
                <MenuItem value={3}>Opsi 3</MenuItem>
              </Select>
              <Select
                value={selectedOption2}
                onChange={handleOption2Change}
                displayEmpty
                sx={{
                  flexGrow: 1,
                  border: '0.5px solid grey',
                  borderRadius: 1,
                }}
              >
                <MenuItem value='' disabled>
                  Pilih opsi 2
                </MenuItem>
                <MenuItem value={1}>Opsi A</MenuItem>
                <MenuItem value={2}>Opsi B</MenuItem>
                <MenuItem value={3}>Opsi C</MenuItem>
              </Select>
            </Stack>
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              sx={{ marginY: 5 }}
            >
              <Box sx={{ marginTop: 2 }}>
                <Checkbox onChange={handleCheckboxChange} /> Pilih Semua
              </Box>
              <Typography variant='body2'>
                ({datas.length} Hasil) Address Book
              </Typography>
            </Stack>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer style={{ maxHeight: 400 }}>
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
                      <TableRow key={index}>
                        <TableCell>
                          <Radio
                            checked={selectedRow.includes(index)}
                            onClick={() => handleRadioChange(index)}
                          />
                        </TableCell>
                        <TableCell>
                          <img
                            src={row.profil}
                            alt='Profil'
                            style={{ width: 50, height: 50 }}
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
                        <TableCell>{row.pgs}</TableCell>
                        <TableCell>{row.nikg}</TableCell>
                        <TableCell>{row.departemen}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
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
              </Box>
            </Paper>
          </Box>
        </Grid>
        {movedData.length > 0 && (
          <Grid
            item
            xs={3}
            sx={{
              borderLeft: '1px solid #000',
              outline: 'none',
              maxHeight: 800,
              overflowY: 'auto',
            }}
          >
            <Box
              sx={{
                padding: '20px',
                position: 'sticky',
                top: 0,
                zIndex: 1,
                backgroundColor: 'white',
              }}
            >
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
              >
                <Typography variant='h4' id='compose-mail-modal'>
                  Pilihan
                </Typography>
                <Button
                  onClick={() => handleRemoveAll([])}
                  endIcon={<Trash2 />}
                >
                  Hapus Semua
                </Button>
              </Stack>
            </Box>
            <Box sx={{ height: 800 }}>
              <AppScrollbar scrollToTop={true}>
                <List>
                  {movedData.map((item, index) => (
                    <div key={index}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar alt={item.nama} src={item.profil} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Stack direction='column'>
                              <Typography variant='subtitle1'>
                                {item.jabatan}
                              </Typography>
                              <Typography variant='caption'>
                                {item.nama}
                              </Typography>
                            </Stack>
                          }
                        />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge='end'
                            onClick={() => handleRemoveItem(index)}
                          >
                            <XCircle />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      {index !== movedData.length - 1 && <Divider />}
                    </div>
                  ))}
                </List>
              </AppScrollbar>
            </Box>
            <Box
              sx={{
                textAlign: 'center',
                padding: '20px',
                position: 'sticky',
                bottom: 0,
                zIndex: 1,
                backgroundColor: 'white',
              }}
            >
              <Button
                variant='contained'
                color='primary'
                sx={{
                  borderRadius: '50px',
                  minWidth: '200px',
                }}
                onClick={() => handleConfirmation(movedData)}
              >
                Konfirmasi
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </Modal>
  );
};

export default ComposeMail;

ComposeMail.defaultProps = {
  connection: null,
};

ComposeMail.propTypes = {
  isComposeMail: PropTypes.bool.isRequired,
  onCloseComposeMail: PropTypes.func.isRequired,
  datas: PropTypes.object,
  type: PropTypes.string,
};
