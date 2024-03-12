import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import IconButton from '@mui/material/IconButton';
import AppInfoView from '@crema/components/AppInfoView';
import { useAuthMethod } from '@crema/hooks/AuthHooks';
import AuthWrapper from '../AuthWrapper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import generateCaptcha from './captcha';
import CachedIcon from '@mui/icons-material/Cached';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import { Box, TextField, Button } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Verifikasi4 from './Verifikasi4';
import Verifikasi5 from './Verifikasi5';
import Verifikasi1 from './Verifikasi1';
import Verifikasi2 from './Verifikasi2';
import Verifikasi3 from './Verifikasi3';

const validationSchema = yup.object({
  email: yup
    .string()
    .email(<IntlMessages id='validation.emailFormat' />)
    .required(<IntlMessages id='validation.emailRequired' />),
  password: yup
    .string()
    .required(<IntlMessages id='validation.passwordRequired' />),
});

const SigninFirebase = () => {
  const { logInWithEmailAndPassword, logInWithPopup } = useAuthMethod();
  const navigate = useNavigate();

  const { messages } = useIntl();

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputValue, setInputValue] = useState('');
  const [verification, setVerification] = useState(false);
  const { pathname } = useLocation();
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = () => {
    if (inputValue === captcha) {
      alert('Captcha input is correct!');
      setVerification(true);
      navigate('/signin/verifikasi1');
    } else {
      alert('Captcha input is incorrect. Please try again.');
      setCaptcha(generateCaptcha());
      setInputValue('');
    }
  };
  const handleReloadCaptcha = () => {
    setCaptcha(generateCaptcha());
    setInputValue('');
    setVerification(false);
  };
  console.log(pathname);
  return (
    <AuthWrapper>
      {pathname === '/signin/verifikasi4' ? (
        <Verifikasi4 />
      ) : pathname === '/signin' ? (
        <Box
          width='46vw'
          height='100%'
          padding={20}
          gap={63}
          sx={{ bgcolor: '#FFFFFF' }}
        >
          <Box>
            <img src='/logotelkom.png' />
            <Typography variant='h1' paddingBottom='40px' paddingTop='30px'>
              Masuk NDE Telkom
            </Typography>
          </Box>
          <Formik
            validateOnChange={true}
            initialValues={{
              email: 'crema.demo@gmail.com',
              password: 'Pass@1!@all',
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting }) => {
              setSubmitting(true);
              logInWithEmailAndPassword(data);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form style={{ textAlign: 'left' }} noValidate autoComplete='off'>
                <Box>
                  <Typography
                    variant='h6'
                    sx={{
                      textAlign: 'start',
                      color: '#303030',
                      fontSize: '14px',
                    }}
                  >
                    Username
                  </Typography>

                  <AppTextField
                    placeholder={'Masukan Username'}
                    // label={<IntlMessages id='common.email' />}
                    name='email'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      '& .MuiInputBase-input': {
                        fontSize: 14,
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <IconButton disabled>
                            <PersonOutlineOutlinedIcon
                              sx={{ color: 'black' }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Box sx={{ mb: { xs: 3, xl: 4 } }}>
                  <Typography
                    variant='h6'
                    paddingTop='10px'
                    sx={{
                      textAlign: 'start',
                      color: '#303030',
                      fontSize: '14px',
                    }}
                  >
                    Password
                  </Typography>

                  <AppTextField
                    type={showPassword ? 'text' : 'password'}
                    placeholder={'Masukan Password'}
                    name='password'
                    variant='outlined'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <IconButton disabled>
                            <LockOutlinedIcon sx={{ color: 'black' }} />
                          </IconButton>
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton onClick={toggleShowPassword} edge='end'>
                            {showPassword ? (
                              <VisibilityIcon />
                            ) : (
                              <VisibilityOffIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      width: '100%',
                      '& .MuiInputBase-input': {
                        fontSize: 14,
                      },
                    }}
                  />
                </Box>

                <Box
                  noValidate
                  autoComplete='off'
                  justifyContent='space-between'
                  display='flex'
                  sx={{
                    mb: { xs: 3, xl: 4 },
                  }}
                >
                  <Box border='1px solid grey' borderRadius='10px'>
                    <TextField
                      id='outlined-basic'
                      variant='outlined'
                      value={captcha}
                      disabled
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '10px 0px 0px 10px',
                        },
                      }}
                    />
                    <IconButton
                      sx={{
                        padding: '10px',
                        mx: '10px',
                        marginTop: '5px',
                      }}
                    >
                      <CachedIcon
                        variant='contained'
                        onClick={handleReloadCaptcha}
                      />
                    </IconButton>
                  </Box>

                  <TextField
                    id='filled-basic'
                    label='Enter Captcha'
                    variant='outlined'
                    value={inputValue}
                    onChange={handleChange}
                    sx={{ width: '30ch' }}
                  />
                </Box>

                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleSubmit}
                  sx={{
                    fontWeight: 'regular',
                    fontSize: 16,
                    textTransform: 'capitalize',
                    borderRadius: '20px',
                    width: '100%',
                    bgcolor: '#E42313',
                  }}
                >
                  Login
                </Button>

                <Typography
                  variant='h6'
                  sx={{
                    textAlign: 'center',
                    color: '#303030',
                    fontSize: '14px',
                    marginTop: '10px',
                  }}
                >
                  Dengan masuk, Anda menyetujui{' '}
                  <Link
                    href='/ketentuan-pengguna'
                    color='primary'
                    underline='always'
                  >
                    Ketentuan Pengguna
                  </Link>{' '}
                  kami
                </Typography>
              </Form>
            )}
          </Formik>

          <Typography
            variant='h6'
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
              color: '#A0A4A8',
              fontSize: '14px',
              marginTop: '80px',
            }}
          >
            Ⓒ PT. Telkom Indonesia Tbk. | version 1.0
          </Typography>
        </Box>
      ) : pathname === '/signin/verifikasi5' ? (
        <Verifikasi5 />
      ) : pathname === '/signin/verifikasi1' ? (
        <Verifikasi1 />
      ) : pathname === '/signin/verifikasi2' ? (
        <Verifikasi2 />
      ) : pathname === '/signin/verifikasi3' ? (
        <Verifikasi3 />
      ) : null}

      <AppInfoView />
    </AuthWrapper>
  );
};

export default SigninFirebase;
