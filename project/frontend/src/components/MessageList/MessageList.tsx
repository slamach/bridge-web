import { useLayoutEffect, useRef } from 'react';
import Message, { MessageProps } from '../Message/Message';
import MessageSkeleton from '../Message/MessageSkeleton';
import {
  MessageListContainer,
  MessageListScrollArea,
  MessageListScrollBar,
  MessageListThumb,
  MessageListViewPort,
  StyledMessageList,
} from './MessageList.styled';

interface MessageListProps {
  messages: MessageProps[];
  isLoading?: boolean;
  skeletonAmount?: number;
}

const MessageList = (props: MessageListProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!props.isLoading) {
      scrollRef.current!.scrollTo(0, scrollRef.current!.scrollHeight);
    }
  }, [props.isLoading, props.messages]);

  return (
    <MessageListScrollArea>
      <MessageListViewPort ref={scrollRef}>
        <MessageListContainer>
          <StyledMessageList>
            {props.isLoading
              ? Array(props.skeletonAmount || 4)
                  .fill(0)
                  .map((_, index) => (
                    <li key={index}>
                      <MessageSkeleton reversed={index % 2 === 0} />
                    </li>
                  ))
              : props.messages.map((message, index) => (
                  <li key={index}>
                    <Message {...message} />
                  </li>
                ))}
          </StyledMessageList>
        </MessageListContainer>
      </MessageListViewPort>
      <MessageListScrollBar>
        <MessageListThumb />
      </MessageListScrollBar>
    </MessageListScrollArea>
  );
};

export default MessageList;
