import styled from 'styled-components';

export const AddChatInput = styled.input`
  padding: 10px 12px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.elementsBackground};
  border: none;
  border-radius: 12px;

  &::placeholder {
    opacity: 0.6;
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledAddChatForm = styled.form`
  display: flex;
  align-items: center;
  padding: 0 17px;
  gap: 10px;

  ${AddChatInput} {
    flex-grow: 1;
  }
`;
