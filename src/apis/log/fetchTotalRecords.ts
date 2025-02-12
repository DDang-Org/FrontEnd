import { api } from '~apis/api';
import { APIResponse } from '~types/api';

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

export const fetchTotalRecords = async (): Promise<APIResponse<WalkData>> => {
  try {
    const response = await api.get(`log/total`).json<APIResponse<WalkData>>();
    return response;
  } catch (error) {
    throw error;
  }
};
