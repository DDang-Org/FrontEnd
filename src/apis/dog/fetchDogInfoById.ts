import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';
import { BooleanString } from '~types/boolean-string';
import { Gender } from '~types/gender';

export type FetchDogInfoByIdRequestType = {
  dogId: number;
};

export type FetchDogInfoByIdResponseType = {
  dogId: number;
  dogName: string;
  breed: string;
  dogBirthDate: string;
  weight: number;
  dogGender: Gender;
  dogProfileImg: string;
  isNeutered: BooleanString;
  familyId: number;
  comment: string;
};

export const fetchDogInfoById = async ({
  // dogId,
}: FetchDogInfoByIdRequestType): Promise<APIResponse<FetchDogInfoByIdResponseType>> => {
  try {
    const response = await api.get(`dogs/3`).json<APIResponse<FetchDogInfoByIdResponseType>>();
    return response;
  } catch (error) {
    console.error('Error fetching dog info by ID:', (error as unknown as Error).message || error);
    throw error;
  }
};
