import React from 'react';
import {
  Typography,
  makeStyles,
  Link,
  createStyles,
  Box,
} from '@material-ui/core';
import { backendStrengths } from '@constants/BackendStrengths';
import { ContentBlock } from '../../../components/ContentBlock/ContentBlock';

const useStyles = makeStyles(() =>
  createStyles({
    strenghts: {
      '& a': {
        color: 'inherit',
        textDecoration: 'underline',
      },
    },
    line: {
      marginTop: '24px',
      marginBottom: '24px',
    },
    paragraph: {
      marginTop: '24px',
      marginBottom: '24px',
      textAlign: 'center',
    },
  }),
);

export const BackendSkills: React.SFC<{}> = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.strenghts}>
      {backendStrengths.map((strength, index) => (
        <Box key={`backend-strength-${Math.random() * 100}`}>
          <hr className={classes.line} />
          <ContentBlock
            content={strength}
            position={index % 2 === 0 ? 'left' : 'right'}
          />
        </Box>
      ))}
      <Typography variant="h4" component="p" className={classes.paragraph}>
        <Link
          href="https://www.linkedin.com/in/eacardenes"
          rel="nofollow"
          color="inherit"
          target="_blank"
        >
          Would you like to know more?
        </Link>
      </Typography>
    </Box>
  );
};
