import { lazy } from 'react';

export const guestRoutes = [
  {
    exact: true,
    path: '/',
    name: 'Login',
    component: lazy(() => import('../pages/guestPages/login')),
  },

  {
    redirectRoute: true,
    name: 'Login',
    path: '/',
  },
];

export const userRoutes = [
  {
    exact: true,
    path: '/',
    name: 'Dashboard',
    component: lazy(() => import('../pages/userPages/dashboard')),
  },

  {
    redirectRoute: true,
    name: 'Profile',
    path: '/',
  },
];
