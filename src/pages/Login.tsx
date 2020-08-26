import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, useTheme } from '@material-ui/core';
import LoginForm from '../components/LoginForm';
import CreateAccountForm from '../components/CreateAccountForm';

type FormType = 'login' | 'create';

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

  const [formType, setFormType] = useState<FormType>('login');

  function switchForm(newFormType: FormType, resetForm: Function) {
    resetForm({});
    setFormType(newFormType);

    if (newFormType === 'create') {
      console.log('mudou para create');
    } else {
      console.log('mudou para login');
    }
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Paper className={classes.loginPaper}>
        <Grid container spacing={1} direction="column">
          <Typography
            color="textSecondary"
            style={{ paddingBottom: theme.spacing(3) }}
          >
            {formType === 'login' ? 'Login' : 'Create Account'}
          </Typography>

          {formType === 'login' ? (
            <LoginForm
              renderBackButton={({ resetForm }) => (
                <Button onClick={() => { switchForm('create', resetForm); }}>
                  Create Account
                </Button>
              )}
            />
          ) : (
            <CreateAccountForm
              renderBackButton={({ resetForm }) => (
                <Button onClick={() => { switchForm('login', resetForm); }}>
                  Login
                </Button>
              )}
            />
          )}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
