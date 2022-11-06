import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '../../components/Avatar/Avatar';
import MessageForm from '../../components/MessageForm/MessageForm';
import MessageList from '../../components/MessageList/MessageList';
import { useAppSelector } from '../../hooks/stateHooks';
import { useAuth } from '../../hooks/useAuth';
import { useGetChatsQuery } from '../../state/api/chatsAPI';
import { useGetMessagesQuery } from '../../state/api/messagesAPI';
import { selectWebSocketLoading } from '../../state/slices/webSocketSlice';
import {
  ChatContainer,
  ChatHeader,
  ChatHeaderCard,
  ChatHeaderInfo,
} from './Chat.styled';
import ChatHeaderCardSkeleton from './ChatHeaderCardSkeleton';

const MAX_NAME_CHARACTERS = 20;
const MAX_USERNAME_CHARACTERS = 20;

const Chat = () => {
  const { chatId } = useParams<{ chatId: string }>();
  const auth = useAuth();

  const { data: getChatsData, isLoading: getChatsIsLoading } =
    useGetChatsQuery();
  const { data: getMessagesData, isLoading: getMessagesIsLoading } =
    useGetMessagesQuery(chatId!);
  const webSocketIsLoading = useAppSelector(selectWebSocketLoading);

  const chat = useMemo(() => {
    if (chatId) {
      return getChatsData?.payload.find((chat) => chat.id === chatId);
    }
    return undefined;
  }, [getChatsData, chatId]);

  const formattedName = useMemo(() => {
    if (!chat) {
      return '?????? ????????';
    }
    if (chat.participantDtoList[0].name.length > MAX_NAME_CHARACTERS) {
      return (
        chat.participantDtoList[0].name.slice(0, MAX_NAME_CHARACTERS - 3) +
        '...'
      );
    }
    return chat.participantDtoList[0].name;
  }, [chat]);

  const formattedUsername = useMemo(() => {
    if (!chat) {
      return '@??????';
    }
    if (
      chat.participantDtoList[0].username.length >
      MAX_USERNAME_CHARACTERS - 1
    ) {
      return (
        '@' +
        chat.participantDtoList[0].username.slice(
          0,
          MAX_USERNAME_CHARACTERS - 4
        ) +
        '...'
      );
    }
    return '@' + chat.participantDtoList[0].username;
  }, [chat]);

  return (
    <ChatContainer>
      <ChatHeader>
        {getChatsIsLoading ? (
          <ChatHeaderCardSkeleton />
        ) : (
          <ChatHeaderCard>
            <Avatar size="m" name={formattedName} />
            <ChatHeaderInfo>
              <h2>{formattedName}</h2>
              <p>{formattedUsername}</p>
            </ChatHeaderInfo>
          </ChatHeaderCard>
        )}
      </ChatHeader>
      <MessageList
        isLoading={getMessagesIsLoading}
        skeletonAmount={5}
        messages={
          getMessagesData
            ? getMessagesData.payload.content.map((message) => ({
                content: message.text,
                time: message.date,
                sentByUser: message.sentByUser,
              }))
            : []
        }
      />
      <MessageForm
        disabled={
          getChatsIsLoading || getMessagesIsLoading || webSocketIsLoading
        }
        chatId={chatId}
        senderId={auth.user?.id}
      />
    </ChatContainer>
  );
};

export default Chat;
