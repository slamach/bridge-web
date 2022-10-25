import React, { useState } from 'react';
import { useSendMessageMutation } from '../../state/api/messagesAPI';
import { VisuallyHidden } from '../App/App.styled';
import Button from '../Button/Button';
import {
  MessageFormContainer,
  MessageInput,
  StyledMessageForm,
} from './MessageForm.styled';
import { ReactComponent as ArrowIcon } from '../../assets/img/arrow.svg';

interface MessageFormProps {
  senderId?: string;
  chatId?: string;
  disabled?: boolean;
}

const MessageForm = (props: MessageFormProps) => {
  const [value, setValue] = useState<string>('');
  const [sendMessage] = useSendMessageMutation();

  const finallyDisabled = props.disabled || !props.chatId || !props.senderId;

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(evt.target.value);
  };

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (evt.key === 'Enter' && !evt.shiftKey) {
      evt.preventDefault();
      submit();
    }
  };

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    if (value.length > 0 && !finallyDisabled) {
      submit();
    }
  };

  const submit = () => {
    sendMessage({
      senderId: props.senderId!,
      chatId: props.chatId!,
      text: value,
    });
    setValue('');
  };

  return (
    <MessageFormContainer>
      <StyledMessageForm onSubmit={handleSubmit}>
        <MessageInput
          minRows={1}
          maxRows={5}
          value={value}
          placeholder="Send message..."
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
