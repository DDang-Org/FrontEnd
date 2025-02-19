import { useQuery } from '@tanstack/react-query';
import { fetchMyDogInfo, FetchMyDogInfoResponseType } from '~apis/dog/fetchMyDogInfo';
import { UseQueryCustomOptions } from '~types/api';

export const useMyDogInfo = (queryOptions?: UseQueryCustomOptions<FetchMyDogInfoResponseType[]>) => {
  return useQuery({
    queryKey: ['myDogInfo'],
    queryFn: fetchMyDogInfo,
    ...queryOptions,
  });
};
