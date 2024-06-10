import * as React from 'react';
import {
  Typography,
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
} from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import PropTypes from 'prop-types';
import { Repeat, User, Filter, Trello } from 'feather-icons-react';
import MailOutline from '@mui/icons-material/MailOutline';
import DraftsOutlined from '@mui/icons-material/DraftsOutlined';
import ReplyIcon from '@mui/icons-material/Reply';
import inboxIcon from '../../assets/icon/inbox.svg';
import disposisiIcon from '../../assets/icon/D_icon.svg';
import terkirimIcon from '../../assets/icon/mail.svg';
import undanganIcon from '../../assets/icon/Surat_Undangan.svg';
// import disIcon from '../../assets/icon/shield.svg';
export default function TableList({files}) {

  const getStatusColor = (priority) => {
    switch (priority) {
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

  const getType = (type) => {
    switch (type) {
      case 'Surat Masuk':
        return [inboxIcon, 'Surat Masuk'];
      case 'Perlu Tindak Lanjut':
        return [undanganIcon, 'Perlu Tindak Lanjut'];
      case 'Disposisi':
        return [disposisiIcon, 'Disposisi'];
      case 'Surat Terkirim':
        return [terkirimIcon, 'Surat Terkirim'];
      default:
        return [inboxIcon, 'Surat Masuk'];
    }
  };

  return (
    <>
      <TableContainer>
        <Table stickyHeader aria-label='stickt table' sx={{ minWidth: 550 }}>
          <TableHead>
            <TableRow>
              <TableCell align='right'>
                <User size={20} />
              </TableCell>
              <TableCell align='left'>
                <Typography sx={{ fontWeight: Fonts.BOLD }}>Nama</Typography>
              </TableCell>
              <TableCell align='left'>
                <Stack direction='row' spacing={3}>
                  <Trello size={20} />
                  <Typography sx={{ fontWeight: Fonts.BOLD }}>
                    Keterangan
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align='center'>
                <Typography sx={{ fontWeight: Fonts.BOLD }}>
                  Disposisi
                </Typography>
              </TableCell>
              <TableCell align='center'>
                <Typography sx={{ fontWeight: Fonts.BOLD }}>Tipe</Typography>
              </TableCell>
              <TableCell align='center'>
                <Typography sx={{ fontWeight: Fonts.BOLD }}>Status</Typography>
              </TableCell>
              <TableCell align='center'>
                <Stack direction='row' spacing={2}>
                  <Typography sx={{ fontWeight: Fonts.BOLD }}>Waktu</Typography>
                  <Filter size={20} />
                </Stack>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {files.map((Data, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='right' sx={{ color: '#2E3032' }}>
                  {Data.status === 'Read' ? (
                    <DraftsOutlined fontSize='small'/>
                  ) : (
                    <MailOutline fontSize='small'/>
                  )}
                </TableCell>
                <TableCell component='th' scope='row'>
                  <Stack direction='row' spacing={3}>
                    <Avatar
                      alt='Remy Sharp'
                      sx={{ bgcolor: getStatusColor(Data.priority)[0] }}
                    >
                      {Data.primary.substring(0, 2)}
                    </Avatar>
                    <Stack>
                      <Typography
                        variant='subtitle2'
                        color='text.primary'
                        sx={{
                          // fontSize:'16px',
                          fontWeight:
                            Data.status === 'Unread' ||
                            Data.status === 'Disposisi'
                              ? Fonts.BOLD
                              : Fonts.LIGHT,
                        }}
                      >
                        {Data.primary}
                      </Typography>
                      <Typography
                        variant='body2'
                        color='text.primary'
                        sx={{
                          // fontSize:'12px',
                          fontWeight:
                            Data.status === 'Unread' ||
                            Data.status === 'Disposisi'
                              ? Fonts.BOLD
                              : Fonts.LIGHT,
                        }}
                      >
                        {Data.name}
                      </Typography>
                    </Stack>
                  </Stack>
                </TableCell>
                <TableCell align='left'>
                  <Typography
                    // sx={{ fontSize: '12px' }}
                    variant='body2'
                    color='text.primary'
                    sx={{
                      display: 'inline',
                      fontWeight:
                        Data.status === 'Unread' || Data.status === 'Disposisi'
                          ? Fonts.BOLD
                          : Fonts.LIGHT,
                    }}
                  >
                    {Data.secondary}
                  </Typography>
                </TableCell>
                <TableCell align='center'>
                  <Stack direction='row' alignItems='center' spacing={1}>
                    <Repeat size={12} color='red' />
                    <Typography sx={{ fontSize: '12px' }}>(2)</Typography>
                    <ReplyIcon
                      fontSize='small'
                      sx={{ color: '#5C5E61', transform: 'scaleX(-1)' }}
                    />
                    <Typography sx={{ fontSize: '12px' }}>(2)</Typography>
                  </Stack>
                </TableCell>
                <TableCell align='center'>
                  {/* <OutboxOutlinedIcon fontSize='small' sx={{color:"#2E3032"}}/> */}
                  <img
                    src={getType(Data.type)[0]}
                    alt={getType(Data.type)[1]}
                  />
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      backgroundColor: getStatusColor(Data.priority)[1],
                      color: getStatusColor(Data.priority)[0],
                      width: 57,
                      height: 20,
                      borderRadius: 1,
                      fontSize: '11px',
                      lineHeight: '18px',
                      textAlign: 'center',
                    }}
                  >
                    {Data.priority}
                  </Box>
                </TableCell>
                <TableCell align='left'>
                  <Typography variant='body1'>{Data.date}</Typography>
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
  props: PropTypes.shape({}),
  files: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
