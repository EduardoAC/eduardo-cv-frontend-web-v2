import React from 'react';
import {
  Typography,
  makeStyles,
  Link,
  createStyles,
  Box,
} from '@material-ui/core';
import { Link as LinkReactRouter } from 'react-router-dom';

const useStyles = makeStyles(() =>
  createStyles({
    paragraph: {
      marginBottom: '24px',
      textAlign: 'justify',
    },
  }),
);

export const FrontendIntroduction = () => {
  const classes = useStyles();
  return (
    <Box component="section">
      <Typography variant="h5" component="p" className={classes.paragraph}>
        My first steps on Internet started as freelance web developer creating
        websites for companies that involves four main skills HTML, CSS,
        JAVASCRIPT and PHP in my case. However Internet technologies have being
        growing in complexity since I did my first websites at begining of 2011.
        As a informatic engineer I knew the importance to specialize to be the
        best in your area.
      </Typography>
      <Typography variant="h5" component="p" className={classes.paragraph}>
        That's why I decided to focus more my profesional career next steps in
        this wonderful discipline without forget my past. Therefore, to my
        current knowledge growing as frontend developer I want to high line my
        extensive experience as{' '}
        <Link
          component={LinkReactRouter}
          color="inherit"
          underline="always"
          to="/software-architect"
        >
          Software architect
        </Link>{' '}
        and{' '}
        <Link
          component={LinkReactRouter}
          color="inherit"
          underline="always"
          to="/backend-background"
        >
          Backend developer
        </Link>{' '}
        as a complement of my skills that allow me to deeply aware for the
        global vision of the designs and comunicate effectively with other
        teams.
      </Typography>
      <Typography variant="h5" component="p" className={classes.paragraph}>
        Currently, I'm developing my knowledge in this area, in specific in
        <strong>
          AngularJS, SVG, performance and testing with frameworks as Jasmine.
        </strong>
        What are my strengths as a frontend developer?
      </Typography>
    </Box>
  );
};
