import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, useTheme } from '@material-ui/core';
import { Switch, Route, useLocation } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
  },

  loginPaper: {
    width: '360px',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(5),
  },
}));

const Login: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const location = useLocation();

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
      <Paper className={classes.loginPaper}>
        <Grid container spacing={1} direction="column">
          <Typography color="textSecondary" style={{ paddingBottom: theme.spacing(3) }}>
            {location.pathname === '/login' ? 'Login' : 'Create Account'}
          </Typography>

          <Switch>
            <Route path="/login">
              <LoginForm />
            </Route>

            <Route path="/register">
              <RegisterForm />
            </Route>
          </Switch>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
