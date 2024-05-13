import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
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

import { X, Trash2, XCircle } from 'feather-icons-react';

import { buttonClasses, TabsList, Tabs, Tab, tabClasses } from '@mui/base';
import {
  addDelegasi,
  addKepada,
  addJabatan,
  addNama,
  addSekretaris,
  addTembusan,
} from '../../../redux/actions/addressbookAction';

import JabatanTab from './jabatantab';
import KaryawanTab from './karyawantab';
import BawahanTab from './bawahantab';
import PersonalTab from './personaltab';

const ComposeMail = (props) => {
  const { isComposeMail, onCloseComposeMail, datas, title, type } = props;

  const StyledTabsList = styled(TabsList)(
    ({ theme }) => `
    min-width: 400px;
    border-radius: 50px;
    border: 1px solid #D8D8D8;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    margin-bottom: 10px;
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

  const StyledAccordion = styled((props) => (
    <Accordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

  const AccordionSummarys = styled((props) => (
    <AccordionSummary
      expandIcon={<ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetail = styled(AccordionDetails)(() => ({
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

  let check = title === 'Nama' ? 'Karyawan' : 'Jabatan';

  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('');
  const [previewData, setPreviewData] = useState(null);
  const [singleData, setSingleData] = useState(null);
  const [selectedAccordionItem, setSelectedAccordionItem] = useState(null);
  const [selectedRow, setSelectedRow] = useState([]);
  const [multipleData, setMultipleData] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedRowIndices, setSelectedRowIndices] = useState([]);

  useEffect(() => {
    setActiveTab(check);
  }, [isComposeMail]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

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
    setSelectedRowIndices(updatedSelectedRow);
    const selectedItems = checked ? datas : [];
    setMultipleData(selectedItems);
  };

  const handleRadioChange = (index) => {
    if (type === 'single') {
      setSingleData(datas[index]);
      setSelectedRow(index);
      setSelectedRowIndices([index]);
      setPreviewData(datas[index]);
    } else {
      let updatedSelectedRow;
      if (selectedRow.includes(index)) {
        updatedSelectedRow = selectedRow.filter((item) => item !== index);
        setSelectedRowIndices(selectedRowIndices.filter((i) => i !== index));
      } else {
        updatedSelectedRow = [...selectedRow, index];
        setSelectedRowIndices([...selectedRowIndices, index]);
      }
      setSelectedRow(updatedSelectedRow);

      // Cek apakah ada data yang sudah dipilih sebelumnya dalam multipleData
      const existingDataIndices = multipleData.map((item, i) => i);

      // Jika ada, tambahkan data baru yang dipilih ke dalam multipleData tanpa menghapus data yang sudah ada
      const newMultipleData = [...multipleData];
      if (existingDataIndices.length > 0) {
        const selectedItems = datas.filter((_, i) =>
          updatedSelectedRow.includes(i),
        );
        newMultipleData.push(...selectedItems);
      } else {
        const selectedItems = datas.filter((_, i) =>
          updatedSelectedRow.includes(i),
        );
        newMultipleData.push(...selectedItems);
      }
      setMultipleData(newMultipleData);

      setSingleData(null);
      if (updatedSelectedRow.length > 0) {
        setPreviewData(
          datas[updatedSelectedRow[updatedSelectedRow.length - 1]],
        );
      } else {
        setPreviewData(null);
      }
    }
  };

  const handleRemoveAll = () => {
    setSelectedRow([]);
    setSelectedRowIndices([]);
    setMultipleData([]);
  };

  const handleRemoveItem = (indexToRemove) => {
    const updatedmultipleData = multipleData.filter(
      (_, index) => index !== indexToRemove,
    );
    setMultipleData(updatedmultipleData);

    const updatedSelectedRow = selectedRow.filter(
      (item) => item !== indexToRemove,
    );
    setSelectedRow(updatedSelectedRow);

    if (type !== 'single') {
      setSelectedRowIndices(updatedSelectedRow);
    } else {
      setSingleData(null);
    }

    if (updatedSelectedRow.length > 0) {
      setPreviewData(datas[updatedSelectedRow[updatedSelectedRow.length - 1]]);
    } else {
      setPreviewData(null);
    }
  };

  const handleConfirmation = (Data) => {
    if (title === 'Kepada') {
      dispatch(addKepada(Data));
    } else if (title === 'Tembusan') {
      dispatch(addTembusan(Data));
    } else if (title === 'Jabatan') {
      dispatch(addJabatan(Data));
    } else if (title === 'Nama') {
      dispatch(addNama(Data));
    } else if (title === 'Delegasi') {
      dispatch(addDelegasi(Data));
    } else if (title === 'Sekretaris') {
      dispatch(addSekretaris(Data));
    }
    onCloseComposeMail();
  };

  const divisiCount = {};

  // Menghitung jumlah jabatan untuk setiap divisi
  datas.forEach((user) => {
    const { divisi, jabatan } = user;
    if (divisi in divisiCount) {
      if (divisiCount[divisi][jabatan]) {
        divisiCount[divisi][jabatan]++;
      } else {
        divisiCount[divisi][jabatan] = 1;
      }
    } else {
      divisiCount[divisi] = { [jabatan]: 1 };
    }
  });

  const handleAccordionClick = (divisi, jabatan) => {
    const filteredData = datas.filter(
      (user) => user.divisi === divisi && user.jabatan === jabatan,
    );

    if (filteredData.length > 0) {
      // Filter data yang belum ada dalam multipleData
      const newFilteredData = filteredData.filter(
        (item) => !multipleData.some((data) => data.id === item.id),
      );

      // Tambahkan data baru ke multipleData
      const newMultipleData = [...multipleData, ...newFilteredData];
      setMultipleData(newMultipleData);
    }

    setSelectedAccordionItem(filteredData);

    if (filteredData.length === 1) {
      setSingleData(filteredData[0]);
      setSelectedRow([datas.indexOf(filteredData[0])]);
      setSelectedRowIndices([datas.indexOf(filteredData[0])]);
      setPreviewData(filteredData[0]);
    } else if (filteredData.length > 1) {
      const newFilteredData = filteredData.filter(
        (item) => !multipleData.some((data) => data.id === item.id),
      );

      // Tambahkan data baru ke multipleData
      const newMultipleData = [...multipleData, ...newFilteredData];
      setMultipleData(newMultipleData);
    }
  };

  // Mendapatkan daftar divisi yang unik
  const uniqueDivisions = Object.keys(divisiCount);

  const handleSelectItem = (index) => {
    const selectedItem = datas[index];

    if (type === 'single') {
      setSingleData(selectedItem);
      setSelectedRow(index);
      setSelectedRowIndices([index]);
      setPreviewData(selectedItem);
    } else {
      let updatedSelectedRow;
      if (selectedRow.includes(index)) {
        updatedSelectedRow = selectedRow.filter((item) => item !== index);
        setSelectedRowIndices(selectedRowIndices.filter((i) => i !== index));
      } else {
        updatedSelectedRow = [...selectedRow, index];
        setSelectedRowIndices([...selectedRowIndices, index]);
      }
      setSelectedRow(updatedSelectedRow);

      // Cek apakah data sudah ada dalam multipleData berdasarkan ID
      const isDataExist = multipleData.some(
        (data) => data.id === selectedItem.id,
      );

      // Jika data belum ada, tambahkan ke multipleData
      if (!isDataExist) {
        setMultipleData([...multipleData, selectedItem]);
      }

      setSingleData(null);
      if (updatedSelectedRow.length > 0) {
        setPreviewData(
          datas[updatedSelectedRow[updatedSelectedRow.length - 1]],
        );
      } else {
        setPreviewData(null);
      }
    }
  };

  let tabsToDisplay = ['Jabatan', 'Karyawan', 'Bawahan', 'Personal']; // Tab yang akan ditampilkan secara default
  if (title === 'Nama') {
    tabsToDisplay = ['Karyawan']; // Jika title adalah 'Nama', hanya tampilkan tab 'Karyawan'
  } else if (title === 'Jabatan') {
    tabsToDisplay = ['Jabatan']; // Jika title adalah 'Jabatan', hanya tampilkan tab 'Jabatan'
  }

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
          maxWidth: 1000,
          maxHeight: 800,
          overflow: 'auto',
          bgcolor: 'background.paper',
          borderRadius: 8,
        }}
      >
        <Grid
          item
          xs={type === 'single' ? 12 : multipleData.length > 0 ? 9 : 12}
        >
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
              marginBottom={2}
            >
              <Typography variant='h1' id='compose-mail-modal'>
                Address Book {title}
              </Typography>
              <IconButton onClick={onCloseComposeMail}>
                <X />
              </IconButton>
            </Stack>
            {/* <Tabs value={activeTab} onChange={handleTabChange}>
              <StyledTabsList>
                <StyledTab
                  value='Jabatan'
                  className={activeTab === 'Jabatan' ? tabClasses.selected : ''}
                >
                  Jabatan
                </StyledTab>
                <StyledTab
                  value='Karyawan'
                  className={
                    activeTab === 'Karyawan' ? tabClasses.selected : ''
                  }
                >
                  Karyawan
                </StyledTab>
                <StyledTab
                  value='Bawahan'
                  className={activeTab === 'Bawahan' ? tabClasses.selected : ''}
                >
                  Bawahan
                </StyledTab>
                <StyledTab
                  value='Personal'
                  className={
                    activeTab === 'Personal' ? tabClasses.selected : ''
                  }
                >
                  Personal
                </StyledTab>
              </StyledTabsList>
            </Tabs> */}
            <Tabs value={activeTab} onChange={handleTabChange}>
              <StyledTabsList>
                {/* Menampilkan tab sesuai dengan kondisi */}
                {tabsToDisplay.map((tab) => (
                  <StyledTab
                    key={tab}
                    value={tab}
                    className={activeTab === tab ? tabClasses.selected : ''}
                  >
                    {tab}
                  </StyledTab>
                ))}
              </StyledTabsList>
            </Tabs>
            <Stack
              direction='row'
              spacing={2}
              alignItems='center'
              justifyContent='space-between'
              marginBottom={2}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '0.5px solid grey',
                  width: '40%',
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
            <Box sx={{ marginTop: 2 }}>
              <Card sx={{ width: '100%' }}>
                <CardContent>
                  <Grid container>
                    <Grid
                      item
                      xs={2}
                      alignItems='center'
                      justifyContent='center'
                    >
                      <Avatar
                        alt={previewData ? previewData.nama : '--'}
                        src={previewData ? previewData.profil : ''}
                        sx={{ width: 90, height: 90 }}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <Typography variant='subtitle1'>Nama :</Typography>
                      <Typography variant='subtitle2'>
                        {previewData ? previewData.nama : '--'}
                      </Typography>
                      <Typography variant='subtitle1'>Departemen :</Typography>
                      <Typography variant='subtitle2'>
                        {previewData ? previewData.departemen : '--'}
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Typography variant='subtitle1'>Divisi :</Typography>
                      <Typography variant='subtitle2'>
                        {previewData ? previewData.divisi : '--'}
                      </Typography>
                      <Typography variant='subtitle1'>NIK :</Typography>
                      <Typography variant='subtitle2'>
                        {previewData ? previewData.nikg : '--'}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              sx={{ marginY: 2 }}
            >
              {type !== 'single' && (
                <Box sx={{ marginTop: 2 }}>
                  <Checkbox onChange={handleCheckboxChange} /> Pilih Semua
                </Box>
              )}
              <Typography variant='body2'>
                ({datas.length} Hasil) Address Book
              </Typography>
            </Stack>
            <Box
              sx={{
                width: '100%',
                overflow: 'hidden',
                border: '1px solid transparent',
                borderRadius: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              {activeTab === 'Jabatan' && (
                <JabatanTab
                  datas={datas}
                  multipleData={multipleData}
                  singleData={singleData}
                  selectedRow={selectedRow}
                  type={type}
                  handleSelectItem={handleSelectItem}
                  handleRadioChange={handleRadioChange}
                  handleConfirmation={handleConfirmation}
                  divisiCount={divisiCount}
                  handleAccordionClick={handleAccordionClick}
                  uniqueDivisions={uniqueDivisions}
                  StyledTabsList={StyledTabsList}
                  StyledTab={StyledTab}
                  StyledAccordion={StyledAccordion}
                  AccordionSummarys={AccordionSummarys}
                  AccordionDetail={AccordionDetail}
                />
              )}
              {activeTab === 'Karyawan' && (
                <KaryawanTab
                  datas={datas}
                  multipleData={multipleData}
                  singleData={singleData}
                  selectedRow={selectedRow}
                  type={type}
                  handleSelectItem={handleSelectItem}
                  handleRadioChange={handleRadioChange}
                  handleConfirmation={handleConfirmation}
                />
              )}
              {activeTab === 'Bawahan' && (
                <BawahanTab
                  datas={datas}
                  multipleData={multipleData}
                  singleData={singleData}
                  selectedRow={selectedRow}
                  type={type}
                  handleSelectItem={handleSelectItem}
                  handleRadioChange={handleRadioChange}
                  handleConfirmation={handleConfirmation}
                  StyledAccordion={StyledAccordion}
                  AccordionSummarys={AccordionSummarys}
                  AccordionDetail={AccordionDetail}
                />
              )}
              {activeTab === 'Personal' && (
                <PersonalTab
                  datas={datas}
                  multipleData={multipleData}
                  singleData={singleData}
                  selectedRow={selectedRow}
                  type={type}
                  handleSelectItem={handleSelectItem}
                  handleRadioChange={handleRadioChange}
                  handleConfirmation={handleConfirmation}
                />
              )}
            </Box>
          </Box>
        </Grid>
        {multipleData.length > 0 && type !== 'single' && (
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
                  {multipleData.map((item, index) => (
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
                      {index !== multipleData.length - 1 && <Divider />}
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
                onClick={() => handleConfirmation(multipleData)}
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
  title: PropTypes.string,
  type: PropTypes.string,
};
