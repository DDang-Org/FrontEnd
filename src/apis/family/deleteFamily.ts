import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';

export type DeleteFamilyRequestType = {
  memberId: number;
};

export type DeleteFamilyResponseType = {};

export const deleteFamily = async ({
  memberId,
  ...params
}: DeleteFamilyRequestType): Promise<APIResponse<DeleteFamilyResponseType>> => {
  try {
    const response = await api
      .delete(`family/members/${memberId}`, { searchParams: params })
      .json<APIResponse<DeleteFamilyResponseType>>();
    console.log('패밀리 탈퇴 성공');
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
