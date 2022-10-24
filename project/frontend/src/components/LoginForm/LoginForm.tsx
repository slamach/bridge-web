import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  FormContainer,
  FormError,
  FormTitle,
} from '../../pages/Auth/Auth.styled';
import { useLoginMutation } from '../../state/api/authAPI';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Input from '../Input/Input';
import InputGroup from '../InputGroup/InputGroup';
import { handleAuthError } from '../../utils/errorHandling';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/stateHooks';
import { setPersistedCredentials } from '../../state/slices/authSlice';

interface LoginFormData {
  username: string;
  password: string;
}

const loginValidationSchema = yup.object().shape({
  username: yup.string().label('Username').required().min(4),
  password: yup.string().label('Password').required().min(8),
});

const LoginForm = () => {
  const [serverError, setServerError] = useState<string>('');

  const dispatch = useAppDispatch();
  const [login, loginResult] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginValidationSchema),
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const result = await login({
        username: data.username,
        password: data.password,
      }).unwrap();
      dispatch(
        setPersistedCredentials({
          // FIXME: Заменить на правильный тип
          user: result.payload.userId,
          token: result.payload.token,
        })
      );
    } catch (err) {
      handleAuthError(err, setServerError);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Log Into an Existing Account</FormTitle>
      <InputGroup>
        <Input
          id="login-username"
          type="text"
          label="Username"
          autoComplete="username"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="Username"
          autoFocus
          {...register('username', {
            onChange: () => {
              if (serverError) {
                setServerError('');
              }
            },
          })}
        />
        <Input
          id="login-password"
          type="password"
          label="Password"
          autoComplete="current-password"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="Password"
          {...register('password', {
            onChange: () => {
              if (serverError) {
                setServerError('');
              }
            },
          })}
        />
      </InputGroup>
      <FormError>
        {errors.username?.message || errors.password?.message || serverError}
      </FormError>
      <ButtonGroup>
        <Button type="submit" highlight disabled={loginResult.isLoading}>
          Log In
        </Button>
        <Button as={Link} to="/auth/register">
          Create New Account
        </Button>
      </ButtonGroup>
    </FormContainer>
  );
};

export default LoginForm;
