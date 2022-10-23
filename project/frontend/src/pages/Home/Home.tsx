import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <p>Home page</p>
      <Outlet />
    </div>
  );
};

export default Home;
