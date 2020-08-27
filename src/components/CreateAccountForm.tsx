import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import { InputAdornment, useTheme } from '@material-ui/core';
import {
  Formik, Form,
} from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import TextField from './TextField';

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

type CreateAccountFormProps = {

};

const CreateAccountForm: React.FC<CreateAccountFormProps> = () => {
  const theme = useTheme();
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
            <TextField
              name="username"
              variant="outlined"
              label="Username"
              style={{ paddingBottom: theme.spacing(1) }}
              required
              InputLabelProps={{ required: false }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
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

            <TextField
              name="confirmPassword"
              variant="outlined"
              label="Confirm Password"
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
            <Button onClick={() => {
              resetForm({});
              history.push('/login');
            }}
            >
              Login
            </Button>

            <Button
              color="primary"
              type="submit"
            >
              Create Account
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>

  );
};

export default CreateAccountForm;
