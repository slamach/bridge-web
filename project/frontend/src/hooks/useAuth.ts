import { useMemo } from 'react';
import {
  selectCurrentToken,
  selectCurrentUser,
} from '../state/slices/authSlice';
import { useAppSelector } from './stateHooks';

export const useAuth = () => {
  const user = useAppSelector(selectCurrentUser);
  const token = useAppSelector(selectCurrentToken);

  return useMemo(() => ({ user, token }), [user, token]);
};
