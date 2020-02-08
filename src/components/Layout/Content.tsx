import React from 'react';
import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';

interface ContentProps {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(8),
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(16),
        paddingBottom: theme.spacing(16),
        flexDirection: 'row',
        alignItems: 'flex-start',
        textAlign: 'left',
      },
    },
  }),
);

export const Content: React.SFC<ContentProps> = ({
  children,
}: ContentProps): React.ReactElement => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" component="main" className={classes.content}>
      {children}
    </Container>
  );
};
