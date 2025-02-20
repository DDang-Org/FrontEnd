import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';

export type UpdateFamilyRepresentativeRequestType = {
  memberId: number;
};

export type UpdateFamilyRepresentativeResponseType = {};

export const updateFamilyRepresentative = async ({
  queryKey,
}: {
  queryKey: [string, number];
}): Promise<APIResponse<UpdateFamilyRepresentativeResponseType>> => {
  const [, memberId] = queryKey;
  try {
    const response = await api
      .patch(`family/representative/${memberId}`)
      .json<APIResponse<UpdateFamilyRepresentativeResponseType>>();
    console.log('패밀리장 위임 성공', response);
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
