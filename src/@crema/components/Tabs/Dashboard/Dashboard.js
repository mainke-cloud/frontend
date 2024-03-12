import React from 'react';
import {
  Box,
  Stack,
  Grid,
  Button,
  Avatar,
  Typography,
  IconButton,
  Badge,
} from '@mui/material';

import person from '../../../../assets/icon/Dashboard_girl.png';
import Refresh from '../../../../assets/icon/Refresh_icon.png';
import Write from '../../../../assets/icon/Write_icon.png';
import More from '../../../../assets/icon/More_icon.png';
import Disposisi from '../../../../assets/icon/Disposisi_icon.png';
import Surat_Masuk from '../../../../assets/icon/Surat_Masuk_Icon.png';
import Perlu_Tindak_Lanjut from '../../../../assets/icon/Perlu_tindak_Lanjut_Icon.png';
import Sekretaris from '../../../../assets/icon/Sekretaris_Icon.png';
import Delegasi from '../../../../assets/icon/Delegasi_Icon.png';
import avatar from '../../../../assets/icon/avatar_placeholder.png';
import Surat_Internal from '../../../../assets/icon/Surat_Internal_logo.png';
import Surat_Undangan from '../../../../assets/icon/Surat_Undangan_logo.png';
import Surat_Eksternal from '../../../../assets/icon/Surat_Eksternal_logo.png';

import TodoList_Dashboard from './TodoList_Dashboard';
import Mail_Button from './Mail_Button';
import Mail_Status from './Mail_Status';

const Dashboard = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='flex-start'
            spacing={3}
          >
            <Stack direction='column' spacing={3}>
              <Typography variant='h1'>
                Hello User T0001, Welcome back
              </Typography>
              {/* input time and date here */}
              <Typography variant='body1'>
                11.20 AM Senin, 26 Februari 2024
              </Typography>
            </Stack>
            <img
              src={person}
              style={{ height: '90px', paddingRight: '60px' }}
            />
            <IconButton>
              <img src={Refresh} />
            </IconButton>
          </Stack>
        </Grid>
        <Grid item xs={9}>
          <Stack direction='column' spacing={4}>
            <Stack direction='row' spacing={5}>
              <Mail_Button
                bgColor='#F9E4E4'
                textColor='#E42313'
                text='Buat Surat Internal'
                subText='Info'
                image={Surat_Internal}
              />

              <Mail_Button
                bgColor='#F9E5CF'
                textColor='#C45900'
                text='Buat Surat External'
                subText='Info'
                image={Surat_Eksternal}
              />

              <Mail_Button
                bgColor='#DFE4F7'
                textColor='#4D6FD4'
                text='Buat Surat Undangan'
                subText='Info'
                image={Surat_Undangan}
              />
              <IconButton>
                <img src={Write} />
              </IconButton>
              <IconButton>
                <img src={More} />
              </IconButton>
            </Stack>
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='flex-start'
              spacing={25}
            >
              <Mail_Status
                image={Disposisi}
                text='Disposisi'
                boxColor='#429777'
                counter='14'
              />

              <Mail_Status
                image={Surat_Masuk}
                text='Surat masuk'
                boxColor='#3366FF'
                counter='45'
              />

              <Mail_Status
                image={Perlu_Tindak_Lanjut}
                text='Perlu tindak lanjut'
                boxColor='#FF7452'
                counter='34'
              />
            </Stack>

            <TodoList_Dashboard />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack direction='column' spacing={5}>
            {/* Replace with reusable components */}
            <Box sx={{ backgroundColor: '#DFE4F7', borderRadius: 2 }}>
              <Stack direction='row' spacing={2} sx={{ margin: 3 }}>
                <img src={Sekretaris} />
                <Typography sx={{ color: '#2952CC' }}>Sekretaris</Typography>
              </Stack>
              <Box sx={{ backgroundColor: 'white' }}>
                <Stack
                  direction='row'
                  spacing={3}
                  alignItems='flex-start'
                  justifyContent='flex-start'
                >
                  <Badge
                    overlap='circular'
                    color='primary'
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={2}
                  >
                    <Avatar src={avatar} />
                  </Badge>
                  <Stack direction='column' spacing={2}>
                    <Typography variant='h3'>Manager development</Typography>
                    <Box
                      sx={{
                        backgroundColor: '#A3E6CD',
                        height: '22px',
                        weight: '44px',
                      }}
                    >
                      <Typography sx={{ height: '22px', weight: '44px' }}>
                        Aktif
                      </Typography>
                    </Box>
                    <Typography>Taufik Sulaeman/8900002/ARMS</Typography>
                    <Button
                      variant='contained'
                      disableElevation
                      sx={{ backgroundColor: '#FFEFD2', color: 'black' }}
                    >
                      <Typography>Atur Keaktifan</Typography>
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Box>
            <Box sx={{ backgroundColor: '#F9E5CF', borderRadius: 2 }}>
              <Stack direction='row' spacing={2} sx={{ margin: 3 }}>
                <img src={Delegasi} />
                <Typography sx={{ color: '#C45900' }}>Delegasi</Typography>
              </Stack>
              <Box sx={{ backgroundColor: 'white' }}>
                <Stack
                  direction='row'
                  spacing={3}
                  alignItems='flex-start'
                  justifyContent='flex-start'
                >
                  <Badge
                    overlap='circular'
                    color='primary'
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={2}
                  >
                    <Avatar src={avatar} />
                  </Badge>
                  <Stack direction='column' spacing={2}>
                    <Typography variant='h3'>Manager development</Typography>
                    <Box
                      sx={{
                        backgroundColor: '#A3E6CD',
                        height: '22px',
                        weight: '44px',
                      }}
                    >
                      <Typography sx={{ height: '22px', weight: '44px' }}>
                        Aktif Sampai 22 sep{' '}
                      </Typography>
                    </Box>
                    <Typography>Taufik Sulaeman/8900002/ARMS</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;