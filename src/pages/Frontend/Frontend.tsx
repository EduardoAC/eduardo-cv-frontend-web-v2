import React from 'react';
import {
  Container,
  Typography,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import { FrontendIntroduction } from './components/Introduction';
import { FrontendSkills } from './components/FrontendSkills';

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

export const Frontend: React.SFC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="article">
      <Typography variant="h3" component="h1" className={classes.title}>
        My Frontend Developer Background
      </Typography>
      <FrontendIntroduction />
      <FrontendSkills />
    </Container>
  );
};
