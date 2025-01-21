import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchUser } from '~apis/members/fetchUser';

export const useUser = () => {
  const { data: userInfo } = useSuspenseQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
    select: ({ data }) => data,
  });
  return userInfo;
};
