import { HTTPError } from 'ky';
import { api } from '~apis/api';
import { APIResponse } from '~types/api';
import { removeAccessToken } from '~utils/controlAccessToken';

export const logout = async (): Promise<APIResponse<string>> => {
  try {
    const response = await api.post('member/logout').json<APIResponse<string>>();

    await removeAccessToken();

    api.extend({
      headers: {
        Authorization: '',
      },
    });

    console.log('로그아웃 완료 및 Authorization 헤더 초기화');

    return response;
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorData = await error.response.json();
      console.error(errorData);
    }
    throw error;
  }
};
