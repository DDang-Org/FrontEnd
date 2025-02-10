import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';

export type FetchAccumulatedWalkInfoRequestType = {
  dogId: number;
};

export type FetchAccumulatedWalkInfoResponseType = {
  totalDistance: number;
  walkCount: number;
  countWalksWithMember: number;
};

export const fetchAccumulatedWalkInfo = async ({
  dogId,
}: FetchAccumulatedWalkInfoRequestType): Promise<APIResponse<FetchAccumulatedWalkInfoResponseType>> => {
  try {
    const response = await api.get(`dogs/${dogId}/walks`).json<APIResponse<FetchAccumulatedWalkInfoResponseType>>();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
