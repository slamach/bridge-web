import styled from 'styled-components';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

export const StyledMessageList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  gap: 5px;
  width: 725px;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  svg {
    display: block;
  }

  svg[data-direction='normal'] {
    margin-left: auto;
  }

  svg[data-direction='reversed'] {
    margin-right: auto;
  }
`;

export const MessageListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-right: 17px;

  ${StyledMessageList} {
    flex-grow: 1;
  }
`;

export const MessageListScrollArea = styled(ScrollAreaPrimitive.Root)`
  overflow: hidden;
`;

export const MessageListViewPort = styled(ScrollAreaPrimitive.Viewport)`
  width: 100%;
  height: 100%;

  & > div {
    height: 100%;
  }
`;

export const MessageListScrollBar = styled(ScrollAreaPrimitive.Scrollbar)`
  display: flex;
  width: 7px;
  background-color: ${({ theme }) => theme.colors.background};
  user-select: none;
  touch-action: none;
`;

export const MessageListThumb = styled(ScrollAreaPrimitive.Thumb)`
  position: 'relative';
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 7px;
  opacity: 0.75;
`;
