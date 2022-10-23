import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQuery } from './baseQuery';

const api = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
});

export default api;
