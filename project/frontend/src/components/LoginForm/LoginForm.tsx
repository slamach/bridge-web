import { Link } from 'react-router-dom';
import { FormContainer, FormTitle } from '../../pages/Auth/Auth.styled';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Input from '../Input/Input';
import InputGroup from '../InputGroup/InputGroup';

const LoginForm = () => {
  return (
    <FormContainer>
      <FormTitle>Log Into an Existing Account</FormTitle>
      <InputGroup>
        <Input
          id="login-username"
          type="text"
          label="Username"
          name="username"
          autoComplete="username"
          placeholder="Username"
          required
          autoFocus
        />
        <Input
          id="login-password"
          type="password"
          label="Password"
          name="password"
          autoComplete="current-password"
          placeholder="Password"
          required
        />
      </InputGroup>
      <ButtonGroup>
        <Button type="submit" highlight>
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
