import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';

export type fetchUserWalkInfoByIdResponseType = {
  totalDistance: number;
  walkCount: number;
  countWalksWithMember: number;
};

export const fetchUserWalkInfoById = async (): Promise<fetchUserWalkInfoByIdResponseType> => {
  try {
    const response = await api.get(`member/walk-info`).json<APIResponse<fetchUserWalkInfoByIdResponseType>>();
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
