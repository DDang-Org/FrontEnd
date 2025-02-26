import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';

export type DeleteFamilyMySelfRequestType = {};

export type DeleteFamilyMySelfResponseType = {};

export const deleteFamilyMySelf = async (): Promise<APIResponse<DeleteFamilyMySelfRequestType>> => {
  try {
    const response = await api.delete(`family/leave`).json<APIResponse<DeleteFamilyMySelfResponseType>>();
    console.log('패밀리 나가기 성공');
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
