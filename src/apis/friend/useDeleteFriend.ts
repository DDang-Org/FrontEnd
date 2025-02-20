import { useMutation } from '@tanstack/react-query';
import { deleteFriend } from '~apis/friend/deleteFriend';
import { UseMutationCustomOptions } from '~types/api';

export const useDeleteFriend = (mutationOptions?: UseMutationCustomOptions) => {
  return useMutation({
    mutationFn: (memberId: number) => deleteFriend(memberId),
    ...mutationOptions,
  });
};
