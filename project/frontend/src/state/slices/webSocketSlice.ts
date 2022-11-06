import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SendMessageDTO } from '../../types/api';
import { RootState } from '../store';

interface WebSocketState {
  isLoading: boolean;
}

const initialState: WebSocketState = {
  isLoading: false,
};

const webSocketSlice = createSlice({
  name: 'websocket',
  initialState,
  reducers: {
    startWebSocketConnection: (state) => {
      state.isLoading = true;
    },
    webSocketConnectionStarted: (state) => {
      state.isLoading = false;
    },
    closeWebSocketConnection: (state) => {
      state.isLoading = false;
    },
    publishMessage: (state, action: PayloadAction<SendMessageDTO>) => {},
  },
});

export const {
  startWebSocketConnection,
  webSocketConnectionStarted,
  closeWebSocketConnection,
  publishMessage,
} = webSocketSlice.actions;

export default webSocketSlice.reducer;

export const selectWebSocketLoading = (state: RootState) =>
  state.websocket.isLoading;
