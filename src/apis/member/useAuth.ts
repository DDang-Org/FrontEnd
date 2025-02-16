import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useMyDogInfo } from '~apis/dog/useMyDogInfo';
import { createUser, RequestUserProfile } from '~apis/member/createUser';
import { fetchUser, FetchUserResponseType } from '~apis/member/fetchUser';
import { logout } from '~apis/member/logout';
import { reissueToken } from '~apis/member/reissueToken';
import { useToast } from '~hooks/useToast';
import { queryClient } from '~providers/QueryClientProvider';
import { UseMutationCustomOptions, APIResponse, UseQueryCustomOptions, ErrorResponse } from '~types/api';
import { removeEmail, storeEmail } from '~utils/controlEmail';

const useSignup = (mutationOptions?: UseMutationCustomOptions) => {
  const { successToast } = useToast();
  return useMutation({
    mutationFn: (userInfo: RequestUserProfile) => createUser(userInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myDogInfo'] });
      successToast('회원가입이 완료되었습니다.');
    },
    ...mutationOptions,
  });
};

const useMyInfo = (
  queryOptions?: UseQueryCustomOptions<APIResponse<FetchUserResponseType>, APIResponse<FetchUserResponseType>>,
) => {
  const { data, isSuccess, isError } = useQuery<APIResponse<FetchUserResponseType>, ErrorResponse>({
    queryKey: ['myInfo'],
    queryFn: fetchUser,
    ...queryOptions,
  });

  useEffect(() => {
    if (isSuccess && data) {
      (async () => {
        const email = data.data.email;
        await storeEmail(email);
      })();
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError) {
      (async () => {
        await removeEmail();
      })();
    }
  }, [isError]);

  return data;
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
  const isLoggedIn = myDogInfo.isSuccess;
  const myInfo = useMyInfo({
    enabled: isLoggedIn,
  });
  const logoutMutation = useLogout();
  const hasDog = Array.isArray(myDogInfo.data) && myDogInfo.data.length > 0;

  return { signupMutaion, myDogInfo, myInfo, logoutMutation, isLoggedIn, hasDog };
};
