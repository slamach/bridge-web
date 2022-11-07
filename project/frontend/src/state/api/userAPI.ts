import { Page, PayloadResponse, User } from '../../types/api';
import api from '../api';

const userAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserByUsername: builder.mutation<PayloadResponse<Page<User>>, string>({
      query: (username) => ({
        url: `user/name/${username}`,
        method: 'GET',
        params: {
          page: 0,
          size: 1,
        },
      }),
    }),
  }),
});

export const { useGetUserByUsernameMutation } = userAPI;

export default userAPI;
