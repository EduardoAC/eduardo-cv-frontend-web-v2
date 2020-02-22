import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  createStyles,
  List,
  Link,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  }),
);

const NavigationLinks = [
  {
    title: 'Home',
    to: '',
  },
  {
    title: 'About',
    to: '/about',
  },
  {
    title: 'My Projects',
    to: '',
  },
  {
    title: 'My Experience',
    to: '',
  },
  {
    title: 'Contact',
    to: '',
  },
];
export const menu = (toggleDrawer: Function): React.ReactElement => {
  const classes = useStyles();
  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {NavigationLinks.map(({ title, to }) => (
          <Link component={RouterLink} to={to} color="inherit" underline="none">
            <ListItem button key={title}>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};
