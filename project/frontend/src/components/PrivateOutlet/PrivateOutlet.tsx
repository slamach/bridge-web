import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const PrivateOutlet = () => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default PrivateOutlet;
