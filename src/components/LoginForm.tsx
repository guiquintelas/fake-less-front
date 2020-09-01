import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { AccountCircle, Lock } from 'mdi-material-ui';
import { Box } from '@material-ui/core';
import {
  Formik, Form,
} from 'formik';
import { object, string } from 'yup';
import { useHistory, useLocation } from 'react-router-dom';
import { initialValues as CreateAccountFormValues } from './CreateAccountForm';
import TextField from './TextField';
import LoadingButton from './LoadingButton';
import { useUserContext } from '../contexts/UserContext';

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
  const history = useHistory();
  const location = useLocation<typeof CreateAccountFormValues>();
  const { setUser } = useUserContext();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (data) => new Promise((resolve) => {
        setTimeout(() => {
          setUser(data);
          history.push('/');
          resolve();
        }, 1000);
      })}
    >
      {({ resetForm }) => (
        <Form>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <TextField
                name="username"
                label="Username"
                required
                InputLabelProps={{ required: false }}
                style={{ width: '100%' }}
                value={location.state?.username}
                icon={<AccountCircle />}
              />
            </Grid>

            <Grid item>
              <TextField
                name="password"
                label="Password"
                type="password"
                style={{ width: '100%' }}
                value={location.state?.password}
                icon={<Lock />}
              />
            </Grid>

            <Grid container item justify="flex-end" spacing={1}>
              <Grid item>
                <Button onClick={() => {
                  resetForm({});
                  history.push('/register');
                }}
                >
                  Create Account
                </Button>
              </Grid>

              <Grid item>
                <LoadingButton
                  color="primary"
                  type="submit"
                >
                  Login
                </LoadingButton>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>

  );
};

export default LoginForm;
