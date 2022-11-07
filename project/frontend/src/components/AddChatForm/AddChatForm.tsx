import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useCreateChatMutation } from '../../state/api/chatsAPI';
import { useGetUserByUsernameMutation } from '../../state/api/userAPI';
import Button from '../Button/Button';
import { AddChatInput, StyledAddChatForm } from './AddChatForm.styled';

export const AddChatForm = () => {
  const auth = useAuth();
  const [getUserByUsername] = useGetUserByUsernameMutation();
  const [createChat] = useCreateChatMutation();
  const [value, setValue] = useState<string>('');

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    if (value.length > 0) {
      submit(value);
    }
  };

  const submit = async (value: string) => {
    try {
      const getUserResult = await getUserByUsername(value).unwrap();
      if (getUserResult.payload.content.length < 1) {
        // FIXME: Нормальный вывод ошибки
        alert('Not Found');
      } else {
        const participant = getUserResult.payload.content[0];
        if (participant.id === auth.user!.id) {
          return;
        }
        await createChat({
          participants: [auth.user!.id, participant.id],
        });
        setValue('');
      }
    } catch (err) {
      // FIXME: Нормальный вывод ошибки
      alert('Error');
    }
  };

  return (
    <StyledAddChatForm onSubmit={handleSubmit}>
      <AddChatInput
        value={value}
        onChange={handleChange}
        placeholder="Enter user name..."
      />
      <Button size="s" highlight type="submit">
        Add
      </Button>
    </StyledAddChatForm>
  );
};
