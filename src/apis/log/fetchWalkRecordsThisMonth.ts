import { api } from '~apis/api';
import { TotalRecordsRequest, WalkData } from '~apis/log/fetchTotalRecords';
import { APIResponse } from '~types/api';

export const fetchWalkRecordsThisMonth = async ({ dogId }: TotalRecordsRequest): Promise<APIResponse<WalkData>> => {
  try {
    const response = await api.get(`log/total/${dogId}`).json<APIResponse<WalkData>>();
    return response;
  } catch (error) {
    throw error;
  }
};
