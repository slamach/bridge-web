import {
  Message,
  Page,
  PayloadResponse,
  SendMessageDTO,
} from '../../types/api';
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
    sendMessage: builder.mutation<PayloadResponse<Message>, SendMessageDTO>({
      query: (sendMessageDTO) => ({
        url: 'message',
        method: 'POST',
        body: sendMessageDTO,
      }),
      invalidatesTags: ['Chats', 'Messages'],
    }),
  }),
});

export const { useGetMessagesQuery, useSendMessageMutation } = messagesAPI;
