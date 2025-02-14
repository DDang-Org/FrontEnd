import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchUserWalkInfoById, fetchUserWalkInfoByIdResponseType } from './fetchUserWalkInfoById';

export const useUserWalkInfoById = () => {
  const { data: userWalkInfo } = useSuspenseQuery<fetchUserWalkInfoByIdResponseType>({
    queryKey: ['fetchUserWalkInfoById'],
    queryFn: fetchUserWalkInfoById,
  });
  return userWalkInfo; // 올바른 타입으로 반환
};
