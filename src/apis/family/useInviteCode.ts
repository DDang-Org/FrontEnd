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

export const useVerifyInviteCode = (mutationOptions?: UseMutationCustomOptions) => {
  return useMutation({
    mutationFn: (inviteCode: string) => verifyInviteCode(inviteCode),
    ...mutationOptions,
  });
};

export const useJoinFamily = (mutationOptions?: UseMutationCustomOptions) => {
  return useMutation({
    mutationFn: (inviteCode: string) => joinFamily(inviteCode),
    ...mutationOptions,
  });
};
