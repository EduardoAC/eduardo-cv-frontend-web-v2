import React from 'react';
import { Homepage } from '../page/Homepage';
import { MyProjects } from '../page/MyProjects/MyProjects';
import { About } from '../page/About';

export interface NavigationLink {
  title: string;
  to: string;
  component?: React.SFC;
}

export const NavigationLinks: NavigationLink[] = [
  {
    title: 'Home',
    to: '/',
    component: Homepage,
  },
  {
    title: 'About',
    to: '/about',
    component: About,
  },
  {
    title: 'My Projects',
    to: '/my-projects',
    component: MyProjects,
  },
  {
    title: 'My Experience',
    to: '',
  },
  {
    title: 'Contact',
    to: '',
  },
];
