import React from 'react';
import {
  Typography,
  Container,
  makeStyles,
  Theme,
  createStyles,
  Link,
} from '@material-ui/core';

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

export const MyWorkTimelineIntroduction: React.SFC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="article">
      <Typography variant="h3" component="h1" className={classes.title}>
        My Work Experience
      </Typography>
      <section className={classes.section}>
        <Typography variant="h5" component="p" className={classes.paragraph}>
          I've been working as web developer for almost five years switched from
          a software engineer job because I found more attractive for my
          professional career. Therefore, in this page you will find the big
          picture of my evolution as a web developer, where I decided to include
          my principal studies that put me away for a long period of time for
          work world in order to develop better my skills.
        </Typography>
        <Typography variant="h5" component="p" className={classes.paragraph}>
          Essentially, in these years I learned how to build and develop
          platforms where I acquired backend and frontend knowledge to do more
          effective my job in these companies. However, my team managers decided
          in a intuitive way always to assign me more tasks related with
          frontend in the last three years. It's probably then when I discovered
          that I really enjoyed doing this work.
        </Typography>
        <Typography variant="h5" component="p" className={classes.paragraph}>
          Currently{' '}
          <strong>
            I decided that I want to become a successful frontend engineer
          </strong>
          , I feel that it's my true vocation bring alive the amazing design
          comming from the designers so please scroll down to see my evolution
          across my work timeline .
        </Typography>
      </section>
    </Container>
  );
};
