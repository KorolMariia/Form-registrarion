import { createContext, useReducer } from 'react';
import { formReducer, initialState } from '../reducer/formReduser';

export const FormContextComponent = createContext({});

export function FormContext({ children }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContextComponent.Provider value={[state, dispatch]}>
      {children}
    </FormContextComponent.Provider>
  );
}
