import React from 'react';
import {
  Card,
  CardMedia,
  makeStyles,
  createStyles,
  CardContent,
} from '@material-ui/core';
import Image from '../../../public/assets/images/introduction-image-1280.jpg';

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      position: 'relative',
    },
    media: {
      height: '400px',
    },
    content: {
      background: 'rgba(0, 0, 0, 0.2)',
      position: 'absolute',
      overflow: 'hidden',
      display: 'block',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      width: '95%',
      height: '80%',
      margin: 'auto',
      padding: '30px 0',
      maxWidth: '950px',
      maxHeight: '315px',
    },
  }),
);

export const Homepage = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          image={Image}
          title="Introduction developer"
          className={classes.media}
          component="img"
        />
        <CardContent className={classes.content}>
          <h1>
            Welcome to my interactive curriculum My name is Eduardo Aparicio
            Cardenes
          </h1>
          <p>One place that define my worker soul and share with you</p>
        </CardContent>
      </Card>
    </>
  );
};
