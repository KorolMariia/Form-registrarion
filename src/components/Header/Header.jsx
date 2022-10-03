import React from 'react';
import Typography from '@mui/material/Typography';

export default function Header({ stepName }) {
  return (
    <Typography
      component="h1"
      variant="h5"
      sx={{
        margin: '20px',
        fontWeight: 'bold',
        lineHeight: '16px',
      }}
    >
      {stepName}
    </Typography>
  );
}
