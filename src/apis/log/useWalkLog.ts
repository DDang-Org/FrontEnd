import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useMyDogInfo } from '~apis/dog/useMyDogInfo';
import { fetchLogDetails } from '~apis/log/fetchLogDetails';
import { fetchWalkDates } from '~apis/log/fetchWalkDates';

const useWalkDates = (dogId: number) => {
  const { data } = useQuery({
    queryKey: ['walkDates', dogId],
    queryFn: () => fetchWalkDates({ dogId }),
    select: ({ data }) => data,
  });

  return data;
};

const useLogDetails = (dogId: number, selectDate: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['walkDetails', dogId, selectDate],
    queryFn: () => fetchLogDetails({ selectDate, dogId }),
    select: ({ data }) => data,
  });

  return data;
};

export const useWalkLog = (selectDate: string) => {
  const myDogInfo = useMyDogInfo();
  if (!myDogInfo || !myDogInfo[0].dogId) {
    return { walkDates: undefined, logDetails: undefined };
  }
  const walkDates = useWalkDates(myDogInfo[0].dogId);
  const logDetails = useLogDetails(myDogInfo[0].dogId, selectDate);

  return { walkDates, logDetails };
};
