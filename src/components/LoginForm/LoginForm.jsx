import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Steps from '../Steps/Steps';
import { useContext } from 'react';
import { FormContextComponent } from '../../context/formContext';

export default function LoginForm() {
  const [state] = useContext(FormContextComponent);

  return (
    <>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{ justifyContent: 'center', width: '700px', margin: '0 auto' }}
      >
        <Box
          component="form"
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Steps step={state.step} />
        </Box>
      </Grid>
    </>
  );
}
