import { HTTPError } from 'ky';
import { api } from '~apis/api';
import { APIResponse } from '~types/api';
import { FamilyRole } from '~types/family-role';
import { Gender } from '~types/gender';
import { UserProfileType } from '~types/user-profile';
import { REVERSE_FAMILY_ROLE } from '../../constants/family-role';

export interface RequestUpdateUser {
  memberName: string;
  memberGender: Gender;
  address: string;
  familyRole: FamilyRole;
  memberProfileImg: number;
}

export interface ResponseUpdateUser {
  memberId: number;
  memberName: string;
  memberGender: Gender;
  address: string;
  familyRole: FamilyRole;
  memberProfileImg: number;
}

export const updateUser = async (user: UserProfileType): Promise<APIResponse<ResponseUpdateUser>> => {
  const requestUserProfile: RequestUpdateUser = {
    memberName: user.memberName,
    memberGender: user.memberGender as Gender,
    address: user.address,
    familyRole: REVERSE_FAMILY_ROLE[user.familyRole as keyof typeof REVERSE_FAMILY_ROLE],
    memberProfileImg: user.memberProfileImg as number,
  };

  try {
    const response = api
      .patch('member/update', {
        json: requestUserProfile,
      })
      .json<APIResponse<ResponseUpdateUser>>();
    return response;
  } catch (error) {
    if (error instanceof HTTPError) {
      console.error(error.response);
    }
    throw error;
  }
};
