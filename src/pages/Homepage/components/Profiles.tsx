import React from 'react';
import {
  makeStyles,
  createStyles,
  Container,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';
import { Link as LinkReactRouter } from 'react-router-dom';
import Image from 'material-ui-image';
import FrontendDeveloperImg from '../../../../public/assets/images/frontend-developer.png';
import SoftwareArchitectImg from '../../../../public/assets/images/software-architect.png';
import BackendDeveloperImg from '../../../../public/assets/images/backend-developer.png';

const useStyles = makeStyles(() =>
  createStyles({
    software_architect: {
      padding: '75px 0',
    },
    profiles: {
      padding: '50px 0',
    },
    sectionTitle: {
      margin: '24px 0',
    },
    paragraph: {
      marginBottom: '24px',
    },
  }),
);

export const Profiles = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <Container component="section">
      <section className="container clearfix profiles">
        <Typography
          variant="h3"
          component="h2"
          className={classes.sectionTitle}
        >
          My Background
        </Typography>
        <Typography variant="h5" component="p" className={classes.paragraph}>
          Since I started with my engineer in computer science. I'm always been
          curious about many subjects in specific all of things related as
          Artificial Intelligence until I discovered the web technologies that
          allow you to become real any ideas or business.
        </Typography>
        <Typography variant="h5" component="p" className={classes.paragraph}>
          A whole life of passion for software developments (creations,
          projects, dreams, hobbies, hackathons, ...), It was hard to summarize
          in a four pages CV as usual is required.
        </Typography>
        <Typography variant="h5" component="p" className={classes.paragraph}>
          I decided to group it in these three main categories
        </Typography>
        <Grid container spacing={3} className={classes.profiles}>
          <Grid item xs={12} sm={4}>
            <div className={classes.software_architect}>
              <Link
                component={LinkReactRouter}
                color="inherit"
                to="/frontend-background"
              >
                <Image src={FrontendDeveloperImg} />
                <Typography variant="h5" component="span">
                  Frontend Developer
                </Typography>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <Link
                component={LinkReactRouter}
                color="inherit"
                to="/software-architect-background"
              >
                <Image src={SoftwareArchitectImg} />
                <Typography variant="h5" component="span">
                  Software Architect
                </Typography>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.software_architect}>
              <Link component={LinkReactRouter} color="inherit" to="/homepage">
                <Image src={BackendDeveloperImg} />
                <Typography variant="h5" component="span">
                  Backend Developer
                </Typography>
              </Link>
            </div>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};
