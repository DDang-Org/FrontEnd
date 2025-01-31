import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';
import { AvatarNumber } from '~types/avatar-number';
import { FamilyRole } from '~types/family-role';
import { Gender } from '~types/gender';

export type FetchUserResponseType = {
  memberId: number;
  name: string;
  email: string;
  provider: string;
  gender: Gender;
  address: string;
  familyRole: FamilyRole;
  profileImg: string;
  avatarNumber: AvatarNumber;
};

export const fetchUser = async (): Promise<APIResponse<FetchUserResponseType>> => {
  try {
    const response = await api.get('member').json<APIResponse<FetchUserResponseType>>();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
