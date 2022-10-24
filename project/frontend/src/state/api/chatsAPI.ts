import { Chat, PayloadResponse } from '../../types/api';
import api from '../api';

const authAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query<PayloadResponse<Chat[]>, void>({
      query: () => ({
        url: 'chat',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetChatsQuery } = authAPI;
