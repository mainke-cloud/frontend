import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import {
  Checkbox,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import LogoCoofis from '../../../assets/coofis.png';
import AppInfoView from '@crema/components/AppInfoView';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import { useAuthMethod } from '@crema/hooks/AuthHooks';
import { Fonts } from '@crema/constants/AppEnums';
import { Link } from 'react-router-dom';
import AuthWrapper from '../AuthWrapper';
import generateCaptcha from '../Signin/captcha';
import CachedIcon from '@mui/icons-material/Cached';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';

const isCaptchaValid = (captchaValue, captcha) => {
  return captchaValue === captcha;
};

const validationSchema = yup.object({
  name: yup.string().required(<IntlMessages id='validation.nameRequired' />),
  email: yup
    .string()
    .email(<IntlMessages id='validation.emailFormat' />)
    .required(<IntlMessages id='validation.emailRequired' />),
  password: yup
    .string()
    .required(<IntlMessages id='validation.passwordRequired' />),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password tidak sesuai') // validasi untuk membandingkan dengan password
    .required('Masukan ulang password harus diisi'),
  phoneNumber: yup
    .string()
    .required(<IntlMessages id='validation.phoneNumberRequired' />),
  companyName: yup
    .string()
    .required(<IntlMessages id='Please enter company name!' />),
  captchaValue: yup
    .string()
});

const SignupJwtAuth = () => {
  const { signUpUser } = useAuthMethod();
  const [captcha, setCaptcha] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

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
      <Stack
        width='50vw'
        height='95%'
        overflow={'auto'}
        sx={{
          bgcolor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #D8D8D8',
          padding: '10px 100px 0px 100px',
        }}
      >
        <Stack sx={{ width: '100%', height: '100%' }}>
          <img
            src={LogoCoofis}
            width={'119px'}
            height={'80px'}
            alt='Coofis Logo'
          />
          <Typography fontSize={'24px'} fontWeight={700} paddingBottom={'24px'}>
            Daftar
          </Typography>
          <Formik
            validateOnChange={true}
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
              phoneNumber: '',
              companyName: '',
              captchaValue: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting }) => {
              setSubmitting(true);
              if (isCaptchaValid(data.captchaValue, captcha)) {
                console.log(data);
                signUpUser({
                  email: data.email,
                  password: data.password,
                  name: data.name,
                  phoneNumber: data.phoneNumber,
                  companyName: data.companyName,
                });
              } else {
                console.log('Captcha tidak valid');
              }
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, errors }) => (
              <Form
                style={{ textAlign: 'left', paddingBottom: 20 }}
                noValidate
                autoComplete='off'
              >
                <Box sx={{ mb: { xs: 4, xl: 5 } }}>
                  <Typography
                    pt='5px'
                    variant='h6'
                    sx={{
                      textAlign: 'start',
                      color: '#303030',
                      fontSize: '14px',
                    }}
                  >
                    Nama Lengkap
                  </Typography>
                  <AppTextField
                    placeholder='Masukan Nama Lengkap'
                    name='name'
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
                          <PersonOutlineOutlinedIcon sx={{ color: 'black' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                {/* Alamat Email */}
                <Box sx={{ mb: { xs: 4, xl: 5 } }}>
                  <Typography
                    pt='5px'
                    variant='h6'
                    sx={{
                      textAlign: 'start',
                      color: '#303030',
                      fontSize: '14px',
                    }}
                  >
                    Alamat Email
                  </Typography>
                  <AppTextField
                    placeholder='Masukan Email'
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
                          <MailOutlineIcon sx={{ color: 'black' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                {/* Password */}
                <Box sx={{ mb: { xs: 4, xl: 5 } }}>
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
                  <AppTextField
                    placeholder='Masukan Password'
                    name='password'
                    type='password'
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
                          <LockOutlinedIcon sx={{ color: 'black' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                {/* Masukan Ulang Password */}
                <Box sx={{ mb: { xs: 4, xl: 5 } }}>
                  <Typography
                    variant='h6'
                    sx={{
                      textAlign: 'start',
                      color: '#303030',
                      fontSize: '14px',
                    }}
                  >
                    Masukan Ulang Password
                  </Typography>
                  <AppTextField
                    placeholder='Masukan Ulang Password'
                    name='confirmPassword'
                    type='password'
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
                          <LockOutlinedIcon sx={{ color: 'black' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                {/* No Telepon */}
                <Box sx={{ mb: { xs: 4, xl: 5 } }}>
                  <Typography
                    pt='5px'
                    variant='h6'
                    sx={{
                      textAlign: 'start',
                      color: '#303030',
                      fontSize: '14px',
                    }}
                  >
                    No Telepon
                  </Typography>
                  <AppTextField
                    placeholder='Masukan Nomer Telepon'
                    name='phoneNumber'
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
                          <CallOutlinedIcon sx={{ color: 'black' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                {/* Nama Perusahaan */}
                <Box sx={{ mb: { xs: 4, xl: 5 } }}>
                  <Typography
                    pt='5px'
                    variant='h6'
                    sx={{
                      textAlign: 'start',
                      color: '#303030',
                      fontSize: '14px',
                    }}
                  >
                    Nama Perusahaan
                  </Typography>
                  <AppTextField
                    placeholder='Masukan Nama Perusahaan'
                    name='companyName'
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
                          <CorporateFareOutlinedIcon sx={{ color: 'black' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                {/* Captcha */}
                <Stack direction={'row'} gap={'20px'}>
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
                  <AppTextField
                    id='filled-basic'
                    placeholder='Ketik Captcha disamping'
                    name='captchaValue'
                    variant='outlined'
                    fullWidth
                    sx={{
                      '& .MuiInputBase-input': {
                        textAlign: 'center',
                        height: '30px',
                      },
                    }}
                  />
                </Stack>

                {/* Checkbox Persetujuan */}
                <Stack direction={'row'} alignItems='center' sx={{ mt: 2 }}>
                  <Checkbox
                    id='agreeCheckbox'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <Typography>
                    {' '}
                    Saya telah membaca dan menyetujui{' '}
                    <Link
                      to='/signup'
                      sx={{ color: 'blue', textDecoration: 'underline' }}
                    >
                      Ketentuan Penggunaan
                    </Link>{' '}
                    kami.
                  </Typography>
                </Stack>

                {/* Tombol Daftar */}
                <div>
                  <Button
                    variant='contained'
                    color='primary'
                    // disabled={isSubmitting || !isChecked || Object.keys(errors).length > 0} // menonaktifkan tombol jika sedang submit, checkbox tidak dicentang, atau ada error validasi
                    sx={{
                      minWidth: 160,
                      fontWeight: Fonts.REGULAR,
                      fontSize: 16,
                      textTransform: 'capitalize',
                      padding: '4px 16px 8px',
                    }}
                    type='submit'
                    fullWidth
                  >
                    Daftar
                  </Button>
                </div>

                {/* Informasi versi */}
                <Typography
                  variant='h6'
                  sx={{
                    color: '#A0A4A8',
                    fontSize: '14px',
                    marginTop: '20px',
                  }}
                >
                  Ⓒ PT ARM Solusi | version 1.0
                </Typography>
              </Form>
            )}
          </Formik>
        </Stack>
      </Stack>
    </AuthWrapper>
  );
};

export default SignupJwtAuth;
