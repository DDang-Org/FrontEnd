import { QueryKey, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

export type APIResponse<T> = {
  code: number;
  status: string;
  message: string;
  data: T;
};

export type ErrorResponse = APIResponse<null>;

export type UseQueryCustomOptions<TQueryFnData = unknown, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, ErrorResponse, TData, QueryKey>,
  'queryKey'
>;

export type UseMutationCustomOptions<TData = unknown, TVariables = unknown> = Omit<
  UseMutationOptions<TData, ErrorResponse, TVariables, unknown>,
  'mutationFn'
>;
