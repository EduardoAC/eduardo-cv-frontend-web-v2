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
import { NavigationLinks } from '@constants/Navigation';

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
          <Link
            key={`navigation-link-${title
              .toLocaleLowerCase()
              .replace(' ', '-')}`}
            component={RouterLink}
            to={to}
            color="inherit"
            underline="none"
          >
            <ListItem button key={title}>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};
