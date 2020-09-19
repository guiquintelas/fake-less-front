import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Email, Lock, MapMarker } from 'mdi-material-ui';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import TextField from './TextField';
import LoadingButton from './LoadingButton';
import { useUserContext } from '../contexts/UserContext';
import { useSnackBarContext } from '../contexts/SnackBarContext';
import DatePicker from './DatePicker';

export const initialValues = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  location: '',
  birthDate: null,
};

const validationSchema = Yup.object({
  name: Yup.string().required('Fill with your name!'),
  lastName: Yup.string().required('Fill with your last name!'),
  email: Yup.string().email().required('Fill with your email!'),
  password: Yup.string().required('Fill with your password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], "Passwords don't match")
    .required('Please confirm our password!'),
  location: Yup.string(),
  birthDate: Yup.date()
    .max(new Date(), 'Only past dates are valid!')
    .nullable()
    .typeError('Please enter a valid date!'),
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
        const result = await register(data);

        if (typeof result === 'string') {
          snackBar(result, 'danger');
        } else {
          history.push('/');
        }
      }}
    >
      {({ resetForm }) => (
        <Form>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <TextField autoFocus name="name" label="Name" style={{ width: '100%' }} />
            </Grid>

            <Grid item>
              <TextField name="lastName" label="Last Name" style={{ width: '100%' }} />
            </Grid>

            <Grid item>
              <TextField name="email" label="E-mail" style={{ width: '100%' }} icon={<Email />} />
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

            <Grid item>
              <TextField
                name="location"
                label="Location"
                style={{ width: '100%' }}
                placeholder="RJ, Rio de Janeiro"
                icon={<MapMarker />}
              />
            </Grid>

            <Grid item>
              <DatePicker name="birthDate" label="Birth Date" style={{ width: '100%' }} />
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
