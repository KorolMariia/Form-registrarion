import { useContext } from 'react';
import { FormContextComponent } from '../../context/formContext';
import { FORM_DATA, NEXT_STEP, PREVIOUS_STEP } from '../../reducer/formReduser';
import Header from '../Header/Header';
import AvatarImg from '../AvatarImg/AvatarImg';
import Btn from '../Btn/Btn';
import ButtonGroup from '@mui/material/ButtonGroup';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';

export default function ThirdStep() {
  const [, dispatch] = useContext(FormContextComponent);

  const updateImage = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
    }

    reader.onloadend = () => {
      dispatch({
        type: FORM_DATA,
        payload: {
          [event.target.id]: {
            src: reader.result,
            name: file.name,
          },
        },
      });
    };
  };

  return (
    <>
      <Header stepName={'Avatar'} />
      <AvatarImg />
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden id="avatar" type="file" onChange={updateImage} />
        <PhotoCamera />
      </IconButton>
      <ButtonGroup sx={{ gap: '30px' }}>
        <Btn
          value={'Previous'}
          onClick={() => dispatch({ type: PREVIOUS_STEP })}
        />
        <Btn value={'Next'} onClick={() => dispatch({ type: NEXT_STEP })} />
      </ButtonGroup>
    </>
  );
}
