import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchUserById, FetchUserByIdRequestType, FetchUserByIdResponseType } from '~apis/member/fetchUserById';

export const useUserById = ({ memberId }: FetchUserByIdRequestType) => {
  return useQuery<FetchUserByIdResponseType>({
    queryKey: ['userInfoById', memberId],
    queryFn: () => fetchUserById({ memberId }),
    placeholderData: keepPreviousData,
  });
};
