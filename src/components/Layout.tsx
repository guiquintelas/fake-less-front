import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { AccountCircle } from 'mdi-material-ui';
import React from 'react';
import { useHistory } from 'react-router-dom';
import FeedProvider from '../contexts/FeedContext';
import { useSnackBarContext } from '../contexts/SnackBarContext';
import { useUserContext } from '../contexts/UserContext';
import Feed from './Feed';
import Menu from './Menu';
import NewPostForm from './NewPostForm';

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
  const theme = useTheme();
  const { user, logout } = useUserContext();
  const showMenu = useMediaQuery(theme.breakpoints.up('md'));
  const { snackBar } = useSnackBarContext();

  return (
    <>
      <AppBar position="relative" style={{ height: 'fit-content' }}>
        <Container maxWidth="lg" style={{ padding: 0 }}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Fake Less
            </Typography>

            <Box>
              {user ? (
                <Menu
                  anchor={
                    <Button
                      startIcon={<Avatar style={{ width: 25, height: 25 }} alt={user.name} src={user.avatarUrl} />}
                      color="inherit"
                      style={{ textTransform: 'none' }}
                    >
                      {user.name}
                    </Button>
                  }
                >
                  <MenuItem
                    onClick={() => {
                      logout();
                      history.push('/login');
                      snackBar('See you next time! Bye bye 👋');
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              ) : (
                <Button color="inherit" onClick={() => history.push('/login')}>
                  Login
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="lg" component="main">
        <Box py={3}>
          <Grid container justify="center">
            {showMenu && (
              <Grid item md={2}>
                <Box pr={2}>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Button style={{ textTransform: 'none', width: '100%', justifyContent: 'flex-start' }}>
                        <Box display="flex" pr={2}>
                          <AccountCircle />
                        </Box>
                        Profile
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            )}
            <Grid item container direction="column" alignItems="center" spacing={2} xs={12} md={8}>
              <Grid item style={{ width: '100%' }}>
                <FeedProvider>
                  {user && <NewPostForm />}
                  <Feed />
                </FeedProvider>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Layout;
