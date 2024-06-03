import React from 'react';
import { RoutePermittedRole } from '../../constants/AppEnums';
import Landing_page from 'modules/landing page';

const Page = React.lazy(() => import('../../../modules'));

export const coofisPagesConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/coofis',
    element: <Page />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/LandingPage',
    element: <Landing_page />,
  },
];
