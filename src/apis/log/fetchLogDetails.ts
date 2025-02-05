import { api } from '~apis/api';
import { APIResponse } from '~types/api';
import { AvatarNumber } from '~types/avatar-number';

export interface LogDetailsRequest {
  selectDate: string;
  dogId: number;
}

export interface TimeDuration {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface LogDetailResponse {
  walkImg: string;
  walkId: number;
  timeDuration: TimeDuration;
  totalCalorie: number;
  totalDistanceMeter: number;
  memberName: string;
  memberProfileImg: AvatarNumber;
}

export const fetchLogDetails = async ({
  selectDate,
  dogId,
}: LogDetailsRequest): Promise<APIResponse<LogDetailResponse[]>> => {
  try {
    const response = await api
      .get(`log/date/${dogId}`, {
        searchParams: { selectDate },
      })
      .json<APIResponse<LogDetailResponse[]>>();
    return response;
  } catch (error) {
    throw error;
  }
};
