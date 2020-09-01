import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { AccountCircle, Lock } from 'mdi-material-ui';
import {
  Formik, Form,
} from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import TextField from './TextField';
import LoadingButton from './LoadingButton';

export const initialValues = {
  username: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  username: Yup.string().required('Fill with your username!'),
  password: Yup.string().required('Fill with your password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], "Passwords don't match")
    .required('Please confirm our password!'),
});

const CreateAccountForm: React.FC = () => {
  const history = useHistory();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(data) => {
        console.log('submit', data);
        return history.push('/login', data);
      }}
    >
      {({ resetForm }) => (
        <Form>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <TextField
                name="username"
                label="Username"
                style={{ width: '100%' }}
                required
                InputLabelProps={{ required: false }}
                icon={<AccountCircle />}
              />
            </Grid>

            <Grid item>
              <TextField
                name="password"
                label="Password"
                style={{ width: '100%' }}
                type="password"
                icon={<Lock />}
              />
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
                <Button onClick={() => {
                  resetForm({});
                  history.push('/login');
                }}
                >
                  Login
                </Button>
              </Grid>

              <Grid item>
                <LoadingButton
                  color="primary"
                  type="submit"
                >
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

export default CreateAccountForm;
