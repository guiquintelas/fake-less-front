import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from 'formik-material-ui';
import { InputAdornment, Paper, useTheme } from '@material-ui/core';
import {
  Formik, Field, Form,
} from 'formik';
import { object, string } from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = object({
  username: string().required('Fill with your username!'),
  password: string().required('Fill with your password'),
});

function onSubmit(data: typeof initialValues) {
  console.log(data);
}

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
        <Grid container spacing={1} direction="column">
          <Typography
            color="textSecondary"
            gutterBottom
            style={{ paddingBottom: theme.spacing(2) }}
          >
            Login
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <Grid container spacing={1} direction="column">
                <Field
                  component={TextField}
                  name="username"
                  variant="outlined"
                  label="Username"
                  style={{ paddingBottom: theme.spacing(1) }}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />

                <Field
                  component={TextField}
                  name="password"
                  variant="outlined"
                  label="Password"
                  type="password"
                  style={{ paddingBottom: theme.spacing(1) }}
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
                <Button
                  variant="text"
                  color="primary"
                  type="submit"
                >
                  Login
                </Button>
              </Grid>
            </Form>
          </Formik>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
