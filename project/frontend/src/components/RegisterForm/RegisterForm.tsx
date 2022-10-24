import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  FormContainer,
  FormError,
  FormTitle,
} from '../../pages/Auth/Auth.styled';
import { useRegisterMutation } from '../../state/api/authAPI';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Input from '../Input/Input';
import InputGroup from '../InputGroup/InputGroup';
import { handleAuthError } from '../../utils/errorHandling';
import { useAppDispatch } from '../../hooks/stateHooks';
import { setPersistedCredentials } from '../../state/slices/authSlice';

interface RegisterFormData {
  name: string;
  username: string;
  password: string;
}

const loginValidationSchema = yup.object().shape({
  name: yup.string().label('Display name').required().max(20),
  username: yup.string().label('Username').required().min(4).max(20),
  password: yup.string().label('Password').required().min(8),
});

const RegisterForm = () => {
  const [serverError, setServerError] = useState<string>('');

  const dispatch = useAppDispatch();
  const [registerUser, registerResult] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(loginValidationSchema),
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    try {
      const result = await registerUser({
        name: data.name,
        username: data.username,
        password: data.password,
      }).unwrap();
      dispatch(
        setPersistedCredentials({
          user: result.payload.user,
          token: result.payload.token,
        })
      );
    } catch (err) {
      handleAuthError(err, setServerError);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Create New Account</FormTitle>
      <InputGroup>
        <Input
          id="login-name"
          type="text"
          label="Display Name"
          autoComplete="name"
          autoCapitalize="on"
          spellCheck="false"
          placeholder="Display Name"
          autoFocus
          {...register('name', {
            onChange: () => {
              if (serverError) {
                setServerError('');
              }
            },
          })}
        />
        <Input
          id="login-username"
          type="text"
          label="Username"
          autoComplete="username"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="Username"
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
        {errors.name?.message ||
          errors.username?.message ||
          errors.password?.message ||
          serverError}
      </FormError>
      <ButtonGroup>
        <Button
          size="m"
          type="submit"
          highlight
          disabled={registerResult.isLoading}
        >
          Create Account
        </Button>
        <Button size="m" as={Link} to="/auth/login">
          Log Into an Existing Account
        </Button>
      </ButtonGroup>
    </FormContainer>
  );
};

export default RegisterForm;
