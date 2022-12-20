import { SnackbarProvider } from 'notistack';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useAppDispatch } from '../../hooks/stateHooks';
import {
  closeWebSocketConnection,
  startWebSocketConnection,
} from '../../state/slices/webSocketSlice';
import { HomeContainer, HomeOutletContainer } from './Home.styled';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startWebSocketConnection());

    return () => {
      dispatch(closeWebSocketConnection());
    };
    // eslint-disable-next-line
  }, []);

  return (
    <SnackbarProvider maxSnack={1} autoHideDuration={3000}>
      <HomeContainer>
        <Sidebar />
        <HomeOutletContainer>
          <Outlet />
        </HomeOutletContainer>
      </HomeContainer>
    </SnackbarProvider>
  );
};

export default Home;
