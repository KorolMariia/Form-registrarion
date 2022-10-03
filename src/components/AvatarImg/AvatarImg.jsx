import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import { FormContextComponent } from '../../context/formContext';

export default function AvatarImg() {
  const [state] = useContext(FormContextComponent);
  return (
    <Stack sx={{ marginBottom: '20px' }}>
      <Avatar
        sx={{ width: 200, height: 200 }}
        src={state.avatar.src}
        alt={state.avatar.name}
      />
    </Stack>
  );
}
