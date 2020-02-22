import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { Introduction } from './components/Introduction';
import { Profiles } from './components/Profiles';
import { Projects } from './components/Projects';
import { ContentBlogs } from './components/content-blogs';
import { JobsTimeline } from './components/jobs-timeline';
import { Greetings } from './components/Greetings';

const useStyles = makeStyles(() => createStyles({}));

export const Homepage = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <>
      <Introduction />
      <Profiles />
      <Projects />
      <ContentBlogs />
      <JobsTimeline />
      <Greetings />
    </>
  );
};
