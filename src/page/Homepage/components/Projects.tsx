import React from 'react';
import Image from 'material-ui-image';
import { Link as LinkReactRouter } from 'react-router-dom';
import {
  Link,
  makeStyles,
  createStyles,
  Typography,
  Container,
  Grid,
} from '@material-ui/core';
import CodeProjectsDoneImg from '../../../../public/assets/images/code-projects-done.jpg';

const useStyles = makeStyles(() =>
  createStyles({
    projects: {
      padding: '50px 0',
      background: `linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
      linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
      linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
      linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
      linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
      linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);`,
      backgroundSize: '20px 20px',
      width: '100%',
    },
    sectionTitle: {
      margin: '24px 0',
    },
    paragraph: {
      marginBottom: '24px',
    },
  }),
);
export const Projects = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <section className={classes.projects}>
      <Container className="container">
        <Typography
          variant="h3"
          component="h2"
          className={classes.sectionTitle}
        >
          Some of my projects
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <Typography
              variant="h5"
              component="p"
              className={classes.paragraph}
            >
              As part of this project that try to catch new employers and
              clients attention to open the door to new work opportunities.
            </Typography>
            <Typography
              variant="h5"
              component="p"
              className={classes.paragraph}
            >
              I upload all{' '}
              <Link component={LinkReactRouter} color="inherit" to="/homepage">
                my projects here that include hackathons, work and personal
                ideas
              </Link>
            </Typography>
            <Typography
              variant="h5"
              component="p"
              className={classes.paragraph}
            >
              Please self yourself to enter and take a look
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link component={LinkReactRouter} color="inherit" to="/homepage">
              <Image src={CodeProjectsDoneImg} aspectRatio={1.501} />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
