import React, { useState, useContext } from 'react';
import Header from '../Header/Header';
import Btn from '../Btn/Btn';
import ButtonGroup from '@mui/material/ButtonGroup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { PREVIOUS_STEP, NEXT_STEP } from '../../reducer/formReduser';
import * as yup from 'yup';
import { FormContextComponent } from '../../context/formContext';
import TextInput from '../TextInput/TextInput';

const validPassword = yup.string().required();

export default function SecondStep({ handleInputData }) {
  const [state, dispatch] = useContext(FormContextComponent);
  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  const [isValid, setIsValid] = useState({
    password: true,
    confirmPassword: true,
  });

  const nextStep = async () => {
    const password = await validPassword.isValid(state.password);
    const confirmPassword = await validPassword.isValid(state.confirmPassword);

    if (!password || !confirmPassword) {
      setIsValid({
        ...isValid,
        password,
        confirmPassword,
      });
    } else if (state.password !== state.confirmPassword) {
      alert('Passwords do not match');
    } else {
      dispatch({ type: NEXT_STEP });
      setIsValid({
        ...isValid,
        password: true,
        confirmPassword: true,
      });
    }
  };

  return (
    <>
      <Header stepName={'Password'} />
      <TextInput
        label="Password"
        type={passwordType}
        id="password"
        value={state.password}
        onChange={(event) => handleInputData(event)}
        helperText={isValid.password ? '' : 'This field is required'}
      />
      <VisibilityIcon onClick={togglePassword} className="eye" />
      <TextInput
        label="Confirm password"
        type={passwordType}
        id="confirmPassword"
        value={state.confirmPassword}
        onChange={(event) => handleInputData(event)}
        helperText={isValid.confirmPassword ? '' : 'This field is required'}
      />

      <ButtonGroup sx={{ gap: '30px' }}>
        <Btn
          value={'Previous'}
          onClick={() => dispatch({ type: PREVIOUS_STEP })}
        />
        <Btn value={'Next'} onClick={() => nextStep()} />
      </ButtonGroup>
    </>
  );
}
