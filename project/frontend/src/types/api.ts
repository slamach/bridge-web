export interface User {
  id: string;
  name: string;
  username: string;
}

export interface AuthLoginDTO {
  username: string;
  password: string;
}

export interface AuthRegisterDTO {
  name: string;
  username: string;
  password: string;
}

export interface AuthResponse {
  payload: {
    user: User;
    token: string;
  };
}

export interface Message {
  id: string;
  text: string;
  date: string;
  sentByUser: boolean;
}

export interface Chat {
  id: string;
  participantDtoList: User[];
  lastMessage: Message;
}

export const ErrorStatusArray = [
  'OK',
  'BAD_REQUEST',
  'UNAUTHORIZED',
  'VALIDATION_EXCEPTION',
  'EXCEPTION',
  'WRONG_CREDENTIALS',
  'ACCESS_DENIED',
  'NOT_FOUND',
  'DUPLICATE_ENTITY',
] as const;

export type ErrorStatus = typeof ErrorStatusArray[number];

export interface ErrorResponse {
  status: ErrorStatus;
  code: number;
  message: string;
}
