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

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = object({
  username: string().required('Fill with your username!'),
  password: string().required('Fill with your password'),
});

type RenderBackButtonProps = {
  resetForm: Function
};

type LoginFormProps = {
  renderBackButton?: (renderProps: RenderBackButtonProps) => React.ReactNode
};

const LoginForm: React.FC<LoginFormProps> = ({ renderBackButton }) => {
  const theme = useTheme();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting }) => {
        console.log(data);
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
            { renderBackButton ? renderBackButton({ resetForm }) : null}

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
