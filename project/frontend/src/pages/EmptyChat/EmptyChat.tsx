import { EmptyChatContainer } from './EmptyChat.styled';
import { BigHead } from '@bigheads/core';

const EmptyChat = () => {
  return (
    <EmptyChatContainer>
      <BigHead />
      <h2>Select a chat</h2>
    </EmptyChatContainer>
  );
};

export default EmptyChat;
