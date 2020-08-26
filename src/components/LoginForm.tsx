import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import { TextField } from 'formik-material-ui';
import { InputAdornment, useTheme } from '@material-ui/core';
import {
  Formik, Field, Form,
} from 'formik';
import { object, string } from 'yup';
import { useHistory, useLocation } from 'react-router-dom';
import { initialValues as CreateAccountFormValues } from './CreateAccountForm';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = object({
  username: string().required('Fill with your username!'),
  password: string().required('Fill with your password'),
});

type LoginFormProps = {

};

const LoginForm: React.FC<LoginFormProps> = () => {
  const theme = useTheme();
  const history = useHistory();
  const location = useLocation<typeof CreateAccountFormValues>();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting }) => {
        console.log('submit', data);
        setSubmitting(false);
      }}
    >
      {({ resetForm }) => (
        <Form>
          <Grid container spacing={1} direction="column">
            <Field
              component={TextField}
              name="username"
              variant="outlined"
              label="Username"
              style={{ paddingBottom: theme.spacing(1) }}
              required
              InputLabelProps={{ required: false }}
              value={location.state?.username}
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
              value={location.state?.password}
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
            <Button onClick={() => {
              resetForm({});
              history.push('/register');
            }}
            >
              Create Account
            </Button>

            <Button
              color="primary"
              type="submit"
            >
              Login
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>

  );
};

export default LoginForm;
