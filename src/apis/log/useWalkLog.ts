import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useMyDogInfo } from '~apis/dog/useMyDogInfo';
import { fetchLogDetails } from '~apis/log/fetchLogDetails';
import { fetchWalkDates } from '~apis/log/fetchWalkDates';

const useWalkDates = (dogId: number) => {
  const { data } = useQuery({
    queryKey: ['walkDates', dogId],
    queryFn: () => fetchWalkDates({ dogId }),
    placeholderData: keepPreviousData,
    select: ({ data }) => data,
  });

  return data;
};

const useLogDetails = (dogId: number, selectDate: string) => {
  const { data } = useQuery({
    queryKey: ['walkDetails', dogId, selectDate],
    queryFn: () => fetchLogDetails({ selectDate, dogId }),
    placeholderData: keepPreviousData,
    select: ({ data }) => data,
  });

  return data;
};

export const useWalkLog = (selectDate: string) => {
  const myDogInfo = useMyDogInfo();
  const walkDates = useWalkDates(myDogInfo[0].dogId);
  const logDetails = useLogDetails(myDogInfo[0].dogId, selectDate);

  return { walkDates, logDetails };
};
