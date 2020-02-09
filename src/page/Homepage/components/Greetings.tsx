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
import FindingTheSecretsImg from '../../../../public/assets/images/finding-the-secrets.jpg';

const useStyles = makeStyles(() =>
  createStyles({
    projects: {
      padding: '50px 0',
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
export const Greetings = (): React.ReactElement => {
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
            Thanks for reading my interactive curriculum
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={5}>
              <Image src={FindingTheSecretsImg} aspectRatio={1.501} />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography
                variant="h5"
                component="p"
                className={classes.paragraph}
              >
                I'm passionate about technology, buisness and personal growing
                so I wanted to contribute to internet sharing
              </Typography>
              <Typography
                variant="h5"
                component="p"
                className={classes.paragraph}
              >
                I hope you like it. Discover more in each page some of them have
                amazing secrets. As my frontend career is done in Angular and
                NodeJs
              </Typography>
              <Typography
                variant="h5"
                component="p"
                className={classes.paragraph}
              >
                Are you ready to discover all of them? Then go to{' '}
                <Link
                  component={LinkReactRouter}
                  color="inherit"
                  to="/homepage"
                >
                  how did i build my intereactive CV
                </Link>
              </Typography>
              <Typography
                variant="h5"
                component="p"
                className={classes.paragraph}
              >
                Do you want to hire me or give me some feedback? You can{' '}
                <Link
                  color="inherit"
                  href="mailto:eduardo@dreammakerfactory.com"
                >
                  contact me by email
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </section>
      </Container>
    </section>
  );
};
