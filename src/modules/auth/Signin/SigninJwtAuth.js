import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import IntlMessages from '@crema/helpers/IntlMessages';
import IconButton from '@mui/material/IconButton';
import AppInfoView from '@crema/components/AppInfoView';
import AuthWrapper from '../AuthWrapper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import generateCaptcha from './captcha';
import CachedIcon from '@mui/icons-material/Cached';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import { Box, TextField, Button, Grid, Modal, Stack } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import Verifikasi4 from './Verifikasi4';
import Verifikasi1 from './Verifikasi1';
import Verifikasi2 from './Verifikasi2';
import Verifikasi3 from './Verifikasi3';
import CoofisLogo from '../../../assets/LoginPage/coofislogo.png';
import ChecklistImage from '../../../assets/LoginPage/check.png';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../../redux/actions/loginAction';

const isCaptchaValid = (captchaValue, captcha) => {
  return captchaValue === captcha;
};

const validationSchema = yup.object({
  username: yup.string().required(
    <>
      <ErrorRoundedIcon style={{ marginRight: '8px', fontSize: 'medium' }} />{' '}
      <IntlMessages id='Isi username anda' style={{ marginTop: '25px' }} />
    </>,
  ),
  password: yup.string().required(
    <>
      <ErrorRoundedIcon style={{ marginRight: '8px', fontSize: 'medium' }} />{' '}
      <IntlMessages id='Isi password anda' style={{ marginTop: '20px' }} />
    </>,
  ),
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '25vw',
  height: '25vh',
  bgcolor: 'background.paper',
  p: '20px',
  borderRadius: '4px',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
};

const SigninJwtAuth = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { pathname } = useLocation();
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const [captcha, setCaptcha] = useState('');

  const formik = useFormik({
    initialValues: {
      username: 'nadip',
      password: 'nadip123',
    },
    validationSchema: validationSchema,
    onSubmit: async (
      values,
      // { setSubmitting }
    ) => {
      const { username, password } = values;

      if (!isCaptchaValid(values.captchaValue, captcha)) {
        alert('Captcha input is incorrect. Please try again.');
        setCaptcha(generateCaptcha());
        return;
      }

      try {
        const response = await fetch('https://new.coofis.com/api/auth/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }

        setOpen(true);

        setTimeout(() => {
          setOpen(false);
          navigate('/signin/verifikasi1');
          dispatch(authLogin({ username, password,  }));
        }, 3000);
      } catch (error) {
        console.error('Terjadi kesalahan saat login:', error.message);
        alert('Username atau password salah. Silakan coba lagi.');
        setCaptcha(generateCaptcha());
        return;
      }
      // setSubmitting(false);
    },
  });

  const handleReloadCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  return (
    <AuthWrapper>
      {pathname === '/signin/verifikasi4' ? (
        <Verifikasi4 />
      ) : pathname === '/signin' ? (
        <Box
          width='50vw'
          height='95%'
          sx={{
            bgcolor: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #D8D8D8',
          }}
        >
          <Box px='116px' py='45px'>
            <img
              src={CoofisLogo}
              style={{ maxHeight: '80px' }}
              alt='Coofis Logo'
            />

            <Typography
              pt='24px'
              variant='h1'
              style={{ fontSize: '24px', fontWeight: 700 }}
            >
              Masuk NDE Telkom
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <Box>
                <Typography
                  pt='24px'
                  variant='h6'
                  sx={{
                    textAlign: 'start',
                    color: '#303030',
                    fontSize: '14px',
                  }}
                >
                  Username
                </Typography>
                <TextField
                  sx={{ marginTop: '8px' }}
                  placeholder={'Masukan Username'}
                  name='email'
                  variant='outlined'
                  fullWidth
                  {...formik.getFieldProps('username')}
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
              <Box marginTop={'18px'}>
                <Typography
                  variant='h6'
                  sx={{
                    textAlign: 'start',
                    color: '#303030',
                    fontSize: '14px',
                  }}
                >
                  Password
                </Typography>
                <TextField
                  sx={{ marginTop: '8px' }}
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
              <Box sx={{ marginTop: '18px' }}>
                <Grid container noValidate autoComplete='off' columnSpacing={4}>
                  <Grid item xs={7}>
                    <TextField
                      fullWidth
                      id='outlined-basic'
                      name='captcha'
                      variant='outlined'
                      value={captcha}
                      disabled
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <Box
                              border={'1px solid #E0E0E0'}
                              height={'50px'}
                              sx={{
                                marginRight: '10px',
                              }}
                            ></Box>
                            <IconButton onClick={handleReloadCaptcha}>
                              <CachedIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiInputBase-input': {
                          textAlign: 'center',
                          height: '30px',
                        },
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
                        formik.touched.captchaValue &&
                        formik.errors.captchaValue
                      }
                      sx={{
                        '& .MuiInputBase-input': {
                          textAlign: 'center',
                          height: '30px',
                        },
                      }}
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
                  borderRadius: '10px',
                  width: '100%',
                  bgcolor: '#E42313',
                  marginTop: '18px',
                  height: '55px',
                }}
              >
                Masuk
              </Button>
              <Typography
                variant='h6'
                sx={{
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
                kami.
              </Typography>
            </form>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <Stack sx={style}>
                <img
                  src={ChecklistImage}
                  alt='ceklis'
                  style={{ maxHeight: '70px', maxWidth: '70px' }}
                />
                <Typography
                  variant='h1'
                  fontSize='30px'
                  fontWeight={600}
                  paddingTop='16px'
                >
                  Berhasil Masuk
                </Typography>
              </Stack>
            </Modal>

            <Typography
              variant='h6'
              sx={{
                color: '#A0A4A8',
                fontSize: '14px',
                marginTop: '60px',
              }}
            >
              Ⓒ PT ARM Solusi | version 1.0
            </Typography>
          </Box>
        </Box>
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

export default SigninJwtAuth;

// import React from 'react';
// import Button from '@mui/material/Button';
// import { Checkbox } from '@mui/material';
// import { Form, Formik } from 'formik';
// import * as yup from 'yup';

// import AppInfoView from '@crema/components/AppInfoView';
// import { Link, useNavigate } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import IntlMessages from '@crema/helpers/IntlMessages';
// import { useIntl } from 'react-intl';
// import AppTextField from '@crema/components/AppFormComponents/AppTextField';
// import { useAuthMethod } from '@crema/hooks/AuthHooks';
// import { Fonts } from '@crema/constants/AppEnums';
// import AuthWrapper from '../AuthWrapper';
// import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

// const validationSchema = yup.object({
//   username: yup
//     .string()
//     .required(
//       <>
//         <ErrorRoundedIcon style={{ marginRight: '8px', fontSize: 'medium' }} />{' '}
//         <IntlMessages id='Isi username anda' style={{ marginTop: '25px' }} />
//       </>,
//     ),
//   password: yup.string().required(
//     <>
//       <ErrorRoundedIcon style={{ marginRight: '8px', fontSize: 'medium' }} />{' '}
//       <IntlMessages id='Isi password anda' style={{ marginTop: '20px' }} />
//     </>,
//   ),
// });

// const SigninJwtAuth = () => {
//   const navigate = useNavigate();
//   const { signInUser } = useAuthMethod();
//   const onGoToForgetPassword = () => {
//     navigate('/forget-password', { tab: 'jwtAuth' });
//   };

//   const { messages } = useIntl();

//   return (
//     <AuthWrapper>
//       <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
//         <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', mb: 5 }}>
//           <Formik
//             validateOnChange={true}
//             initialValues={{
//               username: 'crema.demo@gmail.com',
//               password: 'Pass@1!@all',
//             }}
//             validationSchema={validationSchema}
//             onSubmit={(data, { setSubmitting }) => {
//               setSubmitting(true);
//               signInUser({
//                 username: data.username,
//                 password: data.password,
//               });
//               setSubmitting(false);
//             }}
//           >
//             {({ isSubmitting }) => (
//               <Form style={{ textAlign: 'left' }} noValidate autoComplete='off'>
//                 <Box sx={{ mb: { xs: 5, xl: 8 } }}>
//                   <AppTextField
//                     placeholder={messages['common.username']}
//                     name='username'
//                     label={<IntlMessages id='common.username' />}
//                     variant='outlined'
//                     sx={{
//                       width: '100%',
//                       '& .MuiInputBase-input': {
//                         fontSize: 14,
//                       },
//                     }}
//                   />
//                 </Box>

//                 <Box sx={{ mb: { xs: 3, xl: 4 } }}>
//                   <AppTextField
//                     type='password'
//                     placeholder={messages['common.password']}
//                     label={<IntlMessages id='common.password' />}
//                     name='password'
//                     variant='outlined'
//                     sx={{
//                       width: '100%',
//                       '& .MuiInputBase-input': {
//                         fontSize: 14,
//                       },
//                     }}
//                   />
//                 </Box>

//                 <Box
//                   sx={{
//                     mb: { xs: 3, xl: 4 },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       alignItems: 'center',
//                     }}
//                   >
//                     <Checkbox color='primary' sx={{ ml: -3 }} id='rememberMe' />
//                     <Box
//                       aria-labelledby='rememberMe'
//                       component='span'
//                       sx={{
//                         color: 'grey.700',
//                       }}
//                     >
//                       <IntlMessages id='common.rememberMe' />
//                     </Box>
//                   </Box>
//                   <Box
//                     component='span'
//                     sx={{
//                       color: (theme) => theme.palette.primary.main,
//                       fontWeight: Fonts.MEDIUM,
//                       cursor: 'pointer',
//                       display: 'block',
//                       textAlign: 'right',
//                     }}
//                     onClick={onGoToForgetPassword}
//                   >
//                     <IntlMessages id='common.forgetPassword' />
//                   </Box>
//                 </Box>

//                 <div>
//                   <Button
//                     variant='contained'
//                     color='primary'
//                     type='submit'
//                     disabled={isSubmitting}
//                     sx={{
//                       minWidth: 160,
//                       fontWeight: Fonts.REGULAR,
//                       fontSize: 16,
//                       textTransform: 'capitalize',
//                       padding: '4px 16px 8px',
//                     }}
//                   >
//                     <IntlMessages id='common.login' />
//                   </Button>
//                 </div>
//               </Form>
//             )}
//           </Formik>
//         </Box>

//         <Box
//           sx={{
//             color: 'grey.700',
//           }}
//         >
//           <span style={{ marginRight: 4 }}>
//             <IntlMessages id='common.dontHaveAccount' />
//           </span>
//           <Box
//             component='span'
//             sx={{
//               fontWeight: Fonts.MEDIUM,
//               '& a': {
//                 color: (theme) => theme.palette.primary.main,
//                 textDecoration: 'none',
//               },
//             }}
//           >
//             <Link to='/signup'>
//               <IntlMessages id='common.signup' />
//             </Link>
//           </Box>
//         </Box>

//         <AppInfoView />
//       </Box>
//     </AuthWrapper>
//   );
// };

// export default SigninJwtAuth;
