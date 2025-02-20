import { updateFamilyRepresentative } from '~apis/family/updateFamilyRepresentative';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useFamilyRepresentative = (memberId: number) => {
  const { data: familyRepresentative } = useSuspenseQuery({
    queryKey: ['familyRepresentative', memberId],
    queryFn: async ({ queryKey }) => {
      const [, extractedMemberId] = queryKey as [string, number];
      return updateFamilyRepresentative({ queryKey: ['familyRepresentative', extractedMemberId] });
    },
    select: ({ data }) => data,
  });

  return familyRepresentative;
};
