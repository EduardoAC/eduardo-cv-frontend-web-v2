import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  Box,
  Container,
  Typography,
  Grid,
  FormControl,
  TextField,
  TextareaAutosize,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      justifyContent: 'center',
      paddingBottom: '50px',
      [theme.breakpoints.up('sm')]: {
        justifyContent: 'start',
      },
    },
    article: {
      background: 'url(images/world-wide-map-high-res.svg)',
      backgroundSize: 'cover',
      width: '100%',
      minHeight: '680px',
      backgroundRepeat: 'no-repeat',
    },
    contactForm: {
      padding: '30px',
      backgroundColor: 'rgba(200,200,200,0.68)',
      border: '1px solid rgba(255,255,255,.1)',
      boxShadow: '0 0 10px rgba(0,0,0,.4)',
    },
    paragraph: {
      marginBottom: '24px',
      textAlign: 'left',
    },
    section: {
      paddingTop: '50px',
      paddingBottom: '50px',
    },
    formField: {
      margin: '16px 0',
    },
  }),
);
export const Contact: React.SFC<{}> = () => {
  const classes = useStyles();
  return (
    <Box component="article" className={classes.article}>
      <Container className={classes.section}>
        <Grid container justify="flex-end">
          <Grid item xs={12} md={6} className={classes.contactForm}>
            <Typography variant="h3" component="h1" className={classes.title}>
              Hire or contact me
            </Typography>
            <Typography
              variant="h5"
              component="p"
              className={classes.paragraph}
            >
              Hi! I'm Eduardo Aparicio Cardenes. I'm a Web Developer, Software
              architect and Entrepreneur.
            </Typography>
            <FormControl fullWidth>
              <TextField
                className={classes.formField}
                label="Name"
                placeholder="Name"
              />
              <TextField
                className={classes.formField}
                label="Email"
                placeholder="email@email.com"
              />
              <TextField
                className={classes.formField}
                multiline
                variant="outlined"
                label="Message body"
                rows={4}
                placeholder="Please explain the job opportunity or the reason why you are reaching me"
              />
              <Button type="submit" variant="contained" color="primary">
                Send email
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
