import ChatCard, { ChatCardProps } from '../ChatCard/ChatCard';
import {
  ChatListScrollArea,
  ChatListScrollBar,
  ChatListThumb,
  ChatListViewPort,
  StyledChatList,
} from './ChatList.styled';

interface ChatListProps {
  chats: ChatCardProps[];
}

const ChatList = (props: ChatListProps) => {
  return (
    <ChatListScrollArea scrollHideDelay={100}>
      <ChatListViewPort>
        <StyledChatList>
          {props.chats.map((chat) => (
            <li key={chat.chatId}>
              <ChatCard {...chat} />
            </li>
          ))}
        </StyledChatList>
      </ChatListViewPort>
      <ChatListScrollBar orientation="vertical">
        <ChatListThumb />
      </ChatListScrollBar>
    </ChatListScrollArea>
  );
};

export default ChatList;
