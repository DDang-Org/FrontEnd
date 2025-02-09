import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { createInviteCode } from '~apis/family/createInviteCode';
import { joinFamily } from '~apis/family/joinFamily';
import { verifyInviteCode } from '~apis/family/verifyInviteCode';
import { UseMutationCustomOptions } from '~types/api';

export const useCreateInviteCode = () => {
  return useSuspenseQuery({
    queryKey: ['createInviteCode'],
    queryFn: createInviteCode,
    select: ({ data }) => data,
    refetchInterval: 10000,
  });
};

export const useVerifyInviteCode = (inviteCode: string, mutationOptions?: UseMutationCustomOptions) => {
  return useMutation({
    mutationFn: () => verifyInviteCode(inviteCode),
    ...mutationOptions,
  });
};

export const useJoinFamily = (inviteCode: string, mutationOptions?: UseMutationCustomOptions) => {
  return useMutation({
    mutationFn: () => joinFamily(inviteCode),
    ...mutationOptions,
  });
};
