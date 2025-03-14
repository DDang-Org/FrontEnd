import { useMutation } from '@tanstack/react-query';
import { respondToFriendRequest } from '~apis/friend/respondToFriendRequest';
import { UseMutationCustomOptions } from '~types/api';

export const useRespondToFriendRequest = (mutationOptions?: UseMutationCustomOptions) => {
  return useMutation({
    mutationFn: ({ memberId, decision }: { memberId: number; decision: 'ACCEPT' | 'DENY' }) =>
      respondToFriendRequest(memberId, decision),
    ...mutationOptions,
  });
};
