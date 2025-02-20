import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';

export type DeleteFamilyRequestType = {
  memberId: number;
};

export type DeleteFamilyResponseType = {};

export const deleteFamily = async ({
  queryKey,
}: {
  queryKey: [string, number];
}): Promise<APIResponse<DeleteFamilyResponseType>> => {
  const [, memberId] = queryKey;
  try {
    const response = await api.delete(`family/members/${memberId}`).json<APIResponse<DeleteFamilyResponseType>>();
    console.log('패밀리 퇴출 성공');
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
