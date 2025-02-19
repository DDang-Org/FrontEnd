import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { fetchUser } from '~apis/member/fetchUser';
import { updateUser } from '~apis/member/updateUser';
import { useToast } from '~hooks/useToast';
import { queryClient } from '~providers/QueryClientProvider';
import { UseMutationCustomOptions } from '~types/api';
import { UserProfileType } from '~types/user-profile';

export const useUser = () => {
  const { data: userInfo } = useSuspenseQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
    select: ({ data }) => data,
  });
  return userInfo;
};

export const useUpdateUser = (mutationOptions?: UseMutationCustomOptions) => {
  const { successToast } = useToast();

  return useMutation({
    mutationFn: (userInfo: UserProfileType) => updateUser(userInfo),
    onSuccess: () => successToast('견주 정보가 수정되었습니다'),
    onError: error => console.error(error),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['user'] }),
    ...mutationOptions,
  });
};
