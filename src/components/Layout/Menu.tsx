import React from 'react';
import {
  makeStyles,
  createStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

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
        {['Home', 'About', 'My Projects', 'My Experience', 'Contact'].map(
          text => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ),
        )}
      </List>
    </div>
  );
};
