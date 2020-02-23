import React from 'react';
import { MyWorkTimeline } from '@pages/MyWorkTimeline';
import { Homepage } from '@pages/Homepage';
import { MyProjects } from '@pages/MyProjects/MyProjects';
import { Frontend } from '@pages/Frontend';
import { SoftwareArchitect } from '@pages/SoftwareArchitect';
import { About } from '@pages/About';
import { BackendBackground } from '@pages/BackendBackground';
import { Contact } from '@pages/Contact';

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
    to: '/about-me',
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
    id: 'contact-or-hire-me',
    title: 'Contact',
    to: '/contact-or-hire-me',
    component: Contact,
  },
  {
    id: 'frontend',
    title: 'Frontend',
    to: '/frontend-background',
    component: Frontend,
  },
  {
    id: 'software-architect',
    title: 'SoftwareArchitect',
    to: '/software-architect-background',
    component: SoftwareArchitect,
  },
  {
    id: 'backend-background',
    title: 'BackendBackground',
    to: '/backend-background',
    component: BackendBackground,
  },
];

const navigationMenuLinks = [
  'homepage',
  'about',
  'my-projects',
  'my-experience',
  'contact-or-hire-me',
];
export const NavigationLinks: NavigationLink[] = NavigationRoutes.filter(
  ({ id }) => navigationMenuLinks.includes(id),
);
