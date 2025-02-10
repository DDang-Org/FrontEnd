import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchDogInfoById } from '~apis/dog/fetchDogInfoById';

export const useDogInfoById = ({ dogId }: { dogId: number }) => {
  const { data: dogInfo } = useSuspenseQuery({
    queryKey: ['dogInfoById', dogId],
    queryFn: () => fetchDogInfoById({ dogId }),
    select: ({ data }) => data,
  });

  return dogInfo;
};
