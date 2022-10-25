import styled from 'styled-components';

export const StyledInput = styled.input`
  display: inline-block;
  padding: 14px;
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border: none;

  &::placeholder {
    opacity: 0.45;
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const HiddenLabel = styled.label`
  display: flex;
  flex-direction: column;
`;
