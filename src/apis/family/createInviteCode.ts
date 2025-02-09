import { HTTPError } from 'ky';
import { api } from '~apis/api';
import { APIResponse } from '~types/api';

export interface ResponseCreateInviteCode {
  familyId: number;
  inviteCode: string;
  expiresInSeconds: number;
}

export const createInviteCode = async (): Promise<APIResponse<ResponseCreateInviteCode>> => {
  try {
    const response = await api.get('family/invite-code').json<APIResponse<ResponseCreateInviteCode>>();
    return response;
  } catch (error) {
    console.error(error as HTTPError);
    throw error;
  }
};
