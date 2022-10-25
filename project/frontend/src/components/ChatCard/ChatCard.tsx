import { useMemo } from 'react';
import {
  getDayAndMonthFromDate,
  getTimeFromDate,
  isToday,
} from '../../utils/dateUtils';
import Avatar from '../Avatar/Avatar';
import { ChatCardContainer, ChatCardInfo } from './ChatCard.styled';

export interface ChatCardProps {
  chatId: string;
  name: string;
  lastMessage?: string | null;
  sentByUser?: boolean | null;
  time?: string | null;
}

const MAX_NAME_CHARACTERS = 20;
const MAX_MESSAGE_CHARACTERS = 28;

const ChatCard = (props: ChatCardProps) => {
  const formattedName = useMemo(() => {
    if (props.name.length > MAX_NAME_CHARACTERS) {
      return props.name.slice(0, MAX_NAME_CHARACTERS - 3) + '...';
    }
    return props.name;
  }, [props.name]);

  const formattedMessage = useMemo(() => {
    if (!props.lastMessage) {
      return '';
    }
    const fullMessage = (props.sentByUser ? 'You: ' : '') + props.lastMessage;
    if (fullMessage.length > MAX_MESSAGE_CHARACTERS) {
      return fullMessage.slice(0, MAX_MESSAGE_CHARACTERS - 3) + '...';
    }
    return fullMessage;
  }, [props.lastMessage, props.sentByUser]);

  const timeObject = useMemo(() => {
    return props.time ? new Date(props.time) : null;
  }, [props.time]);

  return (
    <ChatCardContainer to={`/${props.chatId}`}>
      <Avatar size="m" name={formattedName} />
      <ChatCardInfo>
        <div>
          <h2>{formattedName}</h2>
          <p>{formattedMessage || 'No messages yet'}</p>
        </div>
        {Boolean(props.time) && Boolean(timeObject) && (
          <time>
            {isToday(timeObject!)
              ? getTimeFromDate(timeObject!)
              : getDayAndMonthFromDate(timeObject!)}
          </time>
        )}
      </ChatCardInfo>
    </ChatCardContainer>
  );
};

export default ChatCard;
