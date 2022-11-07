import { Chat, ChatCreationDTO, PayloadResponse } from '../../types/api';
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
    createChat: builder.mutation<PayloadResponse<Chat>, ChatCreationDTO>({
      query: (chatCreationDTO) => ({
        url: 'chat',
        method: 'POST',
        body: chatCreationDTO,
      }),
      async onQueryStarted(chatCreationDTO, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { payload: createdChat },
          } = await queryFulfilled;
          dispatch(
            chatsAPI.util.updateQueryData('getChats', undefined, (draft) => {
              draft.payload.push(createdChat);
            })
          );
        } catch (err) {
          // FIXME: Обработать ошибку
        }
      },
    }),
  }),
});

export const { useGetChatsQuery, useCreateChatMutation } = chatsAPI;

export default chatsAPI;
