import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Auth from '../../pages/Auth/Auth';
import { GlobalStyle, theme } from './App.styled';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegistrationForm />} />
        </Route>
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
