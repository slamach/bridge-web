import React, { useLayoutEffect, useRef, useState } from 'react';
import { VisuallyHidden } from '../App/App.styled';
import Button from '../Button/Button';
import {
  MessageFormContainer,
  MessageInput,
  StyledMessageForm,
} from './MessageForm.styled';
import { ReactComponent as ArrowIcon } from '../../assets/img/arrow.svg';
import { useAppDispatch } from '../../hooks/stateHooks';
import { publishMessage } from '../../state/slices/webSocketSlice';

interface MessageFormProps {
  senderId?: number;
  chatId?: number;
  disabled?: boolean;
}

const MessageForm = (props: MessageFormProps) => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [value, setValue] = useState<string>('');

  useLayoutEffect(() => {
    inputRef.current?.focus();
  });

  const finallyDisabled = props.disabled || !props.chatId || !props.senderId;

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(evt.target.value);
  };

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (evt.key === 'Enter' && !evt.shiftKey) {
      handleSubmit(evt);
    }
  };

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    const valueTrimmed = value.trim();

    if (valueTrimmed.length > 0 && !finallyDisabled) {
      submit(valueTrimmed);
    }
  };

  const submit = (value: string) => {
    dispatch(
      publishMessage({
        senderId: props.senderId!,
        chatId: props.chatId!,
        text: value,
      })
    );
    setValue('');
  };

  return (
    <MessageFormContainer>
      <StyledMessageForm onSubmit={handleSubmit}>
        <MessageInput
          minRows={1}
          maxRows={5}
          value={value}
          ref={inputRef}
          placeholder="Enter a message..."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={finallyDisabled}
          autoFocus
        />
        <Button
          size="m"
          highlight
          icon
          type="submit"
          disabled={finallyDisabled}
        >
          <VisuallyHidden as="span">Send</VisuallyHidden>
          <ArrowIcon />
        </Button>
      </StyledMessageForm>
    </MessageFormContainer>
  );
};

export default MessageForm;
