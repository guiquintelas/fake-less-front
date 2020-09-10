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
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import FeedProvider from '../contexts/FeedContext';
import { useUserContext } from '../contexts/UserContext';
import Menu from './Menu';
import NewPostForm from './NewPostForm';
import PostFeed from './PostFeed';
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
  const { user, setUser } = useUserContext();
  const showMenu = useMediaQuery(theme.breakpoints.up('md'));
  const { snackBar } = useSnackBarContext();

  return (
    <>
      <AppBar position="relative" style={{ height: 'fit-content' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Fake Less
          </Typography>

          <Box>
            {user ? (
              <Menu
                anchor={
                  <Button color="inherit" style={{ textTransform: 'none' }}>
                    {user?.username}
                  </Button>
                }
              >
                <MenuItem
                  onClick={() => {
                    setUser(undefined);
                    history.push('/login');
                    snackBar('See you next time! Bye bye 👋');
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

      <Container maxWidth="lg" component="main">
        <Box py={3}>
          <Grid container>
            {showMenu && (
              <Grid item md={2}>
                menu
              </Grid>
            )}
            <Grid item container direction="column" alignItems="center" spacing={2} xs={12} md={8}>
              <Grid item style={{ width: '100%' }}>
                <FeedProvider>
                  {user && <NewPostForm />}
                  <PostFeed />
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
