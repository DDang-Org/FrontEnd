import { api } from '~apis/api';
import { APIResponse } from '~types/api';

export interface WalkRecordsByMonthRequest {
  dogId: number;
}

export interface WalkRecordsByMonthResponse {
  response: number[];
}

export const fetchWalkRecordsByMonth = async ({
  dogId,
}: WalkRecordsByMonthRequest): Promise<APIResponse<WalkRecordsByMonthResponse>> => {
  const response = await api.get(`log/year/${dogId}`).json<APIResponse<WalkRecordsByMonthResponse>>();
  return response;
};
