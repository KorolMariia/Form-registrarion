import FirstStep from '../FirstStep/FirstStep';
import SecondStep from '../SecondStep/SecondStep';
import ThirdStep from '../ThirdStep/ThirdStep';
import FourthStep from '../FourthStep/FourthStep';
import { FORM_DATA } from '../../reducer/formReduser';
import { useContext } from 'react';
import { FormContextComponent } from '../../context/formContext';

export default function Steps() {
  const [state, dispatch] = useContext(FormContextComponent);

  const handlerInputData = (event) => {
    dispatch({
      type: FORM_DATA,
      payload: { [event.target.id]: event.target.value },
    });
  };

  switch (state.step) {
    case 1:
      return <FirstStep handleInputData={handlerInputData} />;
    case 2:
      return <SecondStep handleInputData={handlerInputData} />;
    case 3:
      return <ThirdStep />;
    case 4:
      return <FourthStep />;
    default:
      return null;
  }
}
