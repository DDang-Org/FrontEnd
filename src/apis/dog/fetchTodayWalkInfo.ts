import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';

export type FetchTodayWalkInfoRequestType = {
  dogId: number;
};

export type FetchTodayWalkInfoResponseType = {
  timeDuration: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  totalDistanceMeter: number;
  totalCalorie: number;
};

export const fetchTodayWalkInfo = async ({
  dogId,
}: FetchTodayWalkInfoRequestType): Promise<APIResponse<FetchTodayWalkInfoResponseType>> => {
  try {
    const response = await api.get(`dogs/${dogId}/walk`).json<APIResponse<FetchTodayWalkInfoResponseType>>();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
