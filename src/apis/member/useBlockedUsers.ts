import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchBlockedUsers } from '~apis/member/fetchBlockedUsers';

export const useBlockedUsers = () => {
  const { data: blockedUsers } = useSuspenseQuery({
    queryKey: ['blockedUsers'],
    queryFn: fetchBlockedUsers,
    select: ({ data }) => data,
  });
  return blockedUsers;
};
