import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';
import { FamilyRole } from '~types/family-role';

export type FetchUserResponseType = {
  memberId: number;
  name: string;
  email: string;
  provider: string;
  gender: string;
  address: string;
  familyRole: FamilyRole;
  profileImg: string;
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
