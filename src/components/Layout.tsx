import React from 'react';
import {
  AppBar, Toolbar, IconButton, makeStyles, Typography,
} from '@material-ui/core';
import { Menu } from 'mdi-material-ui';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Layout: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="relative" style={{ height: 'fit-content' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" ria-label="menu">
            <Menu />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Fake Less
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        content
      </main>
    </>
  );
};

export default Layout;
