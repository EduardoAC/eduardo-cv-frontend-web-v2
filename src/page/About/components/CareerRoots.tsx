import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';
import EduardoCertification1Img from '../../../../public/assets/images/certificacion-academica-eduardo-aparicio-cardenes-pag_1.jpg';
import EduardoCertification2Img from '../../../../public/assets/images/certificacion-academica-eduardo-aparicio-cardenes-pag_2.jpg';
import UniversityGraduationImg from '../../../../public/assets/images/eduardo-aparicio-cardenes-graduation.jpg';
import LifeTimelineImg from '../../../../public/assets/images/my-life-timeline.png';

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
      paddingBottom: '50px',
    },
    graduationImage: {
      margin: '0 auto',
      [theme.breakpoints.up('md')]: {
        margin: '0',
      },
    },
  }),
);

export const CareerRoots = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <Container component="section">
      <Typography variant="h3" component="h2" className={classes.sectionTitle}>
        How did I started in this world?
      </Typography>
      <Typography variant="h5" component="p" className={classes.paragraph}>
        I grew with computers, coding and internet. My mom was informatic
        teacher and my first experience with computers, it was when my mom took
        me to her informatic className when I was 8 years old. After that I've
        been with computers at home all my life, starting for Amstrad CPC to My
        current Intel Core i5, (I used most of the IBM and INTEL as 186, 286,
        486, Pentium I, II, III, IV, etc.)
      </Typography>
      <img
        src={LifeTimelineImg}
        alt="life timeline"
        style={{ backgroundColor: 'white', marginBottom: '24px' }}
      />
      <Typography variant="h5" component="p" className={classes.paragraph}>
        Since then, I was the first of my school colleges to have the latest
        version of computer at home.
        <strong>
          I mounted my first computer with 14 and fixing computers at 16 years
          old.
        </strong>
        I still remember how we used to connect to internet with our Intel 486
        and 28k modem. I knew that technology and internet it was my world,
        create things that other people use filled my soul.
      </Typography>
      <Typography variant="h5" component="p" className={classes.paragraph}>
        Everyone used to ask my about hardware and technologies all the time,
        help, fix and advice was my work until I joined to the university. My
        first year it was the most exited day of my life, from Matemathic
        analysis to build computers, I did a really hard work studing every day
        but I enjoyed every second of my{' '}
        <a
          href="http://www2.ulpgc.es//index.php?pagina=estudios&ver=weees002&tipoplan=&codigo=180_1801_10_00#2"
          rel="nofollow"
        >
          Informatic engineer
        </a>
        .
      </Typography>
      <Typography variant="h5" component="p" className={classes.paragraph}>
        I always remember{' '}
        <strong>
          my time in the ULPGC and Rey Juan carlos Universities as the best time
          to exploit and develop my creativity
        </strong>
        , improving my skills, studying every day, doing my homework and spend a
        lot of hours coding and solving the task from my lectures.
      </Typography>
      <Grid container spacing={3} className={classes.profiles}>
        <Grid item className={classes.graduationImage}>
          <img
            src={UniversityGraduationImg}
            alt="Eduardo Aparicio Cardenes graduation"
          />
        </Grid>
        <Grid item xs={12} md>
          <Typography variant="h5" component="p" className={classes.paragraph}>
            Many times, I remember how my teachers struggle with me often doing
            more complex solutions that it was required for the exercise that I
            needed to solve it because I want to discover and research.
          </Typography>
          <Typography variant="h5" component="p" className={classes.paragraph}>
            I have been different thinking all my life,{' '}
            <strong>sometimes wrong and other right</strong>
            but I did a lot of interesting things that open my mind that made me
            the man who i am now. I feel proud of my marks where my only a few
            low marks was in my expedient as you can see about.
          </Typography>
          <Grid container spacing={3} className={classes.profiles}>
            <Grid item xs={12} sm={6}>
              <img
                src={EduardoCertification1Img}
                style={{ maxWidth: '140px' }}
                alt="Eduardo Aparicio Cardenes Marks Page 1"
              />
              <Typography variant="h5" component="p">
                Eduardo Aparicio Cardenes Marks Page 1
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img
                src={EduardoCertification2Img}
                style={{ maxWidth: '140px' }}
                alt="Eduardo Aparicio Cardenes Marks Page 2"
              />
              <Typography
                variant="h5"
                component="p"
                className={classes.paragraph}
              >
                Eduardo Aparicio Cardenes Marks Page 2
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
