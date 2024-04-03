import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {
  Typography,
  Avatar,
  AvatarGroup,
  Box,
  Pagination,
} from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhotoFilterOutlinedIcon from '@mui/icons-material/PhotoFilterOutlined';
import { Fonts } from '@crema/constants/AppEnums';
import PropTypes from 'prop-types';
import { Repeat, User, Filter, Trello } from 'feather-icons-react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import OutboxOutlinedIcon from '@mui/icons-material/OutboxOutlined';
import MoveToInboxOutlinedIcon from '@mui/icons-material/MoveToInboxOutlined';
import RedoIcon from '@mui/icons-material/Redo';
import ReplyIcon from '@mui/icons-material/Reply';

export default function TableList() {
  const listData = [
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Komisaris',
      name: 'Salies Apriliyanto',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '20 September 2024',
      status: 'Sedang',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Manager',
      name: 'Salies Apriliyanto',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '10 September 2024',
      status: 'Tinggi',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Sekretaris',
      name: 'Salies Apriliyanto',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '13 Oktober 2024',
      status: 'Sedang',
    },
    {
      avatarSrc: '/static/images/avatar/1.jpg',
      primary: 'Bisnis Development',
      name: 'Salies Apriliyanto',
      secondary:
        'Undangan Workshop Pemahaman ISO90012015 Layanan Contact Center',
      date: '11 Januari 2024',
      status: 'Rendah',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Tinggi':
        return ['#E42313', '#FFBDAD'];
      case 'Sedang':
        return ['#FFB020', '#FFEFD2'];
      case 'Rendah':
        return ['#3366FF', '#D6E0FF'];
      default:
        return ['lightgrey', 'lightgrey'];
    }
  };
  return (
    <>
      <TableContainer>
        <Table stickyHeader aria-label='stickt table' sx={{ minWidth: 550 }}>
          <TableHead>
            <TableRow>
              <TableCell align='left'>
                {/* <PersonOutlineOutlinedIcon
                  fontSize='small'
                  sx={{ alignItems: 'center' }}
                /> */}
                <User size={20}/>
              </TableCell>
              <TableCell align='left'>
                <Typography sx={{fontWeight:Fonts.BOLD}}>Nama</Typography>
              </TableCell>
              <TableCell align='left'>
                <Stack direction="row" spacing={3}>
                  <Trello size={20} />
                  <Typography sx={{fontWeight:Fonts.BOLD}}>Keterangan</Typography>
                </Stack>
              </TableCell>
              <TableCell align='center'>
                <Typography sx={{fontWeight:Fonts.BOLD}}>Disposisi</Typography>
              </TableCell>
              <TableCell align='center'>
                <Typography sx={{fontWeight:Fonts.BOLD}}>Tipe</Typography>
              </TableCell>
              <TableCell align='center'>
                <Typography sx={{fontWeight:Fonts.BOLD}}>Status</Typography>
              </TableCell>
              <TableCell align='center'>
                <Stack direction='row' spacing={2}>
                  <Typography sx={{fontWeight:Fonts.BOLD}}>Tenggat Waktu</Typography>
                  <Filter size={20}/>
                </Stack>
                
              </TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {listData.map((Data, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <MailOutlineIcon
                    fontSize='small'
                    sx={{ alignItems: 'center', color: '#2E3032'}}
                  />
                </TableCell>
                <TableCell component='th' scope='row'>
                  <Stack direction='row' spacing={3}>
                    <Avatar
                              alt='Remy Sharp'
                              sx={{ bgcolor: getStatusColor(Data.status)[0] }}
                            >
                              {Data.primary.substring(0, 2)}
                            </Avatar>
                    <Stack>
                      <Typography
                        sx={{ fontWeight: Fonts.BOLD, fontSize: '16px' }}
                      >
                        {Data.primary}
                      </Typography>
                      <Typography sx={{fontSize:'12px'}}>
                        {Data.name}
                      </Typography>
                    </Stack>
                  </Stack>
                </TableCell>
                <TableCell align='left'>
                  <Typography sx={{ fontSize: '12px' }}>
                    {Data.secondary}
                  </Typography>
                </TableCell>
                <TableCell align='center'>
                  <Stack direction='row' alignItems='center' spacing={1}>
                    <Repeat size={12} color='red' />
                    <Typography sx={{fontSize: '12px'}}>(2)</Typography>
                    <ReplyIcon fontSize='small' sx={{color:'#5C5E61', transform: 'scaleX(-1)'}}/>
                    <Typography sx={{fontSize: '12px'}}>(2)</Typography>
                  </Stack>
                </TableCell>
                <TableCell align='center'>
                  <OutboxOutlinedIcon fontSize='small' sx={{color:"#2E3032"}}/>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      backgroundColor: getStatusColor(Data.status)[1],
                      color: getStatusColor(Data.status)[0],
                      width: 57,
                      height: 20,
                      borderRadius: 1,
                      fontSize: '11px',
                      lineHeight: '18px',
                      textAlign: 'center',
                    }}
                  >
                    {Data.status}
                  </Box>
                </TableCell>
                <TableCell align='left'>
                  <Typography sx={{ fontSize: '14px' }}>{Data.date}</Typography>
                </TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

TableList.propTypes = {
  isCollapsed: PropTypes.bool,
};
