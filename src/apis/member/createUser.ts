import { HTTPError } from 'ky';
import { APIResponse } from '~types/api';
import { FamilyRole } from '~types/family-role';
import { Gender } from '~types/gender';
import { api } from '~apis/api';
import { storeAccessToken } from '~utils/controlAccessToken';

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
    const response = await api.post('member/join', {
      json: userInfo,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const authorizationHeader = response.headers.get('authorization');
    if (authorizationHeader) {
      console.log('들어온 액세스토큰', authorizationHeader);
      const accessToken = authorizationHeader.replace('Bearer ', '');
      console.log('Access Token', accessToken);

      await storeAccessToken(accessToken);
    } else {
      console.warn('Authorization 헤더가 존재하지 않거나 형식이 올바르지 않습니다.');
    }

    const responseData = await response.json<APIResponse<ResponseUserProfile>>();
    return responseData;
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorData = await error.response.json();
      console.error(errorData);
    }
    throw error;
  }
};
