import styled from 'styled-components';

interface MessageContainerProps {
  sentByUser?: boolean;
}

export const MessageContainer = styled.div<MessageContainerProps>`
  display: flex;
  flex-direction: ${({ sentByUser }) => (sentByUser ? 'row-reverse' : 'row')};
  align-items: center;

  p {
    margin: 0;
    margin-right: ${({ sentByUser }) => (sentByUser ? '0' : '5px')};
    margin-left: ${({ sentByUser }) => (sentByUser ? '5px' : 0)};
    padding: 7px 10px;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme, sentByUser }) =>
      sentByUser ? theme.colors.highlight : theme.colors.elementsBackground};
    border-radius: 18px;
  }

  time {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.6;
    user-select: none;
  }
`;
