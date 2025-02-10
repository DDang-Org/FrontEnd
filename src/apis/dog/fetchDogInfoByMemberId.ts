import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';
import { Gender } from '~types/gender';

export type FetchDogInfoByMemberIdRequestType = {
  memberId: number;
};

export type FetchDogInfoByMemberIdResponseType = {
  dogId: number;
  dogName: string;
  breed: string;
  dogBirthDate: string;
  weight: number;
  dogGender: Gender;
  dogProfileImg: string;
  isNeutered: string;
  walkCount: number;
  familyId: number;
  comment: string;
}[];

export const fetchDogInfoByMemberId = async ({
  memberId,
}: FetchDogInfoByMemberIdRequestType): Promise<APIResponse<FetchDogInfoByMemberIdResponseType>> => {
  try {
    const response = await api.get(`dogs/member/${memberId}`).json<APIResponse<FetchDogInfoByMemberIdResponseType>>();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
