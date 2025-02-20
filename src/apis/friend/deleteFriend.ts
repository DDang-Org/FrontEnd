import { HTTPError } from 'ky';
import { api } from '~apis/api';
import { APIResponse } from '~types/api';

export const deleteFriend = async (memberId: number): Promise<APIResponse<{}>> => {
  try {
    const response = await api
      .delete('friend', {
        json: { memberId },
      })
      .json<APIResponse<{}>>();
    return response;
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorData = await error.response.json();
      console.error(errorData);
    }
    throw error;
  }
};
