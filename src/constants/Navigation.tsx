import React from 'react';
import { MyWorkTimeline } from '@pages/MyWorkTimeline';
import { Homepage } from '@pages/Homepage';
import { MyProjects } from '@pages/MyProjects/MyProjects';
import { Frontend } from '@pages/Frontend';
import { About } from '@pages/About';

export interface NavigationLink {
  id: string;
  title: string;
  to: string;
  component?: React.SFC;
}

export const NavigationRoutes: NavigationLink[] = [
  {
    id: 'homepage',
    title: 'Home',
    to: '/',
    component: Homepage,
  },
  {
    id: 'about',
    title: 'About',
    to: '/about',
    component: About,
  },
  {
    id: 'my-projects',
    title: 'My Projects',
    to: '/my-projects',
    component: MyProjects,
  },
  {
    id: 'my-experience',
    title: 'My Experience',
    to: '/my-work-timeline',
    component: MyWorkTimeline,
  },
  {
    id: 'contact',
    title: 'Contact',
    to: '',
  },
  {
    id: 'frontend',
    title: 'Frontend',
    to: '/frontend-background',
    component: Frontend,
  },
];

const navigationMenuLinks = [
  'homepage',
  'about',
  'my-projects',
  'my-experience',
  'contact',
];
export const NavigationLinks: NavigationLink[] = NavigationRoutes.filter(
  ({ id }) => navigationMenuLinks.includes(id),
);
