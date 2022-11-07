import styled from 'styled-components';
import { StyledAddChatForm } from '../AddChatForm/AddChatForm.styled';
import { AvatarContainer } from '../Avatar/Avatar.styled';
import Divider from '../Divider/Divider';

export const SidebarUserInfo = styled.div`
  display: flex;
  align-items: center;

  ${AvatarContainer} {
    margin-right: 10px;
  }

  div p {
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
  }

  div p:first-child {
    margin-bottom: 2px;
    font-weight: 400;
    font-size: 11px;
  }

  div p:last-child {
    font-weight: 500;
    font-size: 18px;
  }
`;

export const SidebarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 17px;
`;

export const SidebarContainer = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 409px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.surface};
  user-select: none;

  ${SidebarHeader} {
    margin-bottom: 10px;
  }

  ${Divider} {
    margin-bottom: 10px;
  }

  ${StyledAddChatForm} {
    margin-bottom: 10px;
  }
`;
