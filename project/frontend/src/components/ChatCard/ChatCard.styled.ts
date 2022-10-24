import styled from 'styled-components';
import { AvatarContainer } from '../Avatar/Avatar.styled';

export const ChatCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-grow: 1;

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  }

  p,
  time {
    margin: 0;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.5;
  }
`;

export const ChatCardContainer = styled.article`
  display: flex;
  align-items: center;
  padding: 8px 17px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.surface};
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceHovered};
  }

  ${AvatarContainer} {
    margin-right: 11px;
  }
`;
