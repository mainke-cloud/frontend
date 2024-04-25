import React from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import MiniTab from '@crema/components/MiniTab';
import HeaderDetail from '@crema/components/HeaderDetail';
import { useSelector } from 'react-redux';
import FormAddressBook from '@crema/components/Tabs/FormAddressBook';
import TabAgenda from '../disposisi/respons/TabPanel/TabAgenda';
import { pekerjaan } from '@crema/services/dummy/content/dataPekerjaan';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: '1px solid #d8d8d8',
  borderRadius: '10px',
  padding: '16px',
  marginTop: '16px',
  marginBottom: '16px',
}));

const Judul = styled(Typography)({
  fontSize: '14px',
  fontWeight: '700',
  lineHeight: '20px',
});

const StyledStack = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.coofis.primary.main,
  color: theme.palette.background.paper,
  borderRadius: '8px',
  alignItems: 'center',
  padding: '36px',
  paddingTop: '16px',
  paddingBottom: '16px',
  marginTop: '16px',
  width: 'fit-content',
  '&:hover': {
    cursor: 'pointer',
  },
}));

const StyledText = styled(Typography)(() => ({
  fontWeight: '400',
  fontSize: '16px',
}));

const AlamatPenerusan = () => {
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
    <Box>
      <Stack direction='row' columnGap='8px'>
        <Judul>Nota Tindakan :</Judul>
        <Judul color='#474D66'>Forward</Judul>
      </Stack>
      <StyledBox>
        <Stack rowGap='10px'>
          <Judul>Diteruskan Dari</Judul>
          <Divider
            sx={{
              borderColor: (theme) => theme.palette.coofis.tertiary[50],
              borderBottomWidth: '2px',
            }}
          />

          <Typography>EVITA TUNJUNG SEKAR / 690013</Typography>
        </Stack>
      </StyledBox>
      <FormAddressBook text='Kepada' data={datass} />
      <StyledStack>
        <StyledText>Tambah Teruskan</StyledText>
      </StyledStack>
    </Box>
  );
};

const AgendaSuratMasuk = () => {
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
    <Box>
      <Stack direction='row' columnGap='8px'>
        <Judul>Nota Tindakan :</Judul>
        <Judul color='#474D66'>Forward</Judul>
      </Stack>
      <StyledBox>
        <Stack rowGap='10px'>
          <Judul>Diteruskan Dari</Judul>
          <Divider
            sx={{
              borderColor: (theme) => theme.palette.coofis.tertiary[50],
              borderBottomWidth: '2px',
            }}
          />

          <Typography>EVITA TUNJUNG SEKAR / 690013</Typography>
        </Stack>
      </StyledBox>
      <FormAddressBook text='Kepada' data={datass} />
      <StyledStack>
        <StyledText>Tambah Teruskan</StyledText>
      </StyledStack>
    </Box>
  );
};

const Forward = () => {
  return (
    <Box
      backgroundColor={(theme) => theme.palette.coofis.tertiary.bg}
      minHeight='100vh'
    >
      <HeaderDetail nama='Buat Teruskan' translate save copy />
      <Box sx={{ padding: 8 }}>
        <Box
          backgroundColor={(theme) => theme.palette.background.paper}
          sx={{ padding: 8, borderRadius: '10px' }}
        >
          <MiniTab
            tabs={[
              { name: 'Alamat Penerusan', content: AlamatPenerusan() },
              {
                name: 'Agenda Surat Masuk',
                content: <TabAgenda data={pekerjaan} />,
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Forward;
