import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, Paper, useTheme } from '@material-ui/core';

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

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Paper className={classes.loginPaper}>
        <Grid container spacing={1}>
          <Typography
            color="textSecondary"
            gutterBottom
            style={{ paddingBottom: theme.spacing(2) }}
          >
            Login
          </Typography>

          <Grid container spacing={1} direction="column">
            <TextField
              variant="outlined"
              label="Username"
              style={{ paddingBottom: theme.spacing(2) }}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              variant="outlined"
              label="Password"
              type="password"
              style={{ paddingBottom: theme.spacing(2) }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid container justify="flex-end">
            <Button variant="text" color="primary">Login</Button>
          </Grid>
        </Grid>
      </Paper>

    </Grid>
  );
};

export default Login;
