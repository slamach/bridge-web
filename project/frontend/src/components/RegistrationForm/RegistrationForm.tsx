import { Link } from 'react-router-dom';
import { FormContainer, FormTitle } from '../../pages/Auth/Auth.styled';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Input from '../Input/Input';
import InputGroup from '../InputGroup/InputGroup';

const RegistrationForm = () => {
  return (
    <FormContainer style={{ marginBottom: 49 }}>
      <FormTitle>Create New Account</FormTitle>
      <InputGroup>
        <Input
          id="login-displayname"
          type="text"
          label="Display Name"
          name="name"
          autoComplete="name"
          placeholder="Display Name"
          required
          autoFocus
        />
        <Input
          id="login-username"
          type="text"
          label="Username"
          name="username"
          autoComplete="username"
          placeholder="Username"
          required
        />
        <Input
          id="login-password"
          type="password"
          label="Password"
          name="password"
          autoComplete="new-password"
          placeholder="Password"
          required
        />
      </InputGroup>
      <ButtonGroup>
        <Button type="submit" highlight>
          Create New Account
        </Button>
        <Button as={Link} to="/auth/login">
          Log Into an Existing Account
        </Button>
      </ButtonGroup>
    </FormContainer>
  );
};

export default RegistrationForm;
