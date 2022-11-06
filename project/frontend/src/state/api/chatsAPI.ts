import { Chat, PayloadResponse } from '../../types/api';
import api from '../api';

const chatsAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getChats: builder.query<PayloadResponse<Chat[]>, void>({
      query: () => ({
        url: 'chat',
        method: 'GET',
      }),
      providesTags: ['Chats'],
    }),
  }),
});

export const { useGetChatsQuery } = chatsAPI;

export default chatsAPI;
