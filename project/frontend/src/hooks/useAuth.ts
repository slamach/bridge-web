import { useMemo } from 'react';
import { selectCurrentUser } from '../state/slices/authSlice';
import { useAppSelector } from './stateHooks';

export const useAuth = () => {
  const user = useAppSelector(selectCurrentUser);

  return useMemo(() => ({ user }), [user]);
};
