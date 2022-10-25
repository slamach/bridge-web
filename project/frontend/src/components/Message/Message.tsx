import { MessageContainer } from './Message.styled';

export interface MessageProps {
  content: string;
  time: string;
  sentByUser?: boolean;
}

const Message = (props: MessageProps) => {
  return (
    <MessageContainer sentByUser={props.sentByUser}>
      <p>{props.content}</p>
      <time>{props.time}</time>
    </MessageContainer>
  );
};

export default Message;
