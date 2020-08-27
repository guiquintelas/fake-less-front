import React from 'react';
// eslint-disable-next-line no-unused-vars
import MuiTextfield, { TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';
// eslint-disable-next-line no-unused-vars
import { useField, FieldProps, useFormikContext } from 'formik';

export type TextFieldProps = MuiTextFieldProps & {
  name: string
};

const TextField: React.FC<TextFieldProps> = (
  {
    name, disabled, ...props
  },
) => {
  const [field, meta] = useField(name);
  const { isSubmitting } = useFormikContext();

  return (
    <MuiTextfield
      {...field}
      {...props}
      error={!!meta.error}
      helperText={meta.error}
      disabled={disabled || isSubmitting}
    />
  );
};

export default TextField;
