import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Auth from '../../pages/Auth/Auth';
import { GlobalStyle, theme } from './App.styled';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import PrivateOutlet from '../PrivateOutlet/PrivateOutlet';
import Home from '../../pages/Home/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Route>
        <Route element={<PrivateOutlet />}>
          <Route path="/" element={<Home />}>
            <Route index element={<p>Select a chat</p>} />
            <Route path=":chatId" element={<p>Some chat</p>} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
