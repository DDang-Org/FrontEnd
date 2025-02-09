import { HTTPError } from 'ky';
import { api } from '~apis/api';
import { APIResponse } from '~types/api';

export interface ResponseJoinFamily {
  familyId: number;
  memeberId: number;
}

export const joinFamily = async (inviteCode: string): Promise<APIResponse<ResponseJoinFamily>> => {
  try {
    const response = await api
      .post('family/join', {
        json: inviteCode,
      })
      .json<APIResponse<ResponseJoinFamily>>();
    return response;
  } catch (error) {
    console.error(error as HTTPError);
    throw error;
  }
};
