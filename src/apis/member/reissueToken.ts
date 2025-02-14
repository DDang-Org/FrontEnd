import { HTTPError } from 'ky';
import { api } from '~apis/api';
import { APIResponse } from '~types/api';
import { storeAccessToken } from '~utils/controlAccessToken';

export const reissueToken = async (): Promise<APIResponse<string>> => {
  try {
    const response = await api.post('member/reissue');

    const authorizationHeader = response.headers.get('authorization');
    if (authorizationHeader) {
      const accessToken = authorizationHeader.replace('Bearer ', '');
      console.log('New Access Token:', accessToken);
      await storeAccessToken(accessToken);
    } else {
      console.warn('Authrizaion 헤더가 존재하지 않습니다.');
    }

    const responseData = await response.json<APIResponse<string>>();

    console.log('response로 들어온 data', responseData);
    return responseData;
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorData = await error.response.json();
      console.error('Reissue Token Error:', errorData);
    }
    throw error;
  }
};
