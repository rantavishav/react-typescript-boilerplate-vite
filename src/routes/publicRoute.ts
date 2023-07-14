import { lazy } from 'react';

export const publicRoute = [
  {
    exact: true,
    path: '/',
    component: lazy(() => import('../pages/guestPages/home')),
    name: 'Home',
  },
  {
    exact: true,
    path: '/login',
    component: lazy(() => import('../pages/guestPages/login')),
    name: 'Login',
  },
  {
    redirectRoute: true,
    name: 'Login',
    path: '/login',
  },
];
