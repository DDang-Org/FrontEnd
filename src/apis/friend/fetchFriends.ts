import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';
import { AvatarNumber } from '~types/avatar-number';
import { FamilyRole } from '~types/family-role';
import { Gender } from '~types/gender';

export type FetchFriendsResponseType = {
  memberId: number;
  memberGender: Gender;
  familyRole: FamilyRole;
  memberProfileImg: AvatarNumber;
  memberName: string;
}[];

export const fetchFriends = async (): Promise<APIResponse<FetchFriendsResponseType>> => {
  try {
    const response = await api.get('friend').json<APIResponse<FetchFriendsResponseType>>();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
