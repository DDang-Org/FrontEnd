import { api } from '~apis/api';
import { APIResponse } from '~types/api';

export const fetchWalkRecordsByMonth = async (): Promise<APIResponse<number[]>> => {
  const response = await api.get(`log/year`).json<APIResponse<number[]>>();
  return response;
};
