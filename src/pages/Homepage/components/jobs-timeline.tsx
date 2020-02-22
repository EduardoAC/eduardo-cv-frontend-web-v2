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
import JobTimelineImg from '../../../../public/assets/images/jobs-timeline.jpg';

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
      textAlign: 'left',
    },
  }),
);
export const JobsTimeline = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <section className={classes.projects}>
      <Container className="container">
        <section className="container clearfix content-blogs">
          <Typography
            variant="h3"
            component="h2"
            className={classes.sectionTitle}
          >
            My Career Timeline
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <Typography
                variant="h5"
                component="p"
                className={classes.paragraph}
              >
                Finally I created to have a deeper idea what it's{' '}
                <Link
                  component={LinkReactRouter}
                  color="inherit"
                  to="/my-work-timeline"
                >
                  my work expirence
                </Link>
                , I collected all job timeline
              </Typography>
              <Typography
                variant="h5"
                component="p"
                className={classes.paragraph}
              >
                where you can see my career evolution since I was a child to
                what I'm currently doing
              </Typography>
              <Typography
                variant="h5"
                component="p"
                className={classes.paragraph}
              >
                It will include personal projects, jobs, hackathons so you will
                get idea where I spend my professional and personal time to
                develop my skills
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Image src={JobTimelineImg} aspectRatio={1.501} />
            </Grid>
          </Grid>
        </section>
      </Container>
    </section>
  );
};
