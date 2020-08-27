import React from 'react';
import MuiTextfield, { TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';
import { useField, useFormikContext } from 'formik';
import { InputAdornment } from '@material-ui/core';

export type TextFieldProps = MuiTextFieldProps & {
  name: string,
  icon?: JSX.Element,
};

const TextField: React.FC<TextFieldProps> = (
  {
    name, icon, disabled, ...props
  },
) => {
  const [field, meta] = useField(name);
  const { isSubmitting } = useFormikContext();

  const iconAdornment = icon ? (
    <InputAdornment position="start">
      {icon}
    </InputAdornment>
  ) : null;

  return (
    <MuiTextfield
      {...field}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error ? meta.error : null}
      disabled={disabled || isSubmitting}
      InputProps={{
        startAdornment: iconAdornment,
      }}
      {...props}
    />
  );
};

export default TextField;
