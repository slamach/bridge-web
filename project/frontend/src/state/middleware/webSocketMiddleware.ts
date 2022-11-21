import { Middleware } from 'redux';
import { Client, IMessage } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import {
  closeWebSocketConnection,
  publishMessage,
  startWebSocketConnection,
  webSocketConnectionStarted,
} from '../slices/webSocketSlice';
import { RootState, AppDispatch } from '../store';
import { Message } from '../../types/api';
import messagesAPI from '../api/messagesAPI';
import chatsAPI from '../api/chatsAPI';

const SOCK_URL = process.env.REACT_APP_SOCK_URL || 'http://localhost:8080/ws';
const BROKER_URL = process.env.REACT_APP_BROKER_URL || 'ws://localhost:8080/ws';

const webSocketMiddleware: Middleware<{}, RootState, AppDispatch> = (store) => {
  let stompClient: Client | null = null;

  return (next) => (action) => {
    if (startWebSocketConnection.match(action)) {
      const handleMessage = (stompMessage: IMessage) => {
        let message = JSON.parse(stompMessage.body) as Message;
        message = {
          ...message,
          sentByUser: message.senderId === store.getState().auth.user?.id,
        };
        store.dispatch(
          messagesAPI.util.updateQueryData(
            'getMessages',
            message.chatId,
            (draft) => {
              draft.payload.content.unshift(message);
            }
          )
        );
        store.dispatch(
          chatsAPI.util.updateQueryData('getChats', undefined, (draft) => {
            const chat = draft.payload.find(
              (chat) => chat.id === message.chatId
            );
            if (chat) {
              chat.lastMessage = message;
            } else {
              store.dispatch(chatsAPI.util.invalidateTags(['Chats']));
            }
          })
        );
      };

      stompClient = new Client({
        brokerURL: BROKER_URL,
        webSocketFactory() {
          return new SockJS(SOCK_URL);
        },
        connectHeaders: {
          Authorization: 'Bearer ' + store.getState().auth.token,
        },
        onConnect() {
          stompClient!.subscribe('/user/queue/messages', handleMessage);
          store.dispatch(webSocketConnectionStarted());
        },
        debug: console.log,
      });

      stompClient.activate();
    }

    if (publishMessage.match(action) && stompClient?.connected) {
      stompClient.publish({
        destination: '/chat/messages',
        body: JSON.stringify(action.payload),
        headers: {
          Authorization: 'Bearer ' + store.getState().auth.token,
        },
      });
    }

    if (closeWebSocketConnection.match(action) && stompClient?.active) {
      stompClient.deactivate();
      stompClient = null;
    }

    next(action);
  };
};

export default webSocketMiddleware;
