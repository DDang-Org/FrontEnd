import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';

export type UpdateFamilyRepresentativeRequestType = {
  memberId: number;
};

export type UpdateFamilyRepresentativeResponseType = {};

export const updateFamilyRepresentative = async ({
  memberId,
  ...data
}: Partial<UpdateFamilyRepresentativeRequestType>): Promise<APIResponse<UpdateFamilyRepresentativeResponseType>> => {
  try {
    const response = await api
      .patch(`family/representative/${memberId}`, { json: data })
      .json<APIResponse<UpdateFamilyRepresentativeResponseType>>();
    console.log('패밀리장 위임 성공', response);
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
