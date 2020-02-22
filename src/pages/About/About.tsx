import React from 'react';
import { Aspirations } from './components/Aspirations';
import { CareerRoots } from './components/CareerRoots';
import { Introduction } from './components/Introduction';

export const About = (): React.ReactElement => (
  <>
    <Introduction />
    <CareerRoots />
    <Aspirations />
  </>
);
