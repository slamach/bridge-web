import Message, { MessageProps } from '../Message/Message';
import { MessageListContainer, StyledMessageList } from './MessageList.styled';

interface MessageListProps {
  messages: MessageProps[];
  isLoading?: boolean;
  skeletonAmount?: number;
}

const MessageList = (props: MessageListProps) => {
  return (
    <MessageListContainer>
      <StyledMessageList>
        {props.messages.map((message, index) => (
          <li key={index}>
            <Message {...message} />
          </li>
        ))}
      </StyledMessageList>
    </MessageListContainer>
  );
};

export default MessageList;
