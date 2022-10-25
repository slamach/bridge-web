import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const MessageInput = styled(TextareaAutosize)`
  padding: 7px 14px;
  font-family: inherit;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.elementsBackground};
  border: none;
  border-radius: 10px;
  resize: none;
  overflow: hidden;

  &::placeholder {
    opacity: 0.6;
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledMessageForm = styled.form`
  display: flex;
  align-items: center;
  width: 768px;
  margin: 0 auto;

  ${MessageInput} {
    flex-grow: 1;
    margin-right: 7px;
  }
`;

export const MessageFormContainer = styled.section``;
