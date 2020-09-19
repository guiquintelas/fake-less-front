import { Box } from '@material-ui/core';
import { KeyboardDatePicker, KeyboardDatePickerProps } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { useField, useFormikContext } from 'formik';
import React from 'react';

export type DatePickerProps = Omit<KeyboardDatePickerProps, 'onChange' | 'value'> & {
  name: string;
  onChange?: (date: MaterialUiPickersDate) => void;
};

const DatePicker: React.FC<DatePickerProps> = ({ name, disabled, helperText, onChange, format, ...props }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ onChange: _, ...field }, meta, { setValue }] = useField(name);
  const { isSubmitting } = useFormikContext();

  return (
    <Box mb={helperText ? 1 : 'auto'}>
      <KeyboardDatePicker
        onChange={(date) => {
          if (onChange) {
            onChange(date);
          }
          setValue(date, false);
        }}
        {...field}
        {...props}
        format={format ?? 'dd/MM/yyyy'}
        error={meta.touched && !!meta.error}
        helperText={meta.touched && meta.error ? meta.error : helperText}
        disabled={disabled || isSubmitting}
      />
    </Box>
  );
};

export default DatePicker;
