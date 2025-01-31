import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';
import { AvatarNumber } from '~types/avatar-number';
import { FamilyRole } from '~types/family-role';
import { Gender } from '~types/gender';

export type FetchUserByIdRequestType = {
  memberId: number;
};

export type FetchUserByIdResponseType = {
  memberId: number;
  memberName: string;
  email: string;
  address: string;
  memberGender: Gender;
  familyRole: FamilyRole;
  memberProfileImg: string;
  avatarNumber: AvatarNumber;
};

export const fetchUserById = async ({
  memberId,
}: FetchUserByIdRequestType): Promise<APIResponse<FetchUserByIdResponseType>> => {
  try {
    const response = await api.get(`member/${memberId}`).json<APIResponse<FetchUserByIdResponseType>>();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
