import React from 'react';
import {
  AppBar, Toolbar, IconButton, makeStyles, Typography, Box, Button, MenuItem,
} from '@material-ui/core';
import { Menu as MenuIcon } from 'mdi-material-ui';
import { useHistory } from 'react-router-dom';
import Menu from './Menu';
import { useUser } from '../contexts/UserContext';

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
  const history = useHistory();
  const { user, setUser } = useUser();

  return (
    <>
      <AppBar position="relative" style={{ height: 'fit-content' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" ria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Fake Less
          </Typography>

          <Box>
            {user ? (
              <Menu
                anchor={(
                  <Button color="inherit" style={{ textTransform: 'none' }}>
                    {user?.username}
                  </Button>
              )}
              >
                <MenuItem onClick={() => {
                  setUser(undefined);
                  history.push('/login');
                }}
                >
                  Logout
                </MenuItem>
              </Menu>
            ) : (
              <Button color="inherit" onClick={() => history.push('/login')}>
                Logar
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <main>
        content
      </main>
    </>
  );
};

export default Layout;
