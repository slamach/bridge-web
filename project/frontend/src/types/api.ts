export type User = string;

// FIXME: Вернуть правильный тип
// export interface User {
//   id: string;
//   name: string;
//   username: string;
// }

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
    // FIXME: Вернуть правильный тип
    // user: User;
    userId: string;
    token: string;
  };
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
