import styled from 'styled-components';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

export const StyledChatList = styled.ul`
  margin: 0;
  padding: 0;
  padding-right: 17px;
  list-style: none;
`;

export const ChatListScrollArea = styled(ScrollAreaPrimitive.Root)`
  overflow: hidden;
`;

export const ChatListViewPort = styled(ScrollAreaPrimitive.Viewport)`
  width: 100%;
  height: 100%;
`;

export const ChatListScrollBar = styled(ScrollAreaPrimitive.Scrollbar)`
  display: flex;
  width: 7px;
  background-color: ${({ theme }) => theme.colors.surface};
  user-select: none;
  touch-action: none;
`;

export const ChatListThumb = styled(ScrollAreaPrimitive.Thumb)`
  position: 'relative';
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 7px;
  opacity: 0.75;
`;
