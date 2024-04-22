import React, { useState } from 'react';
import { Stack, Typography, Button, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppScrollbar from '@crema/components/AppScrollbar';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import TabWrapper from '../../../../modules/suratKeluar/TabWrapper';
import { IconButton, TextField } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ComposeMail from '@crema/components/AppAddress';

const TabContentEditPenerima = () => {
  const [isComposeMail, setComposeMail] = React.useState(false);

  const onOpenComposeMail = () => {
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setComposeMail(false);
  };
  const ButtonCustom = styled(Button)({
    fontWeight: 'bold',
    borderRadius: '10px',
    backgroundColor: '#9DB5FF',
    color: '#474D66',
    fontSize: '12px',
    boxShadow: 'none',
    textTransform: 'none',
    padding: '6px 12px',
    border: '1px solid #d8d8d8',
    lineHeight: 1.5,
    gap: '5px',
    '&:hover': {
      backgroundColor: '#8C8F93',
      borderColor: '#8C8F93',
      boxShadow: 'none',
    },
  });
  return (
    <>
      <Stack
        sx={{
          marginTop: '3px',
          bgcolor: '#FFFFFF',
          borderRadius: '12px',
          boxShadow: '0px 1px 4px 1px #42424233',
          padding: '20px',
        }}
      >
        {/* <ButtonBase onClick={onOpenComposeMail}> */}
        <Stack
          direction='row'
          spacing={1}
          onClick={onOpenComposeMail}
          sx={{ pb: 4, cursor: 'pointer' }}
        >
          <Typography variant='h4' sx={{ textDecoration: 'underline' }}>
            Pemeriksa
          </Typography>
          <Typography variant='h4' color='error'>
            *
          </Typography>
        </Stack>
        {/* </ButtonBase> */}
        <AppScrollbar>
          <TextField
            id='outlined-multiline-static'
            multiline
            rows={4}
            fullWidth
            InputProps={{
              endAdornment: (
                <IconButton>
                  <AddCircleOutlineRoundedIcon
                    onClick={onOpenComposeMail}
                    sx={{ color: 'black' }}
                  />
                </IconButton>
              ),
            }}
          />
        </AppScrollbar>
        <Stack
          direction='row'
          spacing={4}
          alignItems={'center'}
          sx={{ padding: '10px 0px 10px 0px' }}
        >
          <Typography>tampilkan Kepada</Typography>
          <ButtonCustom
            sx={{
              bgcolor: '#229BD8',
              padding: '5px',
              borderRadius: '5px',
              color: 'white',
            }}
          >
            Update
          </ButtonCustom>
        </Stack>
        <AppScrollbar>
          <TextField
            id='outlined-multiline-static'
            multiline
            rows={4}
            fullWidth
            disabled
            // InputProps={{
            //   endAdornment: (
            //     <IconButton>
            //       <AddCircleOutlineRoundedIcon sx={{ color: 'black' }} />
            //     </IconButton>
            //   ),
            // }}
          />
        </AppScrollbar>
        <Stack
          direction='row'
          spacing={1}
          onClick={onOpenComposeMail}
          sx={{ pb: 4, pt: 4, cursor: 'pointer' }}
        >
          <Typography variant='h4' sx={{ textDecoration: 'underline' }}>
            Tembusan
          </Typography>
          <Typography variant='h4' color='error'>
            *
          </Typography>
        </Stack>
        <AppScrollbar>
          <TextField
            id='outlined-multiline-static'
            multiline
            rows={4}
            fullWidth
            InputProps={{
              endAdornment: (
                <IconButton>
                  <AddCircleOutlineRoundedIcon
                    sx={{ color: 'black' }}
                    onClick={onOpenComposeMail}
                  />
                </IconButton>
              ),
            }}
          />
        </AppScrollbar>
        <Stack
          direction='row'
          spacing={4}
          alignItems={'center'}
          sx={{ padding: '10px 0px 10px 0px' }}
        >
          <Typography>tampilkan Kepada</Typography>
          <ButtonCustom
            sx={{
              bgcolor: '#229BD8',
              padding: '5px',
              borderRadius: '5px',
              color: 'white',
            }}
          >
            Update
          </ButtonCustom>
        </Stack>
        <AppScrollbar>
          <TextField
            id='outlined-multiline-static'
            multiline
            rows={4}
            fullWidth
            disabled
            // InputProps={{
            //   endAdornment: (
            //     <IconButton>
            //       <AddCircleOutlineRoundedIcon sx={{ color: 'black' }} />
            //     </IconButton>
            //   ),
            // }}
          />
        </AppScrollbar>
        {/* <Judul>Kepada</Judul>
        <TabWrapper sx={{ height: '100px' }} onClick={handleClick}>
          <Stack rowGap='10px'>
            <AppScrollbar
              sx={{
                height: '90px',
                overflowY: 'auto',
                padding: '5px 0px 0px 15px',
              }}
              scrollToTop={false}
            >
              {Array.from({ length: 2 }).map((_, index) => (
                <TabWrapper
                  key={index}
                  sx={{
                    border: 'none',
                    mb: 1,
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }}
                >
                  <Stack direction='row' alignItems='center'>
                    <Stack columnGap='12px' padding={1}>
                      <Typography
                        fontSize='14px'
                        color={'black'}
                        fontWeight='700'
                      >
                        MANAGER IT PLANNING & PORTFOLIO MANAGEMENT
                      </Typography>
                    </Stack>
                  </Stack>
                </TabWrapper>
              ))}
            </AppScrollbar>
          </Stack>
        </TabWrapper> */}
        {/* <Stack direction={'row'} alignItems={'center'}>
          <Judul sx={{ fontSize: '12px', paddingTop: '0px' }}>
            Tampilkan kepada
          </Judul>
          <ButtonCustom>Update</ButtonCustom>
        </Stack> */}
        {/* <TabWrapper sx={{ height: '100px' }} onClick={handleClick}>
          <Stack rowGap='10px'>
            <AppScrollbar
              sx={{
                height: '90px',
                overflowY: 'auto',
                padding: '5px 0px 0px 15px',
              }}
              scrollToTop={false}
            >
              {Array.from({ length: 1 }).map((_, index) => (
                <TabWrapper
                  key={index}
                  sx={{
                    border: 'none',
                    mb: 1,
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }}
                >
                  <Stack direction='row' alignItems='center'>
                    <Stack columnGap='12px' padding={1}>
                      <Typography
                        fontSize='14px'
                        color={'black'}
                        fontWeight='700'
                      >
                        MANAGER IT PLANNING & PORTFOLIO MANAGEMENT
                      </Typography>
                    </Stack>
                  </Stack>
                </TabWrapper>
              ))}
            </AppScrollbar>
          </Stack>
        </TabWrapper>
        <Judul>Tembusan</Judul> */}
        {/* <TabWrapper sx={{ height: '100px' }} onClick={handleClick}>
          <Stack rowGap='10px'>
            <AppScrollbar
              sx={{
                height: '90px',
                overflowY: 'auto',
                padding: '5px 0px 0px 15px',
              }}
              scrollToTop={false}
            >
              {Array.from({ length: 1 }).map((_, index) => (
                <TabWrapper
                  key={index}
                  sx={{
                    border: 'none',
                    mb: 1,
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }}
                >
                  <Stack direction='row' alignItems='center'>
                    <Stack columnGap='12px' padding={1}>
                      <Typography fontSize='14px' color={'#5C5E61'}>
                        MANAGER IT PLANNING & PORTFOLIO MANAGEMENT
                      </Typography>
                      <Typography
                        fontSize='14px'
                        color={'black'}
                        fontWeight='700'
                      >
                        DODDY HADI RUKMANA, ST/720277
                      </Typography>
                    </Stack>
                  </Stack>
                </TabWrapper>
              ))}
            </AppScrollbar>
          </Stack>
        </TabWrapper> */}
        {/* <Stack direction={'row'} alignItems={'center'}>
          <Judul sx={{ fontSize: '12px', paddingTop: '0px' }}>
            Tampilkan kepada
          </Judul>
          <ButtonCustom>Update</ButtonCustom>
        </Stack>
        <TabWrapper sx={{ height: '100px' }} onClick={handleClick}>
          <Stack rowGap='10px'>
            <AppScrollbar
              sx={{
                height: '90px',
                overflowY: 'auto',
                padding: '5px 0px 0px 15px',
              }}
              scrollToTop={false}
            >
              {Array.from({ length: 1 }).map((_, index) => (
                <TabWrapper
                  key={index}
                  sx={{
                    border: 'none',
                    mb: 1,
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }}
                >
                  <Stack direction='row' alignItems='center'>
                    <Stack columnGap='12px' padding={1}>
                      <Typography fontSize='14px' color={'#5C5E61'}>
                        MANAGER IT PLANNING & PORTFOLIO MANAGEMENT
                      </Typography>
                      <Typography
                        fontSize='14px'
                        color={'black'}
                        fontWeight='700'
                      >
                        DODDY HADI RUKMANA, ST/720277
                      </Typography>
                    </Stack>
                  </Stack>
                </TabWrapper>
              ))}
            </AppScrollbar>
          </Stack>
        </TabWrapper> */}
        <ComposeMail
          isComposeMail={isComposeMail}
          onCloseComposeMail={onCloseComposeMail}
        />
      </Stack>
    </>
  );
};

export default TabContentEditPenerima;
