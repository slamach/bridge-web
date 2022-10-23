import { ErrorResponse, ErrorStatusArray } from '../types/api';

export function isErrorResponse(
  error: unknown
): error is { status: number; data: ErrorResponse } {
  return (
    typeof error === 'object' &&
    error != null &&
    'status' in error &&
    typeof (error as any).status === 'number' &&
    'data' in error &&
    typeof (error as any).data === 'object' &&
    'status' in (error as any).data &&
    typeof ((error as any).data as any).message === 'string' &&
    ErrorStatusArray.includes(((error as any).data as any).status) &&
    'code' in (error as any).data &&
    typeof ((error as any).data as any).code === 'number' &&
    'message' in (error as any).data &&
    typeof ((error as any).data as any).message === 'string'
  );
}

export const handleAuthError = (
  err: unknown,
  handler: (message: string) => void
) => {
  if (isErrorResponse(err)) {
    switch (err.data.code) {
      case 1:
        handler('Invalid username or password');
        break;
      default:
        handler('Unexpected server error. Try again!');
    }
  } else {
    handler('Unexpected error. Try again!');
  }
};
