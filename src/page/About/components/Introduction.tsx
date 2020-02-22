import React from 'react';
import Image from 'material-ui-image';
import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Container,
  Grid,
  Link,
} from '@material-ui/core';
import AboutEduardoImg from '../../../../public/assets/images/about-eduardo-hacktheviual-1280.jpg';
import PhotoWorkingImg from '../../../../public/assets/images/photo-working.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      justifyContent: 'center',
      paddingBottom: '50px',
      [theme.breakpoints.up('sm')]: {
        justifyContent: 'start',
      },
    },
    paragraph: {
      marginBottom: '24px',
      textAlign: 'left',
    },
    fullWidth: {
      width: '100%',
    },
    sectionTitle: {
      margin: '24px 0',
    },
    introduction: {
      background: `linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
          linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
          linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
          linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
          linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
          linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);`,
      backgroundSize: '20px 20px',
    },
    section: {
      paddingTop: '50px',
      paddingBottom: '50px',
    },
  }),
);

export const Introduction = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <section className={classes.fullWidth}>
      <div className={classes.introduction}>
        <Container disableGutters>
          <Image src={AboutEduardoImg} aspectRatio={1.501} />
        </Container>
      </div>
      <Container className={classes.section}>
        <Typography variant="h3" component="h1" className={classes.title}>
          The Story of Eduardo Aparicio Cardenes
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={7}>
            <Typography
              variant="h5"
              component="p"
              className={classes.paragraph}
            >
              Hi! I'm Eduardo Aparicio Cardenes. I'm a Web Developer, Software
              architect and Entrepreneur.
            </Typography>
            <Typography
              variant="h5"
              component="p"
              className={classes.paragraph}
            >
              Currently, I'm co-founder of{' '}
              <Link color="inherit" href="http://www.innervirtuoso.com">
                Inner Virtuoso
              </Link>
              . Inner Virtuoso uses Global Incubator technology to create tailor
              made solutions that boost the development of human capital.
            </Typography>
            <Typography
              variant="h5"
              component="p"
              className={classes.paragraph}
            >
              And founder of{' '}
              <Link color="inherit" href="http://www.dreammakerfactory.com">
                Dream Maker Factory
              </Link>
              , takes ideas with potential and implement in successful products
              where I have three projects in my pipeline,{' '}
              <Link color="inherit" href="http://www.tuocio.org">
                TuOcio
              </Link>
              ,{' '}
              <Link color="inherit" href="http://www.trainerswod.com/">
                Trainer's WOD
              </Link>{' '}
              and{' '}
              <Link color="inherit" href="http://www.proyectoadoptame.es">
                Proyecto Adoptame
              </Link>
              .
            </Typography>
            <Typography
              variant="h5"
              component="p"
              className={classes.paragraph}
            >
              When I'm not doing those things, I'm working for companies as a
              web developer or software architect. I'm always happy to join to
              your projects and make it happens.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Image src={PhotoWorkingImg} aspectRatio={1.501} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
