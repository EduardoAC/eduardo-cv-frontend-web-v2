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

export const BackendBackgroundIntroduction = () => {
  const classes = useStyles();
  return (
    <Box component="section">
      <Typography variant="h5" component="p" className={classes.paragraph}>
        I did backend developments as web developer for many years and I'm still
        doing sometimes when it's required. It's a part of myself to try to
        achieve the best result possible doing when need to be done. I've
        involved in this area for the last five years sometimes as a contractor,
        a employee and others in my personal projects. I understand well how the
        back end works and how to build it from scratch.
      </Typography>
      <Typography variant="h5" component="p" className={classes.paragraph}>
        Also, if I currently want to specialize as frontend developer, I can
        provide experience and vision to develop together a great platform that
        helps us to achieve our goal together.
      </Typography>
      <Typography variant="h5" component="p" className={classes.paragraph}>
        Consequently, I like to do backend work as well as frontend because all
        it's about this WWW world that I have passion about it. Therefore I
        won't hesitate to get involved myself when you ask me for. Here is my
        backend background so i hope you find useful because it's a great
        complement for a frontend developer have comprehesion and understanding
        the language the backend developers speaks.
      </Typography>
    </Box>
  );
};
