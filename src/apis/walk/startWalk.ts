import { HTTPError } from 'ky';
import { APIResponse } from '~types/api';
import { api } from '~apis/api';

export interface RequestStartWalk {
  dogIds: number[];
}

export interface ResponseStartWalk {
  code: string;
  status: string;
  message: string;
  data: {} | string;
}

export const startWalk = async (userInfo: RequestStartWalk): Promise<APIResponse<ResponseStartWalk>> => {
  try {
    const response = api
      .post('walk/start', {
        json: userInfo,
      })
      .json<APIResponse<ResponseStartWalk>>();
    return response;
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorData = await error.response.json();
      console.error(errorData);
    } else {
      console.error(error);
    }
    throw error;
  }
};
