import { useMemo } from 'react';
import {
  getDayAndMonthFromDate,
  getTimeFromDate,
  isToday,
} from '../../utils/dateUtils';
import { MessageContainer } from './Message.styled';

export interface MessageProps {
  content: string;
  time: string;
  sentByUser?: boolean;
}

const Message = (props: MessageProps) => {
  const timeObject = useMemo(() => {
    return props.time ? new Date(props.time) : null;
  }, [props.time]);

  return (
    <MessageContainer sentByUser={props.sentByUser}>
      <p>{props.content}</p>
      <time>
        {isToday(timeObject!)
          ? getTimeFromDate(timeObject!)
          : getDayAndMonthFromDate(timeObject!)}
      </time>
    </MessageContainer>
  );
};

export default Message;
