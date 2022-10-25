import styled from 'styled-components';
import { AvatarContainer } from '../../components/Avatar/Avatar.styled';
import { MessageListScrollArea } from '../../components/MessageList/MessageList.styled';

export const ChatHeaderInfo = styled.div`
  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin: 0;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.6;
  }
`;

export const ChatHeaderCard = styled.div`
  display: flex;
  align-items: center;

  ${AvatarContainer} {
    margin-right: 10px;
  }
`;

export const ChatHeader = styled.header`
  padding: 9px 20px;
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const ChatContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 30px;

  ${MessageListScrollArea} {
    flex-grow: 1;
    margin-bottom: 20px;
  }

  ${ChatHeader} {
    margin-bottom: 20px;
  }
`;
