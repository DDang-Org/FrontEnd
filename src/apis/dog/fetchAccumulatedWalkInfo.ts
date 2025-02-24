import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';

export type FetchAccumulatedWalkInfoRequestType = {
  memberId: number;
};

export type FetchAccumulatedWalkInfoResponseType = {
  totalDistance: number;
  walkCount: number;
  countWalksWithMember: number;
};

export const fetchAccumulatedWalkInfo = async ({
  memberId,
}: FetchAccumulatedWalkInfoRequestType): Promise<APIResponse<FetchAccumulatedWalkInfoResponseType>> => {
  try {
    const response = await api
      .get(`member/walk-info/${memberId}`)
      .json<APIResponse<FetchAccumulatedWalkInfoResponseType>>();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
