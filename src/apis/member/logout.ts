import { HTTPError } from 'ky';
import { api } from '~apis/api';
import { APIResponse } from '~types/api';

export const logout = async (): Promise<APIResponse<string>> => {
  try {
    const response = await api.post('member/logout').json<APIResponse<string>>();
    return response;
  } catch (error) {
    if (error instanceof HTTPError) {
      console.error(error);
    }
    throw error;
  }
};
