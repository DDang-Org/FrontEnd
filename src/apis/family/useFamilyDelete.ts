import { useSuspenseQuery } from '@tanstack/react-query';
import { deleteFamily } from '~apis/family/deleteFamily';

export const useDeleteFamily = (memberId: number) => {
  return useSuspenseQuery({
    queryKey: ['familyDelete', memberId],
    queryFn: deleteFamily,
    select: ({ data }) => data,
  });
};
