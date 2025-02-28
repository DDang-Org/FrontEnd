import { useMutation } from '@tanstack/react-query';
import { deleteFriend } from '~apis/friend/deleteFriend';
import { useToast } from '~hooks/useToast';
import { queryClient } from '~providers/QueryClientProvider';
import { UseMutationCustomOptions } from '~types/api';

export const useDeleteFriend = (mutationOptions?: UseMutationCustomOptions) => {
  const { successToast } = useToast();
  return useMutation({
    mutationFn: (memberId: number) => deleteFriend(memberId),
    onSuccess: () => {
      successToast('친구목록에서 삭제되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['friends'] });
    },
    ...mutationOptions,
  });
};
