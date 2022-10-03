export const FORM_DATA = '[FORM] Form data';
export const NEXT_STEP = '[STEP] Next step';
export const PREVIOUS_STEP = '[STEP] Previous step';

export const initialState = {
  step: 1,
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  avatar: {
    src: '',
    name: '',
  },
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return {
        ...state,
        step: state.step + 1,
      };
    case PREVIOUS_STEP:
      return {
        ...state,
        step: state.step - 1,
      };
    case FORM_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
