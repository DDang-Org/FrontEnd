import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';
import { BooleanString } from '~types/boolean-string';
import { FamilyRole } from '~types/family-role';
import { Gender } from '~types/gender';

export type FetchBlockedUsersResponseType = {
  name: string;
  gender: Gender;
  dogGender: Gender;
  familyRole: FamilyRole;
  buttonText: string;
  isLast: BooleanString;
}[];

export const fetchBlockedUsers = async (): Promise<APIResponse<FetchBlockedUsersResponseType>> => {
  try {
    const response = await api.get('member/block').json<APIResponse<FetchBlockedUsersResponseType>>();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
