import { HTTPError } from 'ky';
import { api } from '~apis/api';
import { APIResponse } from '~types/api';

export const deleteDog = async (dogId: { dogId: number }): Promise<APIResponse<{}>> => {
  try {
    const response = await api.delete(`dog/${dogId}`).json<APIResponse<{}>>();
    return response;
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorResponse = await error.response.json();
      console.error('Error Response:', errorResponse);
      console.error('Status Code:', error.response.status);
      throw new Error(errorResponse.message || 'HTTP Error occurred');
    } else if (error instanceof Error) {
      console.error('Error Message:', error.message);
      throw new Error(error.message || 'Unknown error occurred');
    } else {
      console.error(error);
      throw new Error('An unexpected error occurred');
    }
  }
};
