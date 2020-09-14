import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Email, Lock } from 'mdi-material-ui';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import TextField from './TextField';
import LoadingButton from './LoadingButton';
import { useUserContext } from '../contexts/UserContext';
import { useSnackBarContext } from '../contexts/SnackBarContext';

export const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email().required('Fill with your email!'),
  password: Yup.string().required('Fill with your password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], "Passwords don't match")
    .required('Please confirm our password!'),
});

const RegisterForm: React.FC = () => {
  const history = useHistory();
  const { register } = useUserContext();
  const { snackBar } = useSnackBarContext();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (data) => {
        const result = register(data.email, data.password);

        if (typeof result === 'string') {
          snackBar(result, 'danger');
        } else {
          history.push('/login', data);
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
                style={{ width: '100%' }}
                required
                InputLabelProps={{ required: false }}
                icon={<Email />}
              />
            </Grid>

            <Grid item>
              <TextField name="password" label="Password" style={{ width: '100%' }} type="password" icon={<Lock />} />
            </Grid>

            <Grid item>
              <TextField
                name="confirmPassword"
                label="Confirm Password"
                style={{ width: '100%' }}
                type="password"
                icon={<Lock />}
              />
            </Grid>

            <Grid container item justify="flex-end" spacing={1}>
              <Grid item>
                <Button
                  onClick={() => {
                    resetForm({});
                    history.push('/login');
                  }}
                >
                  Login
                </Button>
              </Grid>

              <Grid item>
                <LoadingButton color="primary" type="submit">
                  Create Account
                </LoadingButton>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
