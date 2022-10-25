import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '../../components/Avatar/Avatar';
import MessageList from '../../components/MessageList/MessageList';
import { useGetChatsQuery } from '../../state/api/chatsAPI';
import {
  ChatContainer,
  ChatHeader,
  ChatHeaderCard,
  ChatHeaderInfo,
} from './Chat.styled';
import ChatHeaderCardSkeleton from './ChatHeaderCardSkeleton';

const MAX_NAME_CHARACTERS = 20;
const MAX_USERNAME_CHARACTERS = 20;

const messagesMock = [
  {
    content: 'Hello ma friend!',
    time: '12:08',
    sentByUser: true,
  },
  {
    content: 'Hello!',
    time: '12:09',
    sentByUser: false,
  },
  {
    content: 'How a u!',
    time: '12:10',
    sentByUser: true,
  },
];

const Chat = () => {
  const { chatId } = useParams<{ chatId: string }>();
  const { data: getChatsData, isLoading: getChatsIsLoading } =
    useGetChatsQuery();

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
      <MessageList messages={messagesMock} />
    </ChatContainer>
  );
};

export default Chat;
