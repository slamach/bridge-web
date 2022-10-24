import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import { HomeContainer, HomeOutletContainer } from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <Sidebar />
      <HomeOutletContainer>
        <Outlet />
      </HomeOutletContainer>
    </HomeContainer>
  );
};

export default Home;
