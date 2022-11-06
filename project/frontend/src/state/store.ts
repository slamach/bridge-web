import {
  combineReducers,
  configureStore,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import api from './api';
import webSocketMiddleware from './middleware/webSocketMiddleware';
import authReducer from './slices/authSlice';
import webSocketReducer from './slices/webSocketSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  websocket: webSocketReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, webSocketMiddleware),
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, undefined, any>;
