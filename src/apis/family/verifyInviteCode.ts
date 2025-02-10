import { api } from '~apis/api';
import { FetchMyDogInfoResponseType } from '~apis/dog/fetchMyDogInfo';
import { APIResponse } from '~types/api';

export const verifyInviteCode = async (inviteCode: string): Promise<APIResponse<FetchMyDogInfoResponseType>> => {
  const code = { inviteCode };
  try {
    const response = api
      .post('family/dogs', {
        json: code,
      })
      .json<APIResponse<FetchMyDogInfoResponseType>>();
    return response;
  } catch (error) {
    throw error;
  }
};
