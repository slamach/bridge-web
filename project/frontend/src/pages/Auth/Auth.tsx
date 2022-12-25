import { Navigate, Outlet } from 'react-router-dom';
import { AuthContainer } from './Auth.styled';
import Logo from '../../assets/img/logo.svg';
import { VisuallyHidden } from '../../components/App/App.styled';
import { useAuth } from '../../hooks/useAuth';

const Auth = () => {
  const auth = useAuth();

  if (auth.user) {
    return <Navigate replace to="/" />;
  }

  return (
    <AuthContainer>
      <VisuallyHidden as="h1">Authentication</VisuallyHidden>
      <img src={Logo} width={356} height={95} alt="Bridge logo" />
      <Outlet />
    </AuthContainer>
  );
};

export default Auth;
