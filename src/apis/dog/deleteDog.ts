import { HTTPError } from 'ky';
import { api } from '~apis/api';
import { APIResponse } from '~types/api';

export const deleteDog = async (dogId: number): Promise<APIResponse<{}>> => {
  try {
    const response = await api.delete(`dogs/${dogId}`).json<APIResponse<{}>>();
    return response;
  } catch (error) {
    console.error(error as HTTPError);
    throw new Error('An unexpected error occurred');
  }
};
