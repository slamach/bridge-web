import React, { ComponentPropsWithRef } from 'react';
import { CheckboxBox, CheckboxInput, StyledCheckbox } from './Checkbox.styled';

interface CheckboxProps extends Omit<ComponentPropsWithRef<'input'>, 'type'> {
  label?: string;
  orientation?: 'horizontal' | 'vertical';
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, orientation = 'horizontal', ...inputProps }, ref) => {
    return (
      <StyledCheckbox orientation={orientation}>
        <CheckboxInput type="checkbox" ref={ref} {...inputProps} />
        <CheckboxBox />
        <span>{label}</span>
      </StyledCheckbox>
    );
  }
);
