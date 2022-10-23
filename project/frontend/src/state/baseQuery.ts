import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { RootState } from './store';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://localhost:8080';

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL + `/api/v1/`,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
