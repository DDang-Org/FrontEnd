import { HTTPError } from 'ky';
import { api } from '~apis/api';
import { APIResponse } from '~types/api';

export interface ResponseBlockUser {
  blockId: number;
  blockerMemberId: number;
  blockedMemberId: number;
  blockedMemberName: string;
}

export const blockUser = async (blockedId: number): Promise<APIResponse<ResponseBlockUser>> => {
  try {
    const response = await api.post(`block/${blockedId}`).json<APIResponse<ResponseBlockUser>>();
    return response;
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorData = await error.response.json();
      console.error(errorData);
    }
    throw error;
  }
};
