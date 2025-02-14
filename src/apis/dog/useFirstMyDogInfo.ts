import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchMyDogInfo } from '~apis/dog/fetchMyDogInfo';

export const useFirstMyDogInfo = () => {
  const { data: myFirstDogInfo } = useSuspenseQuery({
    queryKey: ['fetchMyDogInfo'],
    queryFn: fetchMyDogInfo,
    select: ({ data }) => data[0],
  });
  return myFirstDogInfo;
};
