import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchAccumulatedWalkInfo } from '~apis/dog/fetchAccumulatedWalkInfo';

interface useAccumulatedWalkInfoProps {
  dogId: number;
}
export const useAccumulatedWalkInfo = ({ dogId }: useAccumulatedWalkInfoProps) => {
  const { data: accumulatedWalkInfo } = useSuspenseQuery({
    queryKey: ['accumulatedWalkInfo', dogId],
    queryFn: () => fetchAccumulatedWalkInfo({ dogId }),
    select: ({ data }) => data,
  });
  return accumulatedWalkInfo;
};
