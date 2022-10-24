import ChatCard, { ChatCardProps } from '../ChatCard/ChatCard';
import ChatCardSkeleton from '../ChatCard/ChatCardSkeleton';
import {
  ChatListScrollArea,
  ChatListScrollBar,
  ChatListThumb,
  ChatListViewPort,
  StyledChatList,
} from './ChatList.styled';

interface ChatListProps {
  chats: ChatCardProps[];
  isLoading?: boolean;
  skeletonAmount?: number;
}

const ChatList = (props: ChatListProps) => {
  return (
    <ChatListScrollArea scrollHideDelay={100}>
      <ChatListViewPort>
        <StyledChatList>
          {props.isLoading
            ? Array(props.skeletonAmount || 6)
                .fill(0)
                .map((_, index) => (
                  <li key={index}>
                    <ChatCardSkeleton />
                  </li>
                ))
            : props.chats.map((chat) => (
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
