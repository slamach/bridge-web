import styled from 'styled-components';
import checkmark from '../../assets/img/checkmark.svg';

export const CheckboxBox = styled.span`
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.elementsBackground};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.elementsBackgroundHovered};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.elementsBackgroundClicked};
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    background-image: url(${checkmark});
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
  }
`;

export const CheckboxInput = styled.input`
  position: absolute;
  appearance: none;

  &:checked + ${CheckboxBox} {
    background-color: ${({ theme }) => theme.colors.highlight};

    &:hover {
      background-color: ${({ theme }) => theme.colors.highlightHovered};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.highlightClicked};
    }

    &::after {
      opacity: 1;
    }
  }
`;

interface StyledCheckboxProps {
  orientation?: 'horizontal' | 'vertical';
}

export const StyledCheckbox = styled.label<StyledCheckboxProps>`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};

  ${CheckboxBox} {
    margin-right: 4px;
  }

  ${({ orientation }) => {
    if (orientation === 'vertical') {
      return `
        flex-direction: column;

        ${CheckboxBox} {
          margin-right: 0;
          margin-bottom: 4px;
        }
      `;
    }
  }};
`;
