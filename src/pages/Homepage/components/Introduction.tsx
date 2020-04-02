import React from 'react';
import {
  Card,
  CardMedia,
  makeStyles,
  createStyles,
  CardContent,
  Theme,
  Typography,
  Container,
} from '@material-ui/core';
import IntroductionImg from '../../../../public/assets/images/introduction-image-1280.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    introduction: {
      background: `linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
        linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
        linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
        linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
        linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
        linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);`,
      backgroundSize: '20px 20px',
      width: '100%',
    },
    card: {
      position: 'relative',
    },
    media: {
      height: 'auto',
    },
    titleContent: {
      padding: 0,
      margin: 0,
      marginBottom: theme.spacing(2),
      fontSize: '32px',
      [theme.breakpoints.up('sm')]: {
        fontSize: '48px',
      },
    },
    content: {
      background: 'rgba(0, 0, 0, 0.2)',
      position: 'absolute',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      width: '95%',
      height: '85%',
      margin: 'auto',
      [theme.breakpoints.up('sm')]: {
        padding: '30px 0',
        width: '90%',
        height: '65%',
      },
      [theme.breakpoints.up('md')]: {
        padding: '30px 0',
        width: '950px',
        height: '315px',
      },
    },
    title: {
      justifyContent: 'center',
      [theme.breakpoints.up('sm')]: {
        justifyContent: 'start',
      },
    },
    hiddenXS: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
  }),
);

export const Introduction = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <section className={classes.introduction}>
      <Container disableGutters>
        <Card className={classes.card}>
          <CardMedia
            image={IntroductionImg}
            title="Introduction developer"
            className={classes.media}
            component="img"
          />
          <CardContent className={classes.content}>
            <Typography variant="h3" component="h1" className={classes.title}>
              <p className={classes.titleContent}>
                Welcome to my interactive curriculum
              </p>
              <p className={classes.titleContent}>
                My name is Eduardo Aparicio Cardenes
              </p>
            </Typography>
            <Typography variant="h4" component="p" className={classes.hiddenXS}>
              One place that define my worker soul and share with you
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};
