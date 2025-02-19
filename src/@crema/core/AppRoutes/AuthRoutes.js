import React from 'react';

const Landing_page = React.lazy(() => import('modules/landing page'));
const Signin = React.lazy(() => import('../../../modules/auth/Signin'));
const Signup = React.lazy(() => import('../../../modules/auth/Signup'));
const ForgotPassword = React.lazy(() =>
  import('../../../modules/auth/ForgetPassword'),
);
const ConfirmSignupAwsCognito = React.lazy(() =>
  import('../../../modules/auth/Signup/ConfirmSignupAwsCognito'),
);
const ResetPasswordAwsCognito = React.lazy(() =>
  import('../../../modules/auth/ForgetPassword/ResetPasswordAwsCognito'),
);
export const authRouteConfig = [
  {
    path: '/landingpage',
    element: <Landing_page />,
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/forget-password',
    element: <ForgotPassword />,
  },
  {
    path: '/confirm-signup',
    element: <ConfirmSignupAwsCognito />,
  },
  {
    path: '/reset-password',
    element: <ResetPasswordAwsCognito />,
  },
  {
    path: '/signin/verifikasi1',
    element: <Signin />,
  },
  {
    path: '/signin/verifikasi2',
    element: <Signin />,
  },
  {
    path: '/signin/verifikasi3',
    element: <Signin />,
  },
  {
    path: '/signin/verifikasi4',
    element: <Signin />,
  },
  {
    path: '/signin/verifikasi5',
    element: <Signin />,
  },
];
