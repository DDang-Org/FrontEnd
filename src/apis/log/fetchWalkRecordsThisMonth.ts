import { api } from '~apis/api';
import { WalkData } from '~apis/log/fetchTotalRecords';
import { APIResponse } from '~types/api';

export const fetchWalkRecordsThisMonth = async (): Promise<APIResponse<WalkData>> => {
  try {
    const response = await api.get(`log/total`).json<APIResponse<WalkData>>();
    return response;
  } catch (error) {
    throw error;
  }
};
