import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useThemeContext } from '@crema/context/AppContextProvider/ThemeContextProvider';
import { alpha } from '@mui/material/styles';
import { ReactComponent as Logo } from '../../../../../assets/icon/logo.svg';
import { ReactComponent as LogoText } from '../../../../../assets/icon/logo_text.svg';

const AppLogo = () => {
  const { theme } = useThemeContext();
  return (
    <Box
      sx={{
        height: { xs: 56, sm: 70 },
        padding: 2.5,
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
          height: { xs: 40, sm: 45 },
        },
      }}
      className='app-logo'
      
    >
      <Stack>
        <h1>Hello User T0001, <span>Welcome back</span></h1>
        <Typography marginTop={2} variant='h5'>11:20 AM Senin, 26 Februari 2024</Typography>
      </Stack>
      <Logo fill={theme.palette.primary.main} />
      {/* <Box
        sx={{
            mt: 1,
          display: { xs: 'none', md: 'block' },
          '& svg': {
              height: { xs: 25, sm: 30 },
          },
        }}
      >
        <LogoText fill={alpha(theme.palette.text.primary, 0.8)} />
      </Box> */}
    </Box>
  );
};

export default AppLogo;
