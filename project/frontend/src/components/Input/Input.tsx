import React, { InputHTMLAttributes } from 'react';
import { VisuallyHidden } from '../App/App.styled';
import { HiddenLabel, StyledInput } from './Input.styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  if (props.label) {
    return (
      <HiddenLabel>
        <VisuallyHidden as="span">{props.label}</VisuallyHidden>
        <StyledInput {...props} ref={ref} />
      </HiddenLabel>
    );
  }

  return <StyledInput {...props} ref={ref} />;
});
export default Input;
