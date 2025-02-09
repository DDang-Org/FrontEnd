import { HTTPError } from 'ky';
import { api } from '~apis/api';
import { FetchMyDogInfoResponseType } from '~apis/dog/fetchMyDogInfo';
import { APIResponse } from '~types/api';

export const verifyInviteCode = async (inviteCode: string): Promise<APIResponse<FetchMyDogInfoResponseType>> => {
  try {
    const response = api
      .post('family/dogs', {
        json: inviteCode,
      })
      .json<APIResponse<FetchMyDogInfoResponseType>>();
    return response;
  } catch (error) {
    console.error(error as HTTPError);
    throw error;
  }
};
