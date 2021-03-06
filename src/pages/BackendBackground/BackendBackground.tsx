import React from 'react';
import {
  Container,
  Typography,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import { BackendBackgroundIntroduction } from './components/Introduction';
import { BackendSkills } from './components/BackendSkills';

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

export const BackendBackground: React.SFC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="article">
      <Typography variant="h3" component="h1" className={classes.title}>
        My Backend Developer Background
      </Typography>
      <BackendBackgroundIntroduction />
      <BackendSkills />
    </Container>
  );
};
