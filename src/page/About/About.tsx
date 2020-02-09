import React from 'react';
import Image from 'material-ui-image';
import {
  Container,
  makeStyles,
  Theme,
  createStyles,
  Typography,
} from '@material-ui/core';
import { Introduction } from './components/Introduction';
import LifeTimelineImg from '../../../public/assets/images/my-life-timeline.png';
import UniversityGraduationImg from '../../../public/assets/images/eduardo-aparicio-cardenes-graduation.jpg';
import EduardoCertification1Img from '../../../public/assets/images/certificacion-academica-eduardo-aparicio-cardenes-pag_1.jpg';
import EduardoCertification2Img from '../../../public/assets/images/certificacion-academica-eduardo-aparicio-cardenes-pag_2.jpg';
import EduardoChallengeCompletedImg from '../../../public/assets/images/eduardo-challenge-complete.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      padding: '50px 0',
    },
    paragraph: {
      marginBottom: '24px',
    },
    sectionTitle: {
      paddingBottom: '50px',
    },
  }),
);

export const About = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <>
      <Introduction />
      <Container>
        <Typography
          variant="h3"
          component="h2"
          className={classes.sectionTitle}
        >
          How did I started in this world?
        </Typography>
        <Typography variant="h5" component="p" className={classes.paragraph}>
          I grew with computers, coding and internet. My mom was informatic
          teacher and my first experience with computers, it was when my mom
          took me to her informatic className when I was 8 years old. After that
          I've been with computers at home all my life, starting for Amstrad CPC
          to My current Intel Core i5, (I used most of the IBM and INTEL as 186,
          286, 486, Pentium I, II, III, IV, etc.)
        </Typography>
        <Image
          src={LifeTimelineImg}
          aspectRatio={1.701}
          className={classes.sectionTitle}
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
          analysis to build computers, I did a really hard work studing every
          day but I enjoyed every second of my{' '}
          <a
            href="http://www2.ulpgc.es//index.php?pagina=estudios&ver=weees002&tipoplan=&codigo=180_1801_10_00#2"
            rel="nofollow"
          >
            Informatic engineer
          </a>
          .
        </Typography>
        <div className="university">
          <div className="university-picture">
            <Image src={UniversityGraduationImg} />
          </div>
          <Typography variant="h5" component="p" className={classes.paragraph}>
            I always remember{' '}
            <strong>
              my time in the ULPGC and Rey Juan carlos Universities as the best
              time to exploit and develop my creativity
            </strong>
            , improving my skills, studying every day, doing my homework and
            spend a lot of hours coding and solving the task from my lectures.
          </Typography>
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
          <div className="row university-expedient" id="university-expedient">
            <div className="item col-sm-6">
              <Image src={EduardoCertification1Img} />
              <Typography
                variant="h5"
                component="p"
                className={classes.paragraph}
              >
                Eduardo Aparicio Cardenes Marks Page 1
              </Typography>
            </div>
            <div className="item col-sm-6">
              <Image src={EduardoCertification2Img} />
              <Typography
                variant="h5"
                component="p"
                className={classes.paragraph}
              >
                Eduardo Aparicio Cardenes Marks Page 2
              </Typography>
            </div>
          </div>
          <div className="clearfix" />
          <h2>Looking for challenges</h2>
          <Typography variant="h5" component="p" className={classes.paragraph}>
            I guess my passion for creation and creativity came from all the
            times that people around me tried to take me down. I grew trying to
            prove that I was right in front of my colleges, parents and friends
            in many differents subjects, no because I was right and they were
            wrong, it was more as I believe that{' '}
            <strong>
              you cannot say something because you hear from your enviroment and
              assume as a fact.
            </strong>
          </Typography>
          <Typography variant="h5" component="p" className={classes.paragraph}>
            <strong>
              I always believe that everything is possible and the facts in my
              all life need to be challenge it
            </strong>
            , nothing is absolute true. Neither the gravity. we can simplify or
            assume facts when we are aware about it.
          </Typography>
          <Typography variant="h5" component="p" className={classes.paragraph}>
            My parents usually often said "you are lucky because your time
            studying is the easiest time in your live" that a job is always more
            complex than study.
          </Typography>
          <Typography variant="h5" component="p" className={classes.paragraph}>
            My colleges used to have opposite opinion than me, I usually
            proposed out of box thinking that they weren't capable to
            understand. Examaple, if we clone a dinnosaour we can provide more
            food to each person because we have plenty of plant to feed them.
            <strong>
              I heared all my life you cannot achieve, it will be impossible.{' '}
            </strong>{' '}
            or you are wrong when the time confirmed that I was right
          </Typography>
          <Typography variant="h5" component="p" className={classes.paragraph}>
            I don't know why but I found these things as a challenge every time
            they told me that encourage me to show them that they were wrong.
            Probably this is one of the reasons because. I never give up during
            my studies and achieve every single thing that's comes to my life
          </Typography>

          <Typography variant="h5" component="p" className={classes.paragraph}>
            I am deeply thanks all the persons in my life that tried to
            discourage me, you helped me to become the person i am today
          </Typography>
          <Image src={EduardoChallengeCompletedImg} />

          <Typography variant="h5" component="p" className={classes.paragraph}>
            I capable to achieve every goal in my life
          </Typography>
        </div>
      </Container>
    </>
  );
};
