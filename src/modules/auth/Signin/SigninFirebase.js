import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import IconButton from '@mui/material/IconButton';
import AppInfoView from '@crema/components/AppInfoView';
import { useAuthMethod } from '@crema/hooks/AuthHooks';
import { Fonts } from '@crema/constants/AppEnums';
import AuthWrapper from '../AuthWrapper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import generateCaptcha from './captcha';
import CachedIcon from '@mui/icons-material/Cached';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import { Box, TextField, Button } from '@mui/material';

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
  const { logInWithEmailAndPassword } = useAuthMethod();
  // const { logInWithEmailAndPassword, logInWithPopup } = useAuthMethod();
  // const navigate = useNavigate();
  // const onGoToForgetPassword = () => {
  //   navigate('/forget-password', { tab: 'firebase' });
  // };
  const { messages } = useIntl();

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputValue, setInputValue] = useState('');
  // const [verification, setVerification] = useState(false);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  // const handleSubmit = () => {
  //   if (inputValue === captcha) {
  //     alert('Captcha input is correct!');
  //     setVerification(true);
  //   } else {
  //     alert('Captcha input is incorrect. Please try again.');
  //     setCaptcha(generateCaptcha());
  //     setInputValue('');
  //   }
  // };
  const handleReloadCaptcha = () => {
    setCaptcha(generateCaptcha());
    setInputValue('');
    // setVerification(false);
  };

  return (
    <AuthWrapper>
      <Box>
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
                  // placeholder={messages['common.email']}
                  // label={<IntlMessages id='common.email' />}
                  name='email'
                  variant='outlined'
                  sx={{
                    width: '100%',
                    '& .MuiInputBase-input': {
                      fontSize: 14,
                    },
                  }}
                />
              </Box>

              <Box sx={{ mb: { xs: 3, xl: 4 } }}>
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
                  type={showPassword ? 'text' : 'password'}
                  placeholder={messages['common.password']}
                  name='password'
                  variant='outlined'
                  InputProps={{
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
                type='submit'
                disabled={isSubmitting}
                sx={{
                  fontWeight: Fonts.REGULAR,
                  fontSize: 16,
                  textTransform: 'capitalize',
                  borderRadius: '20px',
                  width: '100%',
                }}
              >
                <IntlMessages id='common.login' />
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

      <AppInfoView />
    </AuthWrapper>
  );
};

export default SigninFirebase;
