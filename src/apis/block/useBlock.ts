import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { blockUser } from '~apis/block/blockUser';
import { UseMutationCustomOptions } from '~types/api';
import { unblockUser } from './unblockUser';
import { fetchBlockedUsers } from '~apis/member/fetchBlockedUsers';

const useBlockedUsers = () => {
  return useSuspenseQuery({
    queryFn: fetchBlockedUsers,
    queryKey: ['blockedUsers'],
    select: ({ data }) => data,
  });
};

const useBlockUser = (mutationOptions?: UseMutationCustomOptions) => {
  return useMutation({
    mutationFn: (blockedId: number) => blockUser(blockedId),
    ...mutationOptions,
  });
};

const useUnblockUser = (mutationOptions?: UseMutationCustomOptions) => {
  return useMutation({
    mutationFn: (blockId: number) => unblockUser(blockId),
    ...mutationOptions,
  });
};

export const useBlock = () => {
  const blockedUsers = useBlockedUsers();
  const blockUserMutation = useBlockUser();
  const unblockUserMutation = useUnblockUser();

  return { blockedUsers, blockUserMutation, unblockUserMutation };
};
