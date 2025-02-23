import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { blockUser } from '~apis/block/blockUser';
import { UseMutationCustomOptions } from '~types/api';
import { unblockUser } from './unblockUser';
import { BlockedUser, fetchBlockedUsers } from '~apis/block/fetchBlockedUsers';

const useBlockedUserList = () => {
  return useSuspenseQuery({
    queryKey: ['allBlockedUsers'],
    queryFn: async () => {
      let allData: BlockedUser[] = [];
      let currentPage = 0;
      let isLastPage = false;

      while (!isLastPage) {
        const response = await fetchBlockedUsers(currentPage);
        allData = [...allData, ...response.data.content];
        isLastPage = response.data.last;
        currentPage += 1;
      }

      return allData;
    },
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
  const blockedUsers = useBlockedUserList().data;
  const blockUserMutation = useBlockUser();
  const unblockUserMutation = useUnblockUser();

  return { blockedUsers, blockUserMutation, unblockUserMutation };
};
