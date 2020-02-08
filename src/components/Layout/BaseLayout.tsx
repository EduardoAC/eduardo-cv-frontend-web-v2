import React, { useState } from 'react';
import { makeStyles, createStyles, Drawer } from '@material-ui/core';
import { Header } from './Header';
import { Footer } from './Footer';
import { Content } from './Content';
import { menu } from './Menu';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
  }),
);

export const BaseLayout: React.SFC<BaseLayoutProps> = ({
  children,
}: BaseLayoutProps) => {
  const [isOpen, setOpenState] = useState(false);
  const classes = useStyles();

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpenState(open);
  };
  return (
    <div className={classes.root}>
      <Header toggleDrawer={toggleDrawer} />
      <Content>{children}</Content>
      <Footer />
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(!isOpen)}>
        {menu(toggleDrawer)}
      </Drawer>
    </div>
  );
};
