import React from 'react';
import { MyWorkTimeline } from '@pages/MyWorkTimeline';
import { Homepage } from '@pages/Homepage';
import { MyProjects } from '@pages/MyProjects/MyProjects';
import { About } from '@pages/About';

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
    to: '/my-work-timeline',
    component: MyWorkTimeline,
  },
  {
    title: 'Contact',
    to: '',
  },
];
