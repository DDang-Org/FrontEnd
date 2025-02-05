import { api } from '~apis/api';
import { APIResponse } from '~types/api';

export interface LogDetailsRequest {
  selectDate: string;
  dogId: number;
}

export interface LogDetailResponse {
  totalDistance: number;
  walkCount: number;
  countWalksWithMember: number;
}

export const fetchLogDetails = async ({
  selectDate,
  dogId,
}: LogDetailsRequest): Promise<APIResponse<LogDetailResponse>> => {
  try {
    const response = await api
      .get(`log/date/${dogId}`, {
        searchParams: { selectDate },
      })
      .json<APIResponse<LogDetailResponse>>();
    return response;
  } catch (error) {
    throw error;
  }
};
