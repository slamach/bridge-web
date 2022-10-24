import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/stateHooks';
import { clearPersistedCredentials } from '../../state/slices/authSlice';

const Home = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>Home page</p>
      <button
        onClick={() => {
          dispatch(clearPersistedCredentials());
        }}
      >
        Logout
      </button>
      <Outlet />
    </div>
  );
};

export default Home;
