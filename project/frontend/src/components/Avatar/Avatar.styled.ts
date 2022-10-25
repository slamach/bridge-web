import styled from 'styled-components';

interface AvatarContainerProps {
  size: 's' | 'm';
}

export const AvatarContainer = styled.div<AvatarContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.elementsBackground};
  border-radius: 50%;
  user-select: none;

  p {
    margin: 0;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ size }) => {
    if (size === 's') {
      return `
        width: 45px;
        height: 45px;

        p {
          font-size: 18px;
        }
      `;
    } else if (size === 'm') {
      return `
        width: 62px;
        height: 62px;

        p {
          font-size: 23px;
        }
      `;
    }
  }}
`;
