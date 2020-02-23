import {
  Link,
  Typography,
  Container,
  Grid,
  List,
  ListItem,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import { Link as LinkReactRouter } from 'react-router-dom';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    footer: {
      padding: '50px 0',
    },
  }),
);

export const Footer: React.SFC<{}> = () => {
  const classes = useStyles();
  return (
    <footer className={`${classes.footer} MuiAppBar-colorDefault`}>
      <Container component="div">
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" component="h2">
              Navigation
            </Typography>
            <List>
              <ListItem disableGutters>
                <Link
                  component={LinkReactRouter}
                  color="inherit"
                  to="/homepage"
                >
                  Business And Technology blog
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link
                  component={LinkReactRouter}
                  color="inherit"
                  to="/homepage"
                >
                  The brainstorming forum
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link
                  component={LinkReactRouter}
                  color="inherit"
                  to="/about-me"
                >
                  About me
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link
                  component={LinkReactRouter}
                  color="inherit"
                  to="/homepage"
                >
                  Contact
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" component="h2">
              My background
            </Typography>
            <List>
              <ListItem disableGutters>
                <Link
                  component={LinkReactRouter}
                  color="inherit"
                  to="/frontend-background"
                >
                  As frontend developer
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link
                  component={LinkReactRouter}
                  color="inherit"
                  to="/software-architect-background"
                >
                  As software architect
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link
                  component={LinkReactRouter}
                  color="inherit"
                  to="/backend-background"
                >
                  As backend developer
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link
                  component={LinkReactRouter}
                  color="inherit"
                  to="/homepage"
                >
                  My work experience
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link
                  component={LinkReactRouter}
                  color="inherit"
                  to="/homepage"
                >
                  Projects, hackathons and ideas
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" component="h2">
              Useful links
            </Typography>
            <List>
              <ListItem disableGutters>
                <Link
                  color="inherit"
                  href="https://github.com/EduardoAC"
                  target="blank"
                >
                  Check me out on GitHub
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link
                  color="inherit"
                  href="http://www.tuocio.org"
                  target="blank"
                >
                  TuOcio - Tools for event organizer
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link
                  color="inherit"
                  href="http://www.dreammakerfactory.com"
                  target="blank"
                >
                  Dream Maker Factory
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <hr />
        <div className="container footer-label">
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link
              color="inherit"
              href="https://eduardo-aparicio.cardenes.website/"
            >
              Eduardo Aparicio Cardenes - Proyectonline
            </Link>{' '}
            {new Date().getFullYear()}.
          </Typography>
        </div>
      </Container>
    </footer>
  );
};
