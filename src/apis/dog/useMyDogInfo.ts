import { useQuery } from '@tanstack/react-query';
import { fetchMyDogInfo } from '~apis/dog/fetchMyDogInfo';

export const useMyDogInfo = () => {
  return useQuery({
    queryKey: ['myDogInfo'],
    queryFn: fetchMyDogInfo,
  });
};
