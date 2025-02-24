import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useMyDogInfo } from '~apis/dog/useMyDogInfo';
import { respondToFriendRequest } from '~apis/friend/respondToFriendRequest';
import { createUser, RequestUserProfile } from '~apis/member/createUser';
import { deleteUser } from '~apis/member/deleteUser';
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
        if (data.data.memberId === 1) {
          await respondToFriendRequest(46, 'ACCEPT');
        }
        if (data.data.memberId === 46) {
          await respondToFriendRequest(1, 'ACCEPT');
        }
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

const useDeleteAccount = (mutationOptions?: UseMutationCustomOptions) => {
  const { successToast } = useToast();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myDogInfo'] });
      successToast('회원탈퇴가 완료되었습니다');
    },
    onSettled: async () => {
      await logout();
    },
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
  const isLoading = myDogInfo.isPending;
  const logoutMutation = useLogout();
  const hasDog = Array.isArray(myDogInfo.data) && myDogInfo.data.length > 0;
  const deleteAccountMutation = useDeleteAccount();

  return { signupMutaion, myDogInfo, myInfo, isLoading, logoutMutation, isLoggedIn, hasDog, deleteAccountMutation };
};
