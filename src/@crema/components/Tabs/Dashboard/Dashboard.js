import React, {useState} from 'react';
import {
  Box,
  Stack,
  Grid,
  Typography,
  IconButton,
  Paper,
} from '@mui/material';

import person from '../../../../assets/Dashboard/Dashboard_girl.png';
import Refresh from '../../../../assets/Dashboard/Refresh_icon.png';
import Write from '../../../../assets/Dashboard/Write_icon.png';
import More from '../../../../assets/Dashboard/More_icon.png';
import Plus from '../../../../assets/Dashboard/Plus_icon.png'
import Disposisi from '../../../../assets/Dashboard/Disposisi_icon.png';
import Surat_Masuk from '../../../../assets/Dashboard/Surat_Masuk_Icon.png';
import Perlu_Tindak_Lanjut from '../../../../assets/Dashboard/Perlu_tindak_Lanjut_Icon.png';
import Sekretaris_Icon from '../../../../assets/Dashboard/Sekretaris_Icon.png';
import Delegasi_Icon from '../../../../assets/Dashboard/Delegasi_Icon.png';
import avatar from '../../../../assets/Dashboard/avatar_placeholder.png';
import Surat_Internal from '../../../../assets/Dashboard/Surat_Internal_logo.png';
import Surat_Undangan from '../../../../assets/Dashboard/Surat_Undangan_logo.png';
import Surat_Eksternal from '../../../../assets/Dashboard/Surat_Eksternal_logo.png';
import Surat_Delegasi from '../../../../assets/Dashboard/Surat_Delegasi_logo.png';

import TodoList_Dashboard from './TodoList_Dashboard';
import Mail_Status from './Mail_Status';
import Mail_Button from './Mail_Button';
import Delegasi from './Delegasi';
import AppCard from '@crema/components/AppCard';
import Sekretaris from './Sekretaris';
import AppCard2 from '@crema/components/AppCard/AppCard2';

const Dashboard = () => {
  const [AddSekretaris, setAddSekretaris] = useState(false);

  const handleClickSekretaris = () => {
    setAddSekretaris(!AddSekretaris);
  };

  const [AddDelegasi, setAddDelegasi] = useState(false);

  const handleClickDelegasi = () => {
    setAddDelegasi(!AddDelegasi);
  };

  const [isCollapsed, setCollapsed] = useState(false);
  return (
    <>
      <Paper elevation={0}>
        <Grid container spacing={4} sx={{ paddingX: 8, }}>
          <Grid item xs={11}>
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
            </Stack>
          </Grid>
          <Grid item xs={1} alignItems="center" justifyContent="flex-end">
              <IconButton>
                <img src={Refresh} />
              </IconButton>
          </Grid>
        </Grid>
      </Paper>
      <Grid container columnSpacing={5} height={'100vh'} padding={3}>
        <Grid item xs={9}>
          <Stack direction="column" spacing={5}>
            <Stack 
              direction={{ xs: 'column', md: 'row' }} 
              spacing={5} 
              alignItems={'center'}>

              <Stack flex={1}>
                <Mail_Button
                  bgColor='#F9E4E4'
                  textColor='#E42313'
                  text='Buat Surat Internal'
                  subText='Info'
                  image={Surat_Internal}
                />
              </Stack>

              <Stack flex={1}>
                <Mail_Button
                  bgColor='#F9E5CF'
                  textColor='#C45900'
                  text='Buat Surat External'
                  subText='Info'
                  image={Surat_Eksternal}
                />
              </Stack>

              <Stack flex={1}>
                <Mail_Button
                  bgColor='#DFE4F7'
                  textColor='#4D6FD4'
                  text='Buat Surat Undangan'
                  subText='Info'
                  image={Surat_Undangan}
                />
              </Stack>

              <Stack flex={1}>
                <Mail_Button
                  bgColor='#DCF2EA'
                  bgHover='#A3E6CD'
                  textColor='#429777'
                  text='Buat Surat Delegasi'
                  subText='Info'
                  image={Surat_Delegasi}
                />
              </Stack>

            </Stack>

            <Stack
              direction={'row'} 
              alignItems={'center'} 
              justifyContent={'space-between'}
              spacing={3}
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

            <TodoList_Dashboard 
            isCollapsed={isCollapsed}
            setCollapsed={setCollapsed}/>

          </Stack>

        </Grid>
        <Grid item xs={3} height={'100%'}>
          <Stack direction='column' spacing={5}>
            <AppCard2 sx={{ height: '50%'}}>

              <Box sx={{ backgroundColor: '#DFE4F7', borderTopLeftRadius: 2, borderTopRightRadius: 2 }}>
                <Stack direction='row' spacing={2} sx={{ marginBottom: 3, marginLeft: 2, padding:2 }}>
                  <img src={Sekretaris_Icon} />
                  <Typography sx={{ color: '#2952CC' }}>Sekretaris</Typography>
                </Stack>
              </Box>

              <Sekretaris 
                Profile={avatar} 
                JobDesk="Manager development" 
                ID="Taufik Sulaeman/8900002/ARMS"
              />
            
            </AppCard2>
              <AppCard2 sx={{ height: '50%'}} >
              <Box sx={{ backgroundColor: '#F9E5CF', borderTopLeftRadius: 2, borderTopRightRadius: 2, marginTop: 0}}>
                <Stack direction='row' spacing={2} sx={{ marginBottom: 3, marginLeft: 2, padding: 2 }}>
                  <img src={Delegasi_Icon} />
                  <Typography sx={{ color: '#C45900' }}>Delegasi</Typography>
                </Stack>                
              </Box>

                <Delegasi 
                  Profile={avatar} 
                  JobDesk='Manager development' 
                  ID='Taufik Sulaeman/8900002/ARMS'
                />
            
            </AppCard2>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;


