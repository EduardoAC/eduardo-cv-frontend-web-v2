import React from 'react';
import {
  Container,
  Typography,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import { SoftwareArchitectIntroduction } from './components/Introduction';
import { SoftwareArchitectSkills } from './components/SoftwareArchitectSkills';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      justifyContent: 'center',
      paddingTop: '50px',
      paddingBottom: '50px',
      [theme.breakpoints.up('sm')]: {
        justifyContent: 'start',
      },
    },
  }),
);

export const SoftwareArchitect: React.SFC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="article">
      <Typography variant="h3" component="h1" className={classes.title}>
        My SoftwareArchitect Developer Background
      </Typography>
      <SoftwareArchitectIntroduction />
      <SoftwareArchitectSkills />
    </Container>
  );
};
