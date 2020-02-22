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

export const MyProjectsIntroduction: React.SFC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="section">
      <Typography variant="h3" component="h1" className={classes.title}>
        My projects
      </Typography>
      <Typography variant="h5" component="p" className={classes.paragraph}>
        I started to have ideas and dream since I was child however it wasn't
        until I joined as a Web Developer for a wonderful company call &nbsp;
        <Link
          href="http://www.globaincubator.com"
          target="_blank"
          color="inherit"
          underline="always"
          rel="nofollow noopener noreferrer"
        >
          GlobalIncubator
        </Link>
        &nbsp; that I realise all the ideas and opportinities that exist in the
        world to make it better and succesful business. There I met one of the
        most amazing people I could imagine in a atmosphere of innovation and
        hard work with people as Pablo Trianfilo, Luis Gonzalez-Blanch, Jose
        Sanz Polo and many others.
      </Typography>
      <Typography variant="h5" component="p" className={classes.paragraph}>
        During over two years I learned a lot about Innovation, Ideas and how to
        make it happens but more important that you will never achieve anything
        if you don't take action. From there I decided to start to write down
        every single idea and start to develop as a website, paper project,
        giving flying, making questionaries anything that put my on track.
      </Typography>
      <Typography variant="h5" component="p" className={classes.paragraph}>
        Therefore, I want to share with you some of my projects, hackathons and
        ideas that can briefly provide you more information about my skill set
        and who knows may be discuss futher or support me with them.
      </Typography>
    </Container>
  );
};
