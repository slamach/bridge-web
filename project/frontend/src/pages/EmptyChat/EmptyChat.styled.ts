import styled from 'styled-components';

export const EmptyChatContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  user-select: none;

  svg {
    width: 204px;
    height: 203px;
  }

  h2 {
    font-size: 22px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
  }
`;
