import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';

export type FetchTodayWalkInfoRequestType = {
  // Define request type here
};

export type FetchTodayWalkInfoResponseType = {
  // Define response type here
};

export const fetchTodayWalkInfo = async (
  params: FetchTodayWalkInfoRequestType,
): Promise<APIResponse<FetchTodayWalkInfoResponseType>> => {
  try {
    const response = await api
      .get('endpoint', { searchParams: params })
      .json<APIResponse<FetchTodayWalkInfoResponseType>>();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
