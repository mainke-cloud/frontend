import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Grid, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import AProfile from '../../assets/vector/Avatar.png';

import { User, Briefcase, Phone } from 'feather-icons-react';
import { useAuthContext } from '@crema/context/AuthContext';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#EEF0F7',
    color: '#262829',
    fontSize: 16,
    fontWeight: 'bold',
    borderBottom: 'none',
  },
  [`&.${tableCellClasses.body}`]: {
    color: '#25282B',
    borderBottom: 'none',
  },
  '&.small': {
    fontSize: 14,
    fontWeight: 'regular',
  },
  '&.medium': {
    fontWeight: 'bold',
    fontSize: 16,
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#52BD94',
    color: '#52BD94',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    zIndex: '0',
  },
}));

const StyledTableRow = styled(TableRow)(() => ({}));

const Profile = () => {
  const {getProfile} = useAuthContext();

  const diri = [
    { name: 'Nama Lengkap', content: getProfile.nama_lengkap },
    { name: 'Alamat', content: getProfile.alamat },
    { name: 'NIK Group', content: getProfile.nik_group },
    { name: 'NIK Local', content: getProfile.nik_lokal },
  ];

  const pekerjaan = [
    { name: 'Kota', content: getProfile.kota },
    { name: 'Organisasi', content: getProfile.organisasi },
    { name: 'Division', content: getProfile.divisi_detail?.nama_divisi },
    { name: 'Departemen', content: getProfile.divisi_detail?.departemen_detail?.nama_departemen },
    { name: 'Kode Departemen', content: getProfile.divisi_detail?.departemen_detail?.kode_departemen },
    { name: 'Jabatan', content: getProfile.jabatan_detail?.nama_jabatan },
  ];

  const kontak = [
    { name: 'Email', content: getProfile.email },
    { name: 'Nomor Handphone', content: getProfile.phone_number },
  ];

  return (
    <>
      <Box
        sx={{
          background: 'linear-gradient(267.36deg, #C74545 -4.33%, #AA3636 101.59%)',
          paddingY: '42px',
          paddingX: 8,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            position: 'relative',
          }}
        >
          <Grid
            container
            alignItems='center'
            columnSpacing={5}
            sx={{ paddingY: 4, paddingX: 3 }}
          >
            <Grid item>
              <StyledBadge
                overlap='circular'
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant='dot'
              >
                <Avatar sx={{ weight: '50px' }} alt='Profile' src={AProfile} />
              </StyledBadge>
            </Grid>
            <Grid item xs={11} spacing={0}>
              <Typography color='text.primary' sx={{ fontSize: 20, fontWeight: 700 }}>
                {getProfile?.jabatan_detail?.nama_jabatan}
              </Typography>
              <Typography color='text.third' sx={{ fontSize: 14, fontWeight: 400 }}>
                {getProfile?.divisi_detail?.nama_divisi}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Grid container spacing={8} sx={{ padding: 8 }}>
        <Grid item xs={8}>
          <TableContainer sx={{ minHeight: '300px' }} component={Paper}>
            <Table aria-label='customized table'>
              <TableHead>
                <StyledTableCell style={{ width: '25%' }}>Informasi Diri</StyledTableCell>
                <StyledTableCell style={{ width: '2%' }}></StyledTableCell>
                <StyledTableCell sx={{ textAlign: 'end' }}>
                  <User />
                </StyledTableCell>
              </TableHead>
              <TableBody>
                {diri.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell className='medium'>{row.name}</StyledTableCell>
                    <StyledTableCell className='medium'>:</StyledTableCell>
                    <StyledTableCell className='small'>{row.content}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <TableContainer sx={{ minHeight: '300px' }} component={Paper}>
            <Table aria-label='customized table'>
              <TableHead>
                <StyledTableCell style={{ width: '80%' }}>Informasi Kontak</StyledTableCell>
                <StyledTableCell sx={{ textAlign: 'end' }}>
                  <Phone />
                </StyledTableCell>
              </TableHead>
              <TableBody>
                {kontak.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell className='medium'>
                      {row.name} : <Typography className='small'>{row.content}</Typography>
                    </StyledTableCell>
                    <StyledTableCell className='small'></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <TableContainer sx={{ minHeight: '300px' }} component={Paper}>
            <Table aria-label='customized table'>
              <TableHead>
                <StyledTableCell style={{ width: '17%' }}>Informasi Pekerjaan</StyledTableCell>
                <StyledTableCell style={{ width: '2%' }}></StyledTableCell>
                <StyledTableCell sx={{ textAlign: 'end' }}>
                  <Briefcase />
                </StyledTableCell>
              </TableHead>
              <TableBody>
                {pekerjaan.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell className='medium'>{row.name}</StyledTableCell>
                    <StyledTableCell className='medium'>:</StyledTableCell>
                    <StyledTableCell className='small'>{row.content}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
