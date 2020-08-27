import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { AccountCircle, Lock } from 'mdi-material-ui';
import { useTheme } from '@material-ui/core';
import {
  Formik, Form,
} from 'formik';
import { object, string } from 'yup';
import { useHistory, useLocation } from 'react-router-dom';
import { initialValues as CreateAccountFormValues } from './CreateAccountForm';
import TextField from './TextField';
import LoadingButton from './LoadingButton';

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
      onSubmit={async (data) => new Promise((resolve) => {
        setTimeout(() => {
          console.log(data);
          resolve();
        }, 2000);
      })}
    >
      {({ resetForm }) => (
        <Form>
          <Grid container spacing={1} direction="column">
            <TextField
              name="username"
              label="Username"
              style={{ paddingBottom: theme.spacing(1) }}
              required
              InputLabelProps={{ required: false }}
              value={location.state?.username}
              icon={<AccountCircle />}
            />

            <TextField
              name="password"
              label="Password"
              type="password"
              style={{ paddingBottom: theme.spacing(1) }}
              value={location.state?.password}
              icon={<Lock />}
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

            <LoadingButton
              color="primary"
              type="submit"
            >
              Login
            </LoadingButton>
          </Grid>
        </Form>
      )}
    </Formik>

  );
};

export default LoginForm;
