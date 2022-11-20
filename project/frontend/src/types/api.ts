export interface User {
  id: number;
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

export interface PayloadResponse<T> {
  payload: T;
}

export interface AuthResponse
  extends PayloadResponse<{
    user: User;
    token: string;
  }> {}

export interface Message {
  id: number;
  text: string;
  date: string;
  sentByUser: boolean;
  senderId: number;
  chatId: number;
}

export interface Chat {
  id: number;
  participantDtoList: User[];
  lastMessage: Message;
}

export interface ChatCreationDTO {
  participants: number[];
}

export interface SendMessageDTO {
  senderId: number;
  chatId: number;
  text: string;
}

export interface Page<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
}

export interface Pageable {
  page?: number;
  size?: number;
  sort?: string[];
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
