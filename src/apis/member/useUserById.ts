import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchUserById, FetchUserByIdRequestType } from '~apis/member/fetchUserById';

export const useUserById = ({ memberId }: FetchUserByIdRequestType) => {
  const { data } = useQuery({
    queryKey: ['userInfoById', memberId],
    queryFn: () => fetchUserById({ memberId }),
    placeholderData: keepPreviousData,
  });

  return data?.data;
};
