import { updateFamilyRepresentative } from '~apis/family/updateFamilyRepresentative';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useFamilyRepresentative = (memberId: number) => {
  const { data: familyRepresentative } = useSuspenseQuery({
    queryKey: ['familyRepresentative', memberId],
    queryFn: ({ queryKey }) => {
      const [, extractedMemberId] = queryKey as [string, number]; // 변수명 변경
      return updateFamilyRepresentative({ memberId: extractedMemberId });
    },
    select: ({ data }) => data,
  });
  return familyRepresentative;
};
