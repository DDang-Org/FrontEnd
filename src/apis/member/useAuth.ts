import { useMutation } from '@tanstack/react-query';
import { useMyDogInfo } from '~apis/dog/useMyDogInfo';
import { createUser, RequestUserProfile } from '~apis/member/createUser';
import { logout } from '~apis/member/logout';
import { reissueToken } from '~apis/member/reissueToken';
import { queryClient } from '~providers/QueryClientProvider';
import { UseMutationCustomOptions } from '~types/api';

const useSignup = (mutationOptions?: UseMutationCustomOptions) => {
  return useMutation({
    mutationFn: (userInfo: RequestUserProfile) => createUser(userInfo),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['myDogInfo'] }),
    ...mutationOptions,
  });
};

export const useReissueToken = (mutationOptions?: UseMutationCustomOptions) => {
  return useMutation({
    mutationFn: reissueToken,
    ...mutationOptions,
  });
};

const useLogout = (mutationOptions?: UseMutationCustomOptions) => {
  return useMutation({
    mutationFn: logout,
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['myDogInfo'] }),
    ...mutationOptions,
  });
};

export const useAuth = () => {
  const signupMutaion = useSignup();
  const myDogInfo = useMyDogInfo();
  const logoutMutation = useLogout();
  const isLoggedIn = myDogInfo.isSuccess;
  const hasDog = Array.isArray(myDogInfo.data) && myDogInfo.data.length > 0;

  return { signupMutaion, myDogInfo, logoutMutation, isLoggedIn, hasDog };
};
