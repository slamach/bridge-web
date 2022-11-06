import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/api';
import { AppDispatch, RootState } from '../store';

interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  token: localStorage.getItem('token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;

export const setPersistedCredentials =
  (credentials: { user: User; token: string }) => (dispatch: AppDispatch) => {
    dispatch(setCredentials(credentials));
    localStorage.setItem('user', JSON.stringify(credentials.user));
    localStorage.setItem('token', credentials.token);
  };

export const clearPersistedCredentials = () => (dispatch: AppDispatch) => {
  dispatch(clearCredentials());
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
