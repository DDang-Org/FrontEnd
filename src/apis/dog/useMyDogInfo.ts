import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchMyDogInfo } from '~apis/dog/fetchMyDogInfo';

export const useMyDogInfo = () => {
  const { data: myDogInfo } = useSuspenseQuery({
    queryKey: ['myDogInfo'],
    queryFn: fetchMyDogInfo,
    select: ({ data }) => data,
  });
  return myDogInfo;
};
