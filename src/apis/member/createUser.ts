import { HTTPError } from 'ky';
import { APIResponse } from '~types/api';
import { FamilyRole } from '~types/family-role';
import { Gender } from '~types/gender';
import { api } from '~apis/api';

export interface RequestUserProfile {
  email: string;
  provider: string;
  memberName: string;
  memberGender: Gender | null;
  memberBirthDate: string;
  address: string;
  familyRole: FamilyRole;
  memberProfileImg: number;
}

export interface ResponseUserProfile {
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

export const createUser = async (userInfo: RequestUserProfile): Promise<APIResponse<ResponseUserProfile>> => {
  try {
    const response = api
      .post('member/join', {
        json: userInfo,
      })
      .json<APIResponse<ResponseUserProfile>>();
    return response;
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorData = await error.response.json();
      console.error(errorData);
    }
    throw error;
  }
};
