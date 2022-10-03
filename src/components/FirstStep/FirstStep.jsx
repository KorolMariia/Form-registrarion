import React, { useContext, useState } from 'react';
import Btn from '../Btn/Btn';
import Header from '../Header/Header';
import TextInput from '../TextInput/TextInput';
import { NEXT_STEP } from '../../reducer/formReduser';
import { FormContextComponent } from '../../context/formContext';
import * as yup from 'yup';

const validName = yup
  .string()
  .matches(/^[a-zа-яА-Я]+$/gi)
  .required();
const validEmail = yup.string().email().required();

export default function FirstStep({ handleInputData }) {
  const [state, dispatch] = useContext(FormContextComponent);

  const [isValid, setIsValid] = useState({
    firstName: true,
    lastName: true,
    email: true,
  });

  const nextStep = async () => {
    const firstName = await validName.isValid(state.firstName);
    const lastName = await validName.isValid(state.lastName);
    const email = await validEmail.isValid(state.email);

    if (firstName && lastName && email) {
      dispatch({ type: NEXT_STEP });
    }

    setIsValid({
      ...isValid,
      firstName,
      lastName,
      email,
    });
  };

  return (
    <>
      <Header stepName={'Personal info'} />
      <TextInput
        label="First Name"
        type="text"
        id="firstName"
        value={state.firstName}
        onChange={(event) => handleInputData(event)}
        helperText={
          isValid.firstName
            ? ''
            : 'This field is required or alphabetical characters only'
        }
      />
      <TextInput
        label="Last Name"
        type="text"
        id="lastName"
        value={state.lastName}
        onChange={(event) => handleInputData(event)}
        helperText={
          isValid.lastName
            ? ''
            : 'This field is required or alphabetical characters only'
        }
      />
      <TextInput
        id="email"
        label="Email Address"
        type="email"
        value={state.email}
        onChange={(event) => handleInputData(event)}
        helperText={
          isValid.email ? '' : 'This field is required or invalid format '
        }
      />
      <Btn value={'Next'} onClick={() => nextStep()} />
    </>
  );
}
