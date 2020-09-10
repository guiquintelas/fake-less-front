import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { AccountCircle, Lock } from 'mdi-material-ui';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import { useHistory, useLocation } from 'react-router-dom';
import { initialValues as CreateAccountFormValues } from './RegisterForm';
import TextField from './TextField';
import LoadingButton from './LoadingButton';
import { useUserContext } from '../contexts/UserContext';
import { useSnackBarContext } from '../contexts/SnackBarContext';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = object({
  username: string().required('Fill with your username!'),
  password: string().required('Fill with your password'),
});

const LoginForm: React.FC = () => {
  const history = useHistory();
  const location = useLocation<typeof CreateAccountFormValues>();
  const { login } = useUserContext();
  const { snackBar } = useSnackBarContext();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (data) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const result = login(data.username, data.password);

            if (typeof result !== 'string') {
              history.push('/');
            } else {
              snackBar(result);
            }

            resolve();
          }, 1000);
        })
      }
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
                <Button
                  onClick={() => {
                    resetForm({});
                    history.push('/register');
                  }}
                >
                  Create Account
                </Button>
              </Grid>

              <Grid item>
                <LoadingButton color="primary" type="submit">
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
