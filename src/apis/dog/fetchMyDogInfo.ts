import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';
import { BooleanString } from '~types/boolean-string';
import { Gender } from '~types/gender';

export type FetchMyDogInfoResponseType = {
  dogId: number;
  dogName: string;
  breed: string;
  dogBirthDate: string;
  weight: number;
  dogGender: Gender;
  dogProfileImg: string;
  walkCount: number;
  isNeutered: BooleanString;
  familyId: number;
  comment: string;
};

export const fetchMyDogInfo = async (): Promise<FetchMyDogInfoResponseType[]> => {
  try {
    const response = await api.get('dogs').json<APIResponse<FetchMyDogInfoResponseType[]>>();
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
