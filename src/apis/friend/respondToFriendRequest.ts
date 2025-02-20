import { HTTPError } from 'ky';
import { api } from '~apis/api';
import { APIResponse } from '~types/api';
import { FamilyRole } from '~types/family-role';
import { Gender } from '~types/gender';

interface ResponseFreindRequestAction {
  memberId: number;
  memberName: string;
  email: string;
  provider: string;
  memberGender: Gender;
  memberBirthDate: string;
  address: string;
  familyRole: FamilyRole;
  memberProfileImg: number;
}

export const respondToFriendRequest = async (
  memberId: number,
  decision: 'ACCEPT' | 'DENY',
): Promise<APIResponse<ResponseFreindRequestAction>> => {
  try {
    const response = await api
      .post('friend', {
        json: { memberId, decision },
      })
      .json<APIResponse<ResponseFreindRequestAction>>();
    return response;
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorData = await error.response.json();
      console.error(errorData);
    }
    throw error;
  }
};
