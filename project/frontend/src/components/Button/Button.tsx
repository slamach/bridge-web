import styled from 'styled-components';

interface ButtonProps {
  highlight?: boolean;
}

const Button = styled.button<ButtonProps>`
  display: block;
  width: 100%;
  padding: 14px;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ highlight, theme }) =>
    highlight ? theme.colors.highlight : theme.colors.elementsBackground};
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover:not(:disabled) {
    background-color: ${({ highlight, theme }) =>
      highlight
        ? theme.colors.highlightHovered
        : theme.colors.elementsBackgroundHovered};
  }

  &:active:not(:disabled) {
    background-color: ${({ highlight, theme }) =>
      highlight
        ? theme.colors.highlightClicked
        : theme.colors.elementsBackgroundClicked};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
`;

export default Button;