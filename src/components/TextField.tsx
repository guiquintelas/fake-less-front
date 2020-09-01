import React, { useEffect } from 'react';
import MuiTextfield, { TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';
import { useField, useFormikContext } from 'formik';
import { InputAdornment } from '@material-ui/core';

export type TextFieldProps = MuiTextFieldProps & {
  name: string,
  icon?: JSX.Element,
};

const TextField: React.FC<TextFieldProps> = (
  {
    name,
    icon,
    disabled,
    value,
    ...props
  },
) => {
  const [field, meta] = useField(name);
  const { isSubmitting, setFieldValue } = useFormikContext();

  // every time the prop 'value' changes
  // it reflects in formik state
  useEffect(() => {
    setFieldValue(name, value ?? '');
  }, [name, value, setFieldValue]);

  const iconAdornment = icon ? (
    <InputAdornment position="start">
      {icon}
    </InputAdornment>
  ) : null;

  return (
    <MuiTextfield
      {...field}
      {...props}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error ? meta.error : null}
      disabled={disabled || isSubmitting}
      InputProps={{
        startAdornment: iconAdornment,
      }}
    />
  );
};

export default TextField;
