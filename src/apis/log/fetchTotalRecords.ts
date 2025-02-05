import { api } from '~apis/api';
import { APIResponse } from '~types/api';

export interface TotalRecordsRequest {
  dogId: number;
}

export interface TimeDuration {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface WalkData {
  timeDuration: TimeDuration;
  walkCount: number;
  totalDistanceMeter: number;
}

export const fetchTotalRecords = async ({ dogId }: TotalRecordsRequest): Promise<APIResponse<WalkData>> => {
  try {
    const response = await api.get(`log/total/${dogId}`).json<APIResponse<WalkData>>();
    return response;
  } catch (error) {
    throw error;
  }
};
