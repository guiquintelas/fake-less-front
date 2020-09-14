import {
  AppBar,
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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { AccountCircle } from 'mdi-material-ui';
import FeedProvider from '../contexts/FeedContext';
import { useUserContext } from '../contexts/UserContext';
import Menu from './Menu';
import NewPostForm from './NewPostForm';
import Feed from './Feed';
import { useSnackBarContext } from '../contexts/SnackBarContext';

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
                    <Button color="inherit" style={{ textTransform: 'none' }}>
                      {user?.email}
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
          <Grid container>
            {showMenu && (
              <Grid item md={2}>
                <List component="nav" dense>
                  {user && (
                    <ListItem button onClick={() => console.log('click')}>
                      <ListItemIcon>
                        <AccountCircle />
                      </ListItemIcon>
                      <ListItemText primary="Profile" />
                    </ListItem>
                  )}
                </List>
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
