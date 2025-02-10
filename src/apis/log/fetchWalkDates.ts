import { api } from '~apis/api';
import { APIResponse } from '~types/api';

export const fetchWalkDates = async ({ dogId }: { dogId: number }): Promise<APIResponse<string[]>> => {
  try {
    const response = api.get(`log/${dogId}`).json<APIResponse<string[]>>();
    return response;
  } catch (error) {
    throw error;
  }
};
