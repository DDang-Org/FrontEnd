import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchTodayWalkInfo } from '~apis/dog/fetchTodayWalkInfo';

interface useTodayWalkInfoProps {
  dogId: number;
}

export const useTodayWalkInfo = ({ dogId }: useTodayWalkInfoProps) => {
  const { data: todayWalkInfo } = useSuspenseQuery({
    queryKey: ['todayWalkInfo', dogId],
    queryFn: () => fetchTodayWalkInfo({ dogId }),
    select: ({ data }) => data,
  });
  return todayWalkInfo;
};
