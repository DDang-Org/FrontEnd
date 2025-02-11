import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';
import { Gender } from '~types/gender';
import { FamilyRole } from '~types/family-role';
import { BooleanString } from '~types/boolean-string';
import { Provider } from '~types/provider';
import { AvatarNumber } from '~types/avatar-number';

export type FetchfamilyInfoResponseType = {
  memberId: number;
  memberName: string;
  email: string;
  provider: Provider;
  memberGender: Gender;
  memberBirthDate: string;
  address: string;
  familyRole: FamilyRole;
  memberProfileImg: AvatarNumber;
  memberWalkCount: number;
  isRepresent: BooleanString;
};

export const fetchFamilyInfo = async (): Promise<APIResponse<FetchfamilyInfoResponseType[]>> => {
  try {
    const response = await api.get('family').json<APIResponse<FetchfamilyInfoResponseType[]>>();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
