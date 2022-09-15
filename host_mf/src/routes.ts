import React, { Suspense } from 'react';
import Home from 'home_mf/Home';
import Users from 'users_mf/Users';
import { LineStyle, Group } from '@mui/icons-material';

export type NavLink = {
  label: string;
  path: string;
  icon: any
}

export type Route = {
  path: string;
  element: React.FunctionComponent;
}


export const routes: Route[] = [
    {
      path: '/',
      element: Home
    },
    {
      path: '/users',
      element: Users,
    }
];
  
export const navLinks: NavLink[] = [
  {
      label: 'Home',
      path: '/',
      icon: LineStyle
  }, 
  {
      label: 'Users',
      path: '/users',
      icon: Group
  }
]