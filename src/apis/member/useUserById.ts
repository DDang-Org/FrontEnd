import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchUserById, FetchUserByIdRequestType } from '~apis/member/fetchUserById';

export const useUserById = ({ memberId }: FetchUserByIdRequestType) => {
  const { data: userInfo } = useSuspenseQuery({
    queryKey: ['userInfoById', memberId],
    queryFn: () => fetchUserById({ memberId }),
    select: ({ data }) => data,
  });

  return userInfo;
};
