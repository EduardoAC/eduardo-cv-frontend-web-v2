import React from 'react';
import {
  Typography,
  Container,
  makeStyles,
  Theme,
  createStyles,
  Link,
  Button,
} from '@material-ui/core';
import { MyProjectsIntroduction } from './components/introduction';

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
      textAlign: 'justify',
    },
    fullWidth: {
      width: '100%',
    },
    sectionTitle: {
      margin: '24px 0',
    },
    section: {
      paddingTop: '50px',
      paddingBottom: '50px',
    },
    labelButton: {
      margin: theme.spacing(1),
    },
  }),
);

export const MyProjects: React.SFC<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <MyProjectsIntroduction />
      <Container component="section">
        <Typography
          variant="h4"
          component="h3"
          className={classes.sectionTitle}
        >
          Projects
        </Typography>
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.labelButton}
          >
            business or charity
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.labelButton}
          >
            hackathons or events
          </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.labelButton}
          >
            ideas under consideration
          </Button>
        </div>
      </Container>

      <section className="collection-projects" />
      <Container component="section">
        <h2>Final Considerations</h2>
        <Typography variant="h5" component="p" className={classes.paragraph}>
          All these projects you can see above are only a part of the content.
          Currently, I've been in several hackathons and event accross 3
          countries and two continents. I develop dozens of ideas and
          implemented 5 of them.
        </Typography>
        <Typography variant="h5" component="p" className={classes.paragraph}>
          However, I admit it's take time to put all together after a decade of
          work and dedication from my spare time in a unique place but no
          worries, I will be happy to talk about anytime and I will be adding
          content slowly but constant because I love it.
        </Typography>
        <Typography variant="h5" component="p" className={classes.paragraph}>
          Often I hear about people to tell me that I must start my own business
          and I will but currently I love to help another people to achieve them
          goal learning a lot of things from them. I guess I want to learn from
          you if you give me the chance.
        </Typography>
      </Container>
    </>
  );
};
