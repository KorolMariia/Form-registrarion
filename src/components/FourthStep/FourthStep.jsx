import React, { useContext } from 'react';
import Header from '../Header/Header';
import Btn from '../Btn/Btn';
import AvatarImg from '../AvatarImg/AvatarImg';
import { PREVIOUS_STEP } from '../../reducer/formReduser';
import { FormContextComponent } from '../../context/formContext';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FourthStep() {
  const [state, dispatch] = useContext(FormContextComponent);
  const notify = () => toast.success('Wow so easy! You finished');

  return (
    <>
      <Header stepName={'Conclusion'} />
      <AvatarImg />
      <Box>
        <Typography>
          <b>First name:</b> {state.firstName}
        </Typography>
        <Typography>
          <b>Last name:</b> {state.lastName}
        </Typography>
        <Typography>
          <b>Email:</b> {state.email}
        </Typography>
      </Box>
      <ButtonGroup sx={{ gap: '30px' }}>
        <Btn
          value={'Previous'}
          onClick={() => dispatch({ type: PREVIOUS_STEP })}
        />
        <Btn value={'Finish'} onClick={notify} />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
        />
      </ButtonGroup>
    </>
  );
}
