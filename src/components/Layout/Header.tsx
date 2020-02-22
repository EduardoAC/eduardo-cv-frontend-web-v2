import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    toolBar: {
      [theme.breakpoints.up('lg')]: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: theme.breakpoints.width('lg'),
      },
    },
  }),
);

interface HeaderProps {
  toggleDrawer: Function;
}
export const Header: React.SFC<HeaderProps> = ({
  // eslint-disable-next-line react/prop-types
  toggleDrawer,
}): React.ReactElement => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" color="default">
      <Toolbar variant="regular" className={classes.toolBar}>
        <Typography variant="h6" className={classes.title}>
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            My Interactive CV
          </Link>
        </Typography>
        <IconButton
          edge="start"
          className={classes.menuButton}
          onClick={toggleDrawer(true)}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
