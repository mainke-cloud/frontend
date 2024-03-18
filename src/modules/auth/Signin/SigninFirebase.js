import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
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
import { Box, TextField, Button, Stack, Grid } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import Verifikasi4 from './Verifikasi4';
import Verifikasi5 from './Verifikasi5';
import Verifikasi1 from './Verifikasi1';
import Verifikasi2 from './Verifikasi2';
import Verifikasi3 from './Verifikasi3';

const validationSchema = yup.object({
  email: yup
    .string()
    .email(<IntlMessages id='validation.emailFormat' />)
    .required(
      <>
        <ErrorRoundedIcon style={{ marginRight: '8px', fontSize: 'medium' }} />{' '}
        <IntlMessages id='Ussername Anda' style={{ marginTop: '25px' }} />
      </>,
    ),
  password: yup.string().required(
    <>
      <ErrorRoundedIcon style={{ marginRight: '8px', fontSize: 'medium' }} />{' '}
      <IntlMessages id='Isi Password anda' style={{ marginTop: '20px' }} />
    </>,
  ),
  captchaValue: yup.string().required(
    <>
      <ErrorRoundedIcon style={{ marginRight: '8px', fontSize: 'medium' }} />{' '}
      <IntlMessages id='Isi captcha anda' style={{ marginTop: '20px' }} />
    </>,
  ),
});

const SigninFirebase = () => {
  const { logInWithEmailAndPassword, logInWithPopup } = useAuthMethod();
  const navigate = useNavigate();
  const { messages } = useIntl();
  const [showPassword, setShowPassword] = useState(false);
  const { pathname } = useLocation();
  const [verification, setVerification] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const [captcha, setCaptcha] = useState('');

  const formik = useFormik({
    initialValues: {
      email: 'crema.demo@gmail.com',
      password: 'Pass@1!@all',
      captchaValue: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      if (values.captchaValue === captcha) {
        alert('Captcha input is correct!');
        setVerification(true);
        navigate('/signin/verifikasi1');
      } else {
        alert('Captcha input is incorrect. Please try again.');
        setCaptcha(generateCaptcha());
      }
      setSubmitting(false);
    },
  });

  const handleReloadCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  return (
    <AuthWrapper>
      {pathname === '/signin/verifikasi4' ? (
        <Verifikasi4 />
      ) : pathname === '/signin' ? (
        <Box
          width='48vw'
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
          <form onSubmit={formik.handleSubmit}>
            <Box>
              <Typography
                variant='h6'
                sx={{ textAlign: 'start', color: '#303030', fontSize: '14px' }}
              >
                Username
              </Typography>
              <TextField
                placeholder={'Masukan Username'}
                name='email'
                variant='outlined'
                fullWidth
                {...formik.getFieldProps('email')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <PersonOutlineOutlinedIcon sx={{ color: 'black' }} />
                    </InputAdornment>
                  ),
                }}
              />
              {formik.touched.email && formik.errors.email && (
                <Typography variant='body2' color='error'>
                  {formik.errors.email}
                </Typography>
              )}
            </Box>
            <Box sx={{ mb: { xs: 3, xl: 4 }, marginTop: '18px' }}>
              <Typography
                variant='h6'
                sx={{ textAlign: 'start', color: '#303030', fontSize: '14px' }}
              >
                Password
              </Typography>
              <TextField
                type={showPassword ? 'text' : 'password'}
                placeholder={'Masukan Password'}
                name='password'
                variant='outlined'
                fullWidth
                {...formik.getFieldProps('password')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LockOutlinedIcon sx={{ color: 'black' }} />
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
              />
              {formik.touched.password && formik.errors.password && (
                <Typography variant='body2' color='error'>
                  {formik.errors.password}
                </Typography>
              )}
            </Box>
            <Box sx={{ mb: { xs: 3, xl: 4 }, marginTop: '18px' }}>
              <Typography
                variant='h6'
                sx={{ textAlign: 'start', color: '#303030', fontSize: '14px' }}
              >
                Captcha
              </Typography>
              <Grid container noValidate autoComplete='off' columnSpacing={4}>
                <Grid item xs={7}>
                  <TextField
                    id='outlined-basic'
                    name='captcha'
                    variant='outlined'
                    value={captcha}
                    disabled
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton onClick={handleReloadCaptcha}>
                            <CachedIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    id='filled-basic'
                    placeholder='Ketik Captcha disamping'
                    name='captchaValue'
                    variant='outlined'
                    onChange={formik.handleChange}
                    fullWidth
                    value={formik.values.captchaValue}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.captchaValue &&
                      Boolean(formik.errors.captchaValue)
                    }
                    helperText={
                      formik.touched.captchaValue && formik.errors.captchaValue
                    }
                  />
                </Grid>
              </Grid>
            </Box>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              sx={{
                fontWeight: 'regular',
                fontSize: 16,
                textTransform: 'capitalize',
                borderRadius: '20px',
                width: '100%',
                bgcolor: '#E42313',
                marginTop: '30px',
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
                marginTop: '18px',
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
          </form>
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
