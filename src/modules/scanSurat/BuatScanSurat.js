import React, { useState } from 'react';
import { Box, Stack, Grid, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';

import HeaderDetail from '@crema/components/HeaderDetail';
import LabelInput from '@crema/components/LabelInput';
import MiniTab from '@crema/components/MiniTab';
import FormAddressBook from '@crema/components/Tabs/FormAddressBook';

import DropZoneFile from '@crema/components/Tabs/DropZoneFile';
import ComposeMail from '@crema/components/AppAddress';

const Buttons = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  backgroundColor: theme.palette.coofis.primary.main,
  fontSize: '14px',
  boxShadow: 'none',
  padding: '8px 16px',
  minWidth: '90px',
  lineHeight: 1.5,
  '&:hover': {
    backgroundColor: theme.palette.coofis.primary.main,
    borderColor: theme.palette.coofis.primary.main,
    boxShadow: 'none',
  },
}));

const BuatScanSurat = () => {
  const [isComposeMail, setComposeMail] = React.useState(false);

  const onOpenComposeMail = () => {
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setComposeMail(false);
  };

  const [formData, setFormData] = useState({
    tanggalSurat: null,
    prioritasSurat: '',
    sifatSurat: '',
    dari: '',
    kepada: '',
    tembusan: '',
    noSurat: '',
    lampiran: '',
    klasifikasiMasalah: '',
    subjek: '',
    keterangan: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTanggal = (date) => {
    setFormData({
      ...formData,
      tanggalSurat: date,
    });
  };

  const [value, setValue] = useState(0);

  const handleTabs = (index) => {
    console.log('a');
    setValue(index);
  };

  const ScanSurat = () => {
    const kepada = useSelector((state) => state.addressbook.kepada);
  const tembusan = useSelector((state) => state.addressbook.tembusan);
  let datass = kepada[0];
  if (!datass || !Array.isArray(datass)) {
    datass = [];
  }
  let datasss = tembusan[0];
  if (!datasss || !Array.isArray(datasss)) {
    datasss = [];
  }
    return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack rowGap='24px'>
              <Grid item xs={6}>
                <Stack rowGap='24px'>
                  <LabelInput
                    type='tanggal'
                    name='tanggalSurat'
                    label='Tanggal Surat'
                    value={formData.tanggalSurat}
                    onChange={handleTanggal}
                  />

                  <LabelInput
                    type='select'
                    name='prioritasSurat'
                    label='Prioritas Surat'
                    item={[
                      { value: 'normal', label: 'Normal' },
                      { value: 'segera', label: 'Segera' },
                    ]}
                    value={formData.prioritasSurat}
                    onChange={handleInputChange}
                  />
                  <LabelInput
                    type='select'
                    name='sifatSurat'
                    label='Sifat Surat'
                    item={[
                      { value: 'biasa', label: 'Biasa' },
                      { value: 'rhs', label: 'RHS' },
                      { value: 'rhs-prib', label: 'RHS-PRIB' },
                    ]}
                    value={formData.sifatSurat}
                    onChange={handleInputChange}
                  />
                </Stack>
              </Grid>
              <LabelInput
                type='input'
                name='dari'
                label='Dari'
                important
                value={formData.dari}
                onChange={handleInputChange}
              />
              <FormAddressBook text='Kepada' data={datass} />
              <FormAddressBook text='Tembusan' data={datass} />
              <LabelInput
                type='input'
                name='noSurat'
                label='No Surat'
                important
                value={formData.noSurat}
                onChange={handleInputChange}
              />

              <Grid item xs={6}>
                <LabelInput
                  type='input'
                  name='lampiran'
                  label='Lampiran'
                  value={formData.lampiran}
                  onChange={handleInputChange}
                />
              </Grid>
              <FormAddressBook text='Klasifikasi Masalah' data={datass} />
              <LabelInput
                type='input'
                name='subjek'
                label='Subjek'
                important
                value={formData.subjek}
                onChange={handleInputChange}
              />
            </Stack>
          </Grid>
        </Grid>
        <Stack
          padding='16px'
          direction='row'
          justifyContent='center'
          columnGap='16px'
        >
          <Buttons disabled variant='contained'>
            Kembali
          </Buttons>
          <Buttons variant='contained' onClick={() => handleTabs(1)}>
            Selanjutnya (Lainnya)
          </Buttons>
        </Stack>
      </>
    );
  };

  const Lainnya = () => {
    return (
      <>
        <Grid container columnSpacing={4}>
          <Grid item xs={8}>
            <LabelInput label='Lampiran' important />
            <DropZoneFile />
          </Grid>
          <Grid item xs={4}>
            <Box
              marginTop='32px'
              padding='16px'
              border='1px solid #D8D8D8'
              borderRadius='10px'
            >
              <LabelInput
                type='textfield'
                name='keterangan'
                label='keterangan'
                important
                value={formData.keterangan}
                onChange={handleInputChange}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Stack paddingTop='16px'>
              <Typography fontWeight='700'>Perhatian :</Typography>
              <Typography fontSize='12px'>
                Total Ukuran Surat & Lampiran yang dapat diproses maksimal 25
                MB.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Stack
          padding='16px'
          direction='row'
          justifyContent='center'
          columnGap='16px'
        >
          <Buttons variant='contained' onClick={() => handleTabs(0)}>
            Kembali
          </Buttons>
          <Buttons variant='contained'>Kirim</Buttons>
        </Stack>
      </>
    );
  };

  return (
    <Box
      backgroundColor={(theme) => theme.palette.coofis.tertiary.bg}
      minHeight='100vh'
    >
      <HeaderDetail nama='Buat Scan Surat' send save />
      <Box sx={{ padding: 8 }}>
        <Box
          backgroundColor={(theme) => theme.palette.background.paper}
          sx={{ padding: 8, borderRadius: '10px' }}
        >
          <MiniTab
            tabs={[
              { name: 'Scan Surat', content: ScanSurat() },
              { name: 'Lainnya', content: Lainnya() },
            ]}
            changeValue={value}
            disable
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BuatScanSurat;
