import { useSuspenseQuery } from '@tanstack/react-query';
import { deleteFamilyMySelf } from './deleteFamilyMySelf';

export const useDeleteFamilyMySelf = () => {
  return useSuspenseQuery({
    queryKey: ['familyDeleteMySelf'],
    queryFn: deleteFamilyMySelf,
    select: ({ data }) => data,
  });
};
