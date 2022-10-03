import './App.scss';
import * as React from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import { FormContext } from './context/formContext';

function App() {
  return (
    <FormContext>
      <LoginForm />
    </FormContext>
  );
}

export default App;
