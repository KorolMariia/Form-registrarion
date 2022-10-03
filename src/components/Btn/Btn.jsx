import React from 'react';
import Button from '@mui/material/Button';

export default function Btn({ value, onClick }) {
  return (
    <Button onClick={onClick} variant="contained" sx={{ mt: 3, mb: 2 }}>
      {value}
    </Button>
  );
}
