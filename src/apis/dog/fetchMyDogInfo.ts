import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';

export type FetchMyDogInfoResponseType = {
  dogId: number;
  dogName: string;
  breed: string;
  dogBirthDate: string;
  weight: number;
  dogGender: string;
  dogProfileImg: string;
  isNeutered: string;
  familyId: number;
  comment: string;
};

export const fetchMyDogInfo = async (): Promise<APIResponse<FetchMyDogInfoResponseType>> => {
  try {
    const response = await api.get('dogs').json<APIResponse<FetchMyDogInfoResponseType>>();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
