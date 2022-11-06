import { PayloadResponse, Message, Page } from '../../types/api';
import api from '../api';

const messagesAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query<PayloadResponse<Page<Message>>, string>({
      query: (chatId) => ({
        url: 'message',
        method: 'GET',
        params: {
          chat: chatId,
          page: 0,
          size: 50,
        },
      }),
      providesTags: ['Messages'],
    }),
  }),
});

export const { useGetMessagesQuery } = messagesAPI;

export default messagesAPI;
