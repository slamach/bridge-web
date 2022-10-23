import { AuthLoginDTO, AuthRegisterDTO, AuthResponse } from '../../types/api';
import api from '../api';

const authAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, AuthLoginDTO>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<AuthResponse, AuthRegisterDTO>({
      query: (credentials) => ({
        url: 'auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authAPI;
