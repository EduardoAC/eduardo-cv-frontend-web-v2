import React from 'react';
import { Typography, makeStyles, createStyles, Box } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    paragraph: {
      marginBottom: '24px',
      textAlign: 'justify',
    },
  }),
);

export const SoftwareArchitectIntroduction = () => {
  const classes = useStyles();
  return (
    <Box component="section">
      <Typography variant="h5" component="p" className={classes.paragraph}>
        I'm a certified Informatic Engineer that have been trained ready to
        build technical software and hardware architectures that I loved the
        very beginning dreaming to build the best PC ever imagine from the
        hardware to the software that will extract all the potential.
      </Typography>
      <Typography variant="h5" component="p" className={classes.paragraph}>
        However, I realised soon that this goal is a team effort, it's
        impossible to achieve it on your own in a lifespawn, so I decided to
        focus in a more realistic approach to become a really good Software
        architect that deliver high quality job.
      </Typography>
      <Typography variant="h5" component="p" className={classes.paragraph}>
        My firsts jobs as developer started to design, build and implement
        components and entire enviroments as websites or libraries in bigger
        projects as a Business intelligence module or Filtering systems of Big
        Data information.
      </Typography>
      <Typography variant="h5" component="p" className={classes.paragraph}>
        As far I remember I've always been a developer that built a special
        trust with my bosses each time to allow me to put in place well designed
        solutions for all the platforms I've been working in my professional
        career. I feel deeply grateful for that, they gave my the chance to
        improve my software architect skills.
      </Typography>
    </Box>
  );
};
