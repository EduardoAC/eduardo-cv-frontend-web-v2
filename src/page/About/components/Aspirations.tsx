import React from 'react';
import Image from 'material-ui-image';
import {
  Box,
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import EduardoChallengeCompletedImg from '../../../../public/assets/images/eduardo-challenge-complete.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      padding: '50px 0',
    },
    paragraph: {
      marginBottom: '24px',
      textAlign: 'justify',
    },
    sectionTitle: {
      margin: '50px 0',
      textAlign: 'center',
    },
  }),
);

export const Aspirations = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <Container component="section">
      <Typography variant="h3" component="h2" className={classes.sectionTitle}>
        Looking for challenges
      </Typography>
      <Typography variant="h5" component="p" className={classes.paragraph}>
        I guess my passion for creation and creativity came from all the times
        that people around me tried to take me down. I grew trying to prove that
        I was right in front of my colleges, parents and friends in many
        differents subjects, no because I was right and they were wrong, it was
        more as I believe that{' '}
        <strong>
          you cannot say something because you hear from your enviroment and
          assume as a fact.
        </strong>
      </Typography>
      <Typography variant="h5" component="p" className={classes.paragraph}>
        <strong>
          I always believe that everything is possible and the facts in my all
          life need to be challenge it
        </strong>
        , nothing is absolute true. Neither the gravity. we can simplify or
        assume facts when we are aware about it.
      </Typography>
      <Typography variant="h5" component="p" className={classes.paragraph}>
        My parents usually often said "you are lucky because your time studying
        is the easiest time in your live" that a job is always more complex than
        study.
      </Typography>
      <Typography variant="h5" component="p" className={classes.paragraph}>
        My colleges used to have opposite opinion than me, I usually proposed
        out of box thinking that they weren't capable to understand. Examaple,
        if we clone a dinnosaour we can provide more food to each person because
        we have plenty of plant to feed them.
        <strong>
          I heared all my life you cannot achieve, it will be impossible.{' '}
        </strong>{' '}
        or you are wrong when the time confirmed that I was right
      </Typography>
      <Typography variant="h5" component="p" className={classes.paragraph}>
        I don't know why but I found these things as a challenge every time they
        told me that encourage me to show them that they were wrong. Probably
        this is one of the reasons because. I never give up during my studies
        and achieve every single thing that's comes to my life
      </Typography>

      <Typography variant="h5" component="p" className={classes.paragraph}>
        I am deeply thanks all the persons in my life that tried to discourage
        me, you helped me to become the person i am today
      </Typography>

      <Box component="div" m={1} width={500} margin="0 auto">
        <Image src={EduardoChallengeCompletedImg} />
        <Typography variant="h5" component="p" style={{ margin: '24px 0' }}>
          I capable to achieve every goal in my life
        </Typography>
      </Box>
    </Container>
  );
};
