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
import IdeasContentBlogImg from '../../../../public/assets/images/ideas-content-blog.jpg';

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
export const ContentBlogs = (): React.ReactElement => {
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
            Business and Technology Addiction
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={5}>
              <Image src={IdeasContentBlogImg} aspectRatio={1.501} />
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
                Therefore I added two areas in that will contribute with my own
                posts and ideas about it
              </Typography>
              <Typography
                variant="h5"
                component="p"
                className={classes.paragraph}
              >
                These are{' '}
                <Link
                  color="inherit"
                  href="https://medium.com/@byeduardoac"
                  target="_blank"
                >
                  business and technology blog
                </Link>{' '}
                and{' '}
                <Link
                  component={LinkReactRouter}
                  color="inherit"
                  to="/homepage"
                >
                  the brainstorming forum
                </Link>
              </Typography>
              <Typography
                variant="h5"
                component="p"
                className={classes.paragraph}
              >
                where I publish different about topic related with all the
                topics that I mentioned before
              </Typography>
            </Grid>
          </Grid>
        </section>
      </Container>
    </section>
  );
};
