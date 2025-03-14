import { HTTPError } from 'ky';
import { api } from '~apis/api';
import { APIResponse } from '~types/api';

export const unblockUser = async (blockId: number): Promise<APIResponse<string>> => {
  try {
    const response = await api.delete(`block/${blockId}`).json<APIResponse<string>>();
    return response;
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorData = await error.response.json();
      console.error(errorData);
    }
    throw error;
  }
};
