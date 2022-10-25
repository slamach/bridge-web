import styled from 'styled-components';

interface ButtonProps {
  size: 's' | 'm';
  highlight?: boolean;
  icon?: boolean;
}

const Button = styled.button<ButtonProps>`
  display: inline-block;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ highlight, theme }) =>
    highlight ? theme.colors.highlight : theme.colors.elementsBackground};
  border: none;
  cursor: pointer;
  user-select: none;
  transition: all 0.1s ease-in-out;

  ${({ size }) => {
    if (size === 's') {
      return `
        padding: 9px 14px;
        font-size: 13px;
        border-radius: 8px;
      `;
    } else if (size === 'm') {
      return `
        padding: 14px;
        font-size: 15px;
        border-radius: 14px;
      `;
    }
  }}

  ${({ icon }) =>
    icon
      ? `
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    padding: 0;
    border-radius: 50%;
  `
      : ``}

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
