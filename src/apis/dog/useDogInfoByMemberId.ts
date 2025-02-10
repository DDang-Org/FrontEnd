import { useQuery } from '@tanstack/react-query';
import { fetchDogInfoByMemberId } from '~apis/dog/fetchDogInfoByMemberId';

export const useDogInfoByMemberId = ({ memberId }: { memberId: number }) => {
  const dogInfoByMemberId = useQuery({
    queryKey: ['dogInfoByMemberId', memberId],
    queryFn: () => fetchDogInfoByMemberId({ memberId }),
  });
  return dogInfoByMemberId.data?.data;
};
