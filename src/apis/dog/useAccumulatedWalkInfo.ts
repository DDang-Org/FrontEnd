import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchAccumulatedWalkInfo } from '~apis/dog/fetchAccumulatedWalkInfo';

interface useAccumulatedWalkInfoProps {
  memberId: number;
}
export const useAccumulatedWalkInfo = ({ memberId }: useAccumulatedWalkInfoProps) => {
  const { data: accumulatedWalkInfo } = useSuspenseQuery({
    queryKey: ['accumulatedWalkInfo', memberId],
    queryFn: () => fetchAccumulatedWalkInfo({ memberId }),
    select: ({ data }) => data,
  });
  return accumulatedWalkInfo;
};
