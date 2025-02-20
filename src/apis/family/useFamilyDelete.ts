import { useSuspenseQuery } from '@tanstack/react-query';
import { deleteFamily } from '~apis/family/deleteFamily';

export const useDeleteFamily = (memberId: number) => {
  return useSuspenseQuery({
    queryKey: ['familyDelete', memberId], // queryKey에 memberId 포함
    queryFn: deleteFamily,
    select: ({ data }) => data, // 응답 데이터 선택
  });
};
