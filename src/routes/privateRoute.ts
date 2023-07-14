import { lazy } from 'react';

export const privateRoute = [
  {
    exact: true,
    path: '/dashboard/profile',
    component: lazy(() => import('../pages/userPages/profile')),
    name: 'Profile',
  },
  {
    exact: true,
    path: '/dashboard/settings',
    component: lazy(() => import('../pages/userPages/settings')),
    name: 'Settings',
  },
  {
    redirectRoute: true,
    name: 'Profile',
    path: '/dashboard/profile',
  },
];
