import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function TextInput({
  label,
  type,
  id,
  value,
  onChange,
  helperText,
}) {
  return (
    <TextField
      sx={{ width: '400px' }}
      variant="standard"
      margin="normal"
      label={label}
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      helperText={helperText}
    />
  );
}
