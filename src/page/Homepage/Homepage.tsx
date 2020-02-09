import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { Introduction } from './components/Introduction';
import { Profiles } from './components/Profiles';
import { Projects } from './components/Projects';

const useStyles = makeStyles(() => createStyles({}));

export const Homepage = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <>
      <Introduction />
      <Profiles />
      <Projects />
    </>
  );
};
