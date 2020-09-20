import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Form, Formik } from 'formik';
import { Email, Lock } from 'mdi-material-ui';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { object, string } from 'yup';
import { useSnackBarContext } from '../contexts/SnackBarContext';
import { useUserContext } from '../contexts/UserContext';
import LoadingButton from './LoadingButton';
import TextField from './TextField';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = object({
  email: string().email().required('Fill with your email!'),
  password: string().required('Fill with your password'),
});

const LoginForm: React.FC = () => {
  const history = useHistory();
  const { login } = useUserContext();
  const { snackBar } = useSnackBarContext();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (data) => {
        const result = await login(data.email, data.password);

        if (typeof result !== 'string') {
          history.push('/');
        } else {
          snackBar(result, 'danger');
        }
      }}
    >
      {({ resetForm }) => (
        <Form>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <TextField
                name="email"
                label="E-mail"
                required
                InputLabelProps={{ required: false }}
                style={{ width: '100%' }}
                icon={<Email />}
              />
            </Grid>

            <Grid item>
              <TextField name="password" label="Password" type="password" style={{ width: '100%' }} icon={<Lock />} />
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
